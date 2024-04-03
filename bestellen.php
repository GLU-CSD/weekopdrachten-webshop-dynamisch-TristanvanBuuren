<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Webshop</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <meta name="description" content="">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="icon.png">
  <meta name="theme-color" content="#fafafa">

  <style>
    ul#menu li {
      display: inline;
    }
  </style>
</head>

<body class="w-max" onload="ShowInfo(); GetUuid();">
  <form method="POST" action="resultaat.html">
    <br>
    <a class="fake-button c-mf" href="winkelwagen.html" onclick="SaveInfo();" tabindex="1">Check Winkelwagen</a>
    <a class="fake-button c-mf" href="index.php" onclick="SaveInfo();" tabindex="2">Terug naar webstore</a>
    <div class="fake-button c-mf" onclick="ClearInfo()" tabindex="3">Clear Storage</div>
    <p id="bestelling-id"></p>
    <fieldset id="personalia" class="pos-mid">
      <legend>Personalia</legend>

      <label>Uw aanhef:</label>
      <input type="radio" id="dhr" name="aanhef" value="dhr" tabindex="4">
      <label for="dhr">Dhr.</label>
      <input type="radio" id="mev" name="aanhef" value="mev">
      <label for="mev">Mev.</label><br>

      <label for="voornaam">Uw voornaam:*</label>
      <input type="text" name="voornaam" id="voornaam" placeholder="John" required tabindex="5">

      <label for="tussenvoegsel">tussenvoegsel:</label>
      <input type="text" name="tussenvoegsel" id="tussenvoegsel" class="w-50" tabindex="6">

      <label for="achternaam">achternaam:*</label>
      <input type="text" name="achternaam" id="achternaam" placeholder="Doe" required tabindex="7"><br>

      <label for="geboortedatum">geboortedatum:*</label>
      <input type="date" name="geboortedatum" id="geboortedatum" required tabindex="8">
      <input type="button" id="calc" value="calculate" onclick="clicked(this);">

      <div id="leeftijd">Uw leeftijd:</div>
      <!-- A script that tells you how old you are based on input data -->
    </fieldset><br>
    <fieldset id="locatie" class="pos-mid">
      <legend>Adress</legend>

      <label for="straatnaam">Uw straat:*</label>
      <input type="text" name="straatnaam" id="straatnaam" placeholder="straatnaam" required tabindex="9">

      <label for="huisnummer">Uw huisnummer:*</label>
      <input type="number" name="huisnummer" id="huisnummer" placeholder="78" class="w-30" required tabindex="10"><br>

      <label for="postcode">Uw postcode:*</label>
      <input type="text" name="postcode" id="postcode" placeholder="3521GH" class="w-80" tabindex="11">

      <label for="land">Uw land:*</label>
      <select name="land" id="land" class="w-120" required tabindex="12">
        <option value="" label="none"></option>
        <option value="Nederland">Nederland</option>
        <option value="Engeland">Engeland</option>
        <option value="Frankrijk">Frankrijk</option>
        <option value="Amerika">Amerika</option>
        <option value="Rusland">Rusland</option>
        <option value="Japan">Japan</option>
      </select>
    </fieldset><br>
    <fieldset id="contact" class="pos-mid">
      <legend>Contactinformatie</legend>

      <label for="emailadres">Uw e-mailadres:*</label>
      <input type="email" name="emailadres" id="emailadres" placeholder="johndoe@example.com" required tabindex="13">
      <!-- confirm email -->
      <!-- Email sent to you to confirm your order -->

      <label for="telefoonnummer">Uw nummer:*</label>
      <input type="tel" name="telefoonnummer" id="telefoonnummer" placeholder="123-45-678" required tabindex="14">
      <!-- https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_tel -->
    </fieldset>
    <div id="avvBox">
      <input type="checkbox" id="avv" name="avv" required tabindex="15">
      <label for="avv" id="avvText">Ik accepteer de agemene voorwaarden. <a href="AVV.html">Lees hier.</a></label>
      <input type="submit" id="submit" name="submit" value="submit" onclick="SaveInfo();">
    </div>
    <div class="pos-mid" id="star"> * Vereiste veld</div>
    <br>

    <!-- Payment: Select box as https://checkout.travelex.co.uk/gb/Payment -->



    <!-- <p>BESTEL FORMULIER</p>     -->
  </form>
  <script src="./assets/js/age.js"></script>
  <script src="./assets/js/bestelling.js"></script>
  <script src="./assets/js/cart.js"></script>
</body>

</html>
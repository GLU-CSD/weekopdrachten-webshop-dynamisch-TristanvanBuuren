<?php
include_once("view/header.php");
?>
<main>
  <!-- START HEADER BOTTOMBAR-->
  <div class="header-bottom-bar">
    <div id="logo"><img src="assets/img/logo.png" alt="logo" width="20" height="20"></div>
    <div class="navbar">
      <a href="index.php" class="item">Home</a>
      <a href="index.php" class="item">Euro</a>
      <a href="dollar.php" class="item selected">Dollar</a>
      <a href="yen.php" class="item">Yen</a>
      <a href="pound.php" class="item">Pond</a>
      <a href="roebel.php" class="item">Roebel</a>
    </div>
    <div class="shop-buttons">
      <div id="menu">
        <a class="button">search</a>
        <a class="button">Vergelijk</a>
        <a class="button" href="winkelwagen.html">Winkelwagen</a>
      </div>
      <p id="counter">(0)</p>
      <p id="clear">X</p>
    </div>
  </div>
  <!-- / HEADER BOTTOMBAR-->
  </div>
  <!-- START CONTENT -->
  <div class="content">
    <!-- START SIDEBAR -->
    <div class="side-bar">
      <div id="direction">Home > Dollar > Brief Geld</div>
      <div class="side-box" id="categorie">
        <span class="fw-bolder fs-20 bb-2-s-b">Geld</span>
        <ul class="arrow-points">
          <li>Alle (13)</li>
          <li>Munt Geld (6)</li>
          <li>Brief Geld (7)</li>
        </ul>
      </div>
      <div class="side-box" id="Uw-selectie-verfijnen">
        <span class="fw-bolder fs-20 bb-2-s-b">Uw selectie verfijnen</span>
        <span class="fw-bolder mb-5">Echtheidskenmerken</span>
        <ul class="arrow-points">
          <li>Voelbare inkt (14)</li>
          <li>Hologram (12)</li>
          <li>veiligheidsdraad (13)</li>
          <li>Kantelen (11)</li>
          <li>uv-licht (15)</li>
          <li>Kleine letters (10)</li>
        </ul>
        <span class="ds-flex fd-rr col-lsb c-p">more</span>
      </div>
      <div class="side-box" id="Prijs">
        <span class="fw-bolder fs-20 bb-2-s-b">Prijs</span>
        <div class="min-max-slider" data-legendnum="2">
          <label for="min">€ 0,00</label>
          <input id="min" class="min" name="min" type="range" step="1" min="0" max="1000">
          <label for="max">€ 1000,00</label>
          <input id="max" class="max" name="max" type="range" step="1" min="0" max="1000">
        </div>
      </div>
      <div class="side-box" id="Recent-bekeken">
        <span class="fw-bolder bb-2-s-b">Recent bekeken</span>
        <div class="bekeken-items">
          <img src="assets/img/1_dollar.jpg" alt="1-dollar" width="100" height="50">
          <div>
            <span class="fs-small fw-bold">10x $1 biljetten</span>
            <span class="fs-small">€7,95</span>
          </div>
        </div>
        <div class="bekeken-items">
          <img src="assets/img/10_pounds.jpg" alt="10-pound" width="100" height="50">
          <div>
            <span class="fs-small fw-bold">10x £10 biljetten</span>
            <span class="fs-small">€59,95</span>
          </div>
        </div>
      </div>
      <div class="side-box" id="Niewsbrief">
        <span class="fw-bolder bb-2-s-b mb-5">Nieuwsbrief</span>
        <input type="email" class="b-2-s-b">
        <button type="button" class="b-2-s-b bcol-000195255 col-white mt-5">Inschrijven</button>
      </div>
    </div>
    <!-- / SIDEBAR -->
    <!-- START ARTICLES -->
    <div class="articles">
      <?php
      include("view/products.php");

      foreach ($currencies["dollar"] as $currency) {
        echo "<div class='product'>";
        echo "<img src=" . "'" . ($currency["photos"]["photo1"]) . "'" . "  class='geld-briefje'/>";
        echo "<span class='product-text'>";
        echo "<a href='productpage.php?id=". $currency["id"] ."&category=". $currency["category"] ." '>" . $currency["title"] . "</a>";
        echo "</span>";
        // echo "<div class='cart-button' onclick=\"ManageStorage('" . $currency['msName'] . "')\">";
        echo "<div class='cart-button' onclick='ManageStorage(" . '"' . $currency['msName'] . '"' . ")'>";
        echo "<img class='cart-img' alt='cart' width='40' height='40' src=" . "'" . ($currency["photos"]["photo2"]) . "'" . "/>";
        echo "</div>";
        echo "<span class='beschrijving'>";
        echo $currency["description"];
        echo "</span>";
        echo "<span class='prijs'>";
        echo $currency["price"];
        echo "</span>";
        echo "</div>";
      }
      ?>
      <!-- <div class="product" id="1dollar">
        <img src="assets/img/1_dollar.jpg" alt="1-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $1 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar1')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 7,95</span>
      </div>
      <div class="product" id="2dollar">
        <img src="assets/img/2_dollar.jpg" alt="2-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $2 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar2')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 9,95</span>
      </div>
      <div class="product" id="5dollar">
        <img src="assets/img/5_dollar.jpg" alt="5-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $5 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar5')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 39,95</span>
      </div>
      <div class="product" id="10dollar">
        <img src="assets/img/10_dollar.jpg" alt="10-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $10 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar10')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 69,95</span>
      </div>
      <div class="product" id="20dollar">
        <img src="assets/img/20_dollar.jpg" alt="20-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $20 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar20')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 149,95</span>
      </div>
      <div class="product" id="50dollar">
        <img src="assets/img/50_dollar.jpg" alt="50-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $50 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar50')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 349,95</span>
      </div>
      <div class="product" id="100dollar">
        <img src="assets/img/100_dollar.jpg" alt="100-dollar" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x $100 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('dollar100')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 849,95</span>
      </div> -->
    </div>
    <!-- / ARTICLES -->
  </div>
  <!-- / CONTENT -->
  <?php
  include_once("view/footer.php")
    ?>
<?php
include_once ("view/header.php");
include_once ("view/sidebar.php");
?>
<main>
    </div>
    <!-- / SIDEBAR -->
    <!-- START ARTICLES -->
    <div class="articles">
      <?php
      include ("view/products.php");

      foreach ($currencies["roebel"] as $currency) {
        ?>
        <div class='product'>
          <a href='productpage.php?id=<?php echo $currency["id"] . "&cat=" . $currency["category"] ?>'>
            <img src='<?php echo $currency["photos"]["photo1"] ?>' class='geld-briefje' />
          </a>
          <span class='product-text'>
            <a class='td-none' href='productpage.php?id=<?php echo $currency["id"] . "&cat=" . $currency["category"] ?>'>
              <?php echo $currency["title"] ?>
            </a>
          </span>
          <div class='cart-button' onclick='ManageStorage("<?php echo $currency["msName"] ?>")'>
            <img class='cart-img' alt='cart' width='40' height='40' src='<?php echo $currency["photos"]["photo2"] ?>' />
          </div>
          <span class='beschrijving'>
            <?php echo $currency["description"] ?>
          </span>
          <span class='prijs'>
            <?php echo $currency["price"] ?>
          </span>
        </div>
        <?php
      }
      ?>
      <!-- <div class="product" id="100roebel">
        <img src="assets/img/100_roebel.jpg" alt="100-roebel" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x ₽100 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('roebel100')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 7,95</span>
      </div>
      <div class="product" id="200roebel">
        <img src="assets/img/200_roebel.jpg" alt="200-roebel" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x ₽200 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('roebel200')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 15,95</span>
      </div>
      <div class="product" id="1000roebel">
        <img src="assets/img/1000_roebles.jpg" alt="1000-roebel" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x ₽1000 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('roebel1000')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 69,95</span>
      </div>
      <div class="product" id="2000roebel">
        <img src="assets/img/2000_roebles.jpg" alt="2000-roebel" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x ₽2000 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('roebel2000')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 159,95</span>
      </div>
      <div class="product" id="5000roebel">
        <img src="assets/img/5000_roebel.jpg" alt="5000-roebel" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x ₽5000 biljetten</span>
        <div class="cart-button" onclick="ManageStorage('roebel5000')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
        </div>
        <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
        <span class="prijs">€ 299,95</span>
      </div> -->
    </div>
    <!-- / ARTICLES -->
  </div>
  <div class="dis-none">
    <p id="euro5display"></p>
    <p id="euro10display"></p>
    <p id="euro20display"></p>
    <p id="euro50display"></p>
    <p id="euro100display"></p>
    <p id="euro200display"></p>
    <p id="euro500display"></p>
    <p id="dollar1display"></p>
    <p id="dollar2display"></p>
    <p id="dollar5display"></p>
    <p id="dollar10display"></p>
    <p id="dollar20display"></p>
    <p id="dollar50display"></p>
    <p id="dollar100display"></p>
    <p id="yen1000display"></p>
    <p id="yen2000display"></p>
    <p id="yen5000display"></p>
    <p id="yen10000display"></p>
    <p id="pound5display"></p>
    <p id="pound10display"></p>
    <p id="pound20display"></p>
    <p id="pound50display"></p>
    <p id="roebel100display"></p>
    <p id="roebel200display"></p>
    <p id="roebel1000display"></p>
    <p id="roebel2000display"></p>
    <p id="roebel5000display"></p>
  </div>
  <!-- / CONTENT -->
  <?php
  include_once ("view/footer.php")
    ?>
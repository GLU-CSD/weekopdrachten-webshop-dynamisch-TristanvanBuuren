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

    foreach ($currencies["euro"] as $currency) {
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
      // echo "<a class='td-none' href='productpage.php?id=" . $currency["id"] . "&category=" . $currency["category"] . " '>" . $currency["title"] . "</a>";
    }
    ?>
    <!-- 
        <div class="product" id="5euro">
        <img src="assets/img/5_euro.jpg" alt="5-euro" width="200" height="100" class="geld-briefje">
        <span class="product-text">10x €5 biljetten</span>
        <div class="cart-button" onclick="ManageStorage(' euro5')">
          <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 14,95</span>
    </div>
    <div class="product" id="10euro">
      <img src="assets/img/10_euro.jpg" alt="10-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €10 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro10')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 19,95</span>
    </div>
    <div class="product" id="20euro">
      <img src="assets/img/20_euro.jpg" alt="20-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €20 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro20')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 29,95</span>
    </div>
    <div class="product" id="50euro">
      <img src="assets/img/50_euro.jpg" alt="50-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €50 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro50')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 69,95</span>
    </div>
    <div class="product" id="100euro">
      <img src="assets/img/100_euro.jpg" alt="100-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €100 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro100')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 149,95</span>
    </div>
    <div class="product" id="200euro">
      <img src="assets/img/200_euro.jpg" alt="200-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €200 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro200')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 299,95</span>
    </div>
    <div class="product" id="500euro">
      <img src="assets/img/500_euro.jpg" alt="500-euro" width="200" height="100" class="geld-briefje">
      <span class="product-text">10x €500 biljetten</span>
      <div class="cart-button" onclick="ManageStorage('euro500')">
        <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
      </div>
      <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
      <span class="prijs">€ 899,95</span>
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
  include_once ("view/footer.php");
  ?>
</main>
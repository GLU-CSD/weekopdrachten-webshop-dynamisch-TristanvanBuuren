<?php
include_once("view/header.php");
?>
<main>
      <!-- / HEADER TOPBAR-->
      <!-- START HEADER BOTTOMBAR-->
      <div class="header-bottom-bar">
        <div id="logo"><img src="assets/img/logo.png" alt="logo" width="20" height="20"></div>
        <div class="navbar">
          <a href="index.php" class="item">Home</a>
          <a href="index.php" class="item">Euro</a>
          <a href="dollar.php" class="item">Dollar</a>
          <a href="yen.php" class="item">Yen</a>
          <a href="pound.php" class="item selected">Pond</a>
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
        <div id="direction">Home > Pond > Brief Geld</div>
        <div class="side-box" id="categorie">
          <span class="fw-bolder fs-20 bb-2-s-b">Geld</span>
          <ul class="arrow-points">
            <li>Alle (12)</li>
            <li>Munt Geld (8)</li>
            <li>Brief Geld (4)</li>
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
        <div class="product" id="5pounds">
          <img src="assets/img/5_pounds.jpg" alt="5-pound" width="200" height="100" class="geld-briefje">
          <span class="product-text">10x £5 biljetten</span>
          <div class="cart-button" onclick="ManageStorage('pound5')">
            <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
          </div>
          <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
          <span class="prijs">€ 34,95</span>
        </div>
        <div class="product" id="10pounds">
          <img src="assets/img/10_pounds.jpg" alt="10-pound" width="200" height="100" class="geld-briefje">
          <span class="product-text">10x £10 biljetten</span>
          <div class="cart-button" onclick="ManageStorage('pound10')">
            <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
          </div>
          <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
          <span class="prijs">€ 59,95</span>
        </div>
        <div class="product" id="20pounds">
          <img src="assets/img/20_pounds.jpg" alt="20-pound" width="200" height="100" class="geld-briefje">
          <span class="product-text">10x £20 biljetten</span>
          <div class="cart-button" onclick="ManageStorage('pound20')">
            <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
          </div>
          <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
          <span class="prijs">€ 149,95</span>
        </div>
        <div class="product" id="50pounds">
          <img src="assets/img/50_pounds.jpg" alt="50-pound" width="200" height="100" class="geld-briefje">
          <span class="product-text">10x £50 biljetten</span>
          <div class="cart-button" onclick="ManageStorage('pound50')">
            <img src="assets/img/cart.png" alt="cart" width="40" height="40" class="cart-img">
          </div>
          <span class="beschrijving">Alle echtheidskenmerken gegarandeert</span>
          <span class="prijs">€ 449,95</span>
        </div>
      </div>
      <!-- / ARTICLES -->
    </div>
  <!-- / CONTENT -->
  <?php
  include_once("view/footer.php")
  ?>

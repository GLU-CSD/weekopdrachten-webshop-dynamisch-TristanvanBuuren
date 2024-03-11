<!DOCTYPE html>
<html class="no-js" lang="">
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

  <body onLoad="DisplayStorage()">
    <div class="header-bar">
      <!-- START HEADER TOPBAR-->
      <div class="header-top-bar">
        <label for="taal">Uw taal:</label>
        <select name="taal" id="taal">
          <option value="NL">Nederlands</option>
          <option value="EN">English</option>
          <option value="FR">Français</option>
          <option value="DE">Deutsch</option>
        </select>
        <div class="profiel">
            <a href="index.html" class="setting">Mijn account</a>
            <a class="spacer">|</a>
            <a href="bestellen.html" class="setting">Afrekenen</a>
            <a class="spacer">|</a>
            <a href="index.html" class="setting">Inloggen</a>
        </div>
      </div>
      <!-- / HEADER TOPBAR-->
      <!-- START HEADER BOTTOMBAR-->
      <div class="header-bottom-bar">
        <div id="logo"><img src="assets/img/logo.png" alt="logo" width="20" height="20"></div>
        <div class="navbar">
          <a href="index.html" class="item">Home</a>
          <a href="index.html" class="item selected">Euro</a>
          <a href="dollar.html" class="item">Dollar</a>
          <a href="yen.html" class="item">Yen</a>
          <a href="pound.html" class="item">Pond</a>
          <a href="roebel.html" class="item">Roebel</a>
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
    <script src="assets/js/app.js"></script>
    <script src="assets/js/slider.js"></script>
    <script src="assets/js/cart.js"></script>
  </body>
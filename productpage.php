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

<body>
    <!-- <?php
    include("view/products.php");

    foreach ($currencies["euro"] as $currency) {
        echo "<div class='product'>";
        echo "<img src=" . "'" . ($currency["photos"]["photo1"]) . "'" . "  class='geld-briefje'/>";
        // echo "<span class='product-text'>";
        // echo $currency["title"];
        // echo "</span>";
        echo "<div class='cart-button' onclick='ManageStorage(" . '"' . $currency['msName'] . '"' . ")'>";
        echo "<img class='cart-img' alt='cart' width='40' height='40' src=" . "'" . ($currency["photos"]["photo2"]) . "'" . "/>";
        echo "</div>";
        // echo "<span class='beschrijving'>";
        // echo $currency["description"];
        // echo "</span>";
        // echo "<span class='prijs'>";
        // echo $currency["price"];
        // echo "</span>";
        echo "</div>";
    }
    ?> -->
    <div>
        <div style="background-color:navy; height: 50px; color:white;">HOME | CART | </div>
        <div style="display: flex;">
            <div style="background-color:gray; width: 600px; height: 300px; color:white; display: flex-inline;"> IMG
            </div>
            <div style="display: flex-inline;">
                <div class=""
                    style="background-color:yellow; width: 200px; height: 100px; color:black; display: flex-inline;">
                    mini-img
                </div>
                <div class=""
                    style="background-color:yellow; width: 200px; height: 100px; color:black; display: flex-inline;">
                    mini-img
                </div>
                <div class=""
                    style="background-color:yellow; width: 200px; height: 100px; color:black; display: flex-inline;">
                    mini-img
                </div>
            </div>
            <div class="b-2-s-b"
                style="background-color:green; width: 70px; height: 70px; color:white; display:flex-inline;">
                Cart-button (adds to cart)
            </div>
            <div class="b-2-s-b"
                style="background-color:blue; width: 70px; height: 70px; color:white; display:flex-inline;">
                Buy-button (sends to buy page)
            </div>
        </div>

        <div>prijs</div>
        <div>Beschrijfing</div>
        <div>anders</div>
    </div>
</body>
<script src="assets/js/cart.js"></script>
<script src="assets/js/app.js"></script>
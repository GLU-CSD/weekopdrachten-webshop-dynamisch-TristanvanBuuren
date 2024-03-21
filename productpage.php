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
    <?php
    include("view/products.php");

    $cat = $_GET["cat"];
    $id = $_GET["id"];
    foreach ($currencies[$cat] as $currency) {
        if ($currency["id"] == $id) {
            // echo "<div class='product'>";
            // echo "<img id='mainImg' src=" . "'" . ($currency["photos"]["photo1"]) . "'" . "  class='geld-briefje'/>";
            // // echo "<span class='product-text'>";
            // // echo $currency["title"];
            // // echo "</span>";
            // echo "<div class='cart-button' onclick='ManageStorage(" . '"' . $currency['msName'] . '"' . ")'>";
            // echo "<img class='cart-img' alt='cart' width='40' height='40' src=" . "'" . ($currency["photos"]["photo2"]) . "'" . "/>";
            // echo "</div>";
            // // echo "<span class='beschrijving'>";
            // // echo $currency["description"];
            // // echo "</span>";
            // // echo "<span class='prijs'>";
            // // echo $currency["price"];
            // // echo "</span>";
            // echo "</div>";
    
            echo '<div>';
            echo '<div style="background-color:navy; height: 50px; color:white;">HOME | CART | CHECKOUT</div>';
            echo '<div style="display: flex;">';
            echo "<img id='mainImg' src=" . "'" . ($currency["photos"]["photo1"]) . "'" . "  class='geld-briefje'/>";
            echo '<div style="display: inline-flex; flex-direction: column;">';
            echo '<img class="altImg" onclick="SwitchImg(this)" src="' . ($currency["photos"]["photo1"]) . '"' . "  class='geld-briefje'/>";
            echo '<img class="altImg" onclick="SwitchImg(this)" src="' . ($currency["photos"]["photo3"]) . '"' . "  class='geld-briefje'/>";
            echo '<img class="altImg" onclick="SwitchImg(this)" src="https://picsum.photos/100/200" />';
            echo '</div>';
            echo '<div>';
            echo '<div class="product-page-buttons">';
            echo '<img class="addtocart" src="' . $currency["photos"]["photo2"] . '" onclick="ManageStorage(' . $currency["msName"] . ')">';
            // echo 'Cart-button (adds to cart)';
            // echo '</div>';
            echo '<div class="buynow">';
            echo '<img src="assets/img/register.png" class="register">';
            echo 'BUY NOW';
            echo '</div>';
            echo '</div>';
            echo '<div class="product-prijs">' . $currency["price"] . '</div>';
            echo '</div>';
            echo '</div>';
            echo '<div>'.$currency["description"] . '</div>';
            echo '<div>Anders</div>';
            echo '</div>';
        }
    }
    ?>
    <!-- <div>
        <div style="background-color:navy; height: 50px; color:white;">HOME | CART | CHECKOUT</div>
        <div style="display: flex;">
            <img id="mainImg" style="background-color:gray; width: 600px; height: 300px; color:white;"
                src="https://picsum.photos/400/800" />
            <div style="display: inline-flex; flex-direction: column;">
                <img class="altImg" onclick="SwitchImg(this)" style="width: 200px; height: 100px; color:black;"
                    src="https://picsum.photos/400/800" />
                <img class="altImg" onclick="SwitchImg(this)" style="width: 200px; height: 100px; color:black;"
                    src="https://picsum.photos/200/400" />
                <img class="altImg" onclick="SwitchImg(this)" style="width: 200px; height: 100px; color:black;"
                    src="https://picsum.photos/100/200" />
            </div>
            <div style="display: flex-inline;">
                <div class="b-2-s-b"
                    style="background-color:green; width: 300px; height: 100px; color:white; display:flex-inline; border-radius: 20px; margin-top: 25px;">
                    Cart-button (adds to cart)
                </div>
                <div class="b-2-s-b"
                    style="background-color:blue; width: 300px; height: 100px; color:white; display:flex-inline;border-radius: 20px; margin-top: 25px;">
                    Buy-button (sends to buy page)
                </div>
            </div>
        </div>

        <div>prijs</div>
        <div>Beschrijfing</div>
        <div>Anders</div>
    </div> -->
</body>
<script src="assets/js/product.js"></script>
<script src="assets/js/cart.js"></script>
<script src="assets/js/app.js"></script>
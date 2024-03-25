<?php
include_once ("view/header.php");
include ("view/products.php");

$cat = $_GET["cat"];
$id = $_GET["id"];
foreach ($currencies[$cat] as $currency) {
    if ($currency["id"] == $id) {
        ?>
        <div>
            <div style="background-color:navy; height: 50px; color:white;">HOME | CART | CHECKOUT <p id="counter"
                    class="dis-none">(0)</p>
            </div>
            <div style="display: flex;">
                <img id='mainImg' src=' <?php echo $currency["photos"]["photo1"]; ?>' class='geld-briefje' />
                <div style="display: inline-flex; flex-direction: column;">
                    <img class="altImg" onclick="SwitchImg(this)" src='<?php echo $currency["photos"]["photo1"] ?>'
                        class='geld-briefje' />
                    <img class="altImg" onclick="SwitchImg(this)" src='<?php echo $currency["photos"]["photo3"] ?>'
                        class='geld-briefje' />
                    <img class="altImg" onclick="SwitchImg(this)" src='<?php echo $currency["photos"]["photo4"] ?>'
                        class='geld-briefje' />
                </div>
                <div>
                    <div class="product-page-buttons">
                        <img class="addtocart c-p" src='<?php echo $currency["photos"]["photo2"] ?>'
                            onclick="ManageStorage('<?php echo $currency['msName'] ?>')">
                        <a class="buynow" href="bestellen.html" onclick="ManageStorage('<?php echo $currency['msName'] ?>')">
                            <img src="assets/img/register.png" class="register">BUY NOW
                        </a>
                    </div>
                    <div class="product-title">
                        <?php echo $currency["title"] ?>
                    </div>
                    <div class="product-prijs">
                        <?php echo $currency["price"] ?>
                    </div>

                </div>
            </div>

            <div>
                <?php echo $currency["description"] ?>
            </div>
            <div>Anders</div>
        </div>
        </div>
        </div>
        <?php
    }
}
include_once ("view/footer.php");
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
<script src="assets/js/product.js"></script>
<script src="assets/js/cart.js"></script>
<script src="assets/js/app.js"></script>
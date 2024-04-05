<!DOCTYPE html>
<html lang="en">

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

<body onLoad="DisplayStorage(); GetDate(); CalculateTotal(); CrossSell();" class="bg">
    <div style="display: flex;">
        <a href="index.php" class="fake-button">Back</a>
        <div onclick="ClearStorage(); window.location.reload()" class="fake-button">Clear All</div>
        <p id="date"></p>
    </div><br>
    <div>
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
    </div><br><br>
    <div class="dis-inline-flex">
        <div>
            <p id="btw">BTW bedrag 21%</p>
            <p id="excbtw"></p>
            <!-- <p id="incbtw"></p> -->
            <p id="verbtw"></p>
            <p id="totprice"></p>
        </div>
        <a class="buynow" href="bestellen.php">
            <img src="assets/img/register.png" class="register">
            BUY NOW
        </a>
    </div><br><br>
    <div class="cross-sell-bar dis-inline-flex dis-dir-col">
        Je vind dit misschien ook intressant!
        <div class="dis-inline-flex">
            <?php
            include ("view/products.php");

            $items = [];
            $categories = ["euro", "dollar", "yen", "pond", "roebel"];
            $categoryLength = [7, 7, 4, 4, 5];

            for ($i = 0; $i < 4; $i++) {
                $category = rand(0, count($categories) - 1);
                $id = rand(0, $categoryLength[$category] - 1);

                // Check if the category and id already exist in $items array
                $duplicate = false;
                foreach ($items as $item) {
                    if ($item[0] == $categories[$category] && $item[1] == $id) {
                        $duplicate = true;
                        break;
                    }
                }

                // If it's a duplicate, decrement $i and continue to the next iteration
                if ($duplicate) {
                    $i--;
                    // print ("DUPLICATE FOUND");
                    continue;
                }

                $items[] = [$categories[$category], $id];

                $cat = $categories[$category];
                foreach ($currencies[$cat] as $currency) {
                    if ($currency["id"] == $id) {
                        ?>
                        <a class="cross-sell-item"
                            href='productpage.php?id=<?php echo $currency["id"] . "&cat=" . $currency["category"] ?>'>
                            <img class="altImg" onclick="SwitchImg(this)" src='<?php echo $currency["photos"]["photo1"] ?>'
                                class='geld-briefje' />
                        </a>
                        <?php
                    }
                }
            }
            ?>

        </div>
    </div>
    <!-- <div class="cross-sell-bar dis-inline-flex dis-dir-col">
        Je vind dit misschien ook intressant!
        <div class="dis-inline-flex">
            <div class="cross-sell-item item-a"></div>
            <div class="cross-sell-item item-b"></div>
            <div class="cross-sell-item item-c"></div>
            <div class="cross-sell-item item-d"></div>
        </div>
    </div> -->
    <!-- <div> -->
    <br>
    <p class="dis-none" id="clear"></p>
    <!-- <div style="width: max; height: 100px;">
        <p id="euro5display" class="moneydisplay"></p>
        <p id="euro10display" class="moneydisplay"></p>
        <p id="euro20display" class="moneydisplay"></p>
        <p id="euro50display" class="moneydisplay"></p>
        <p id="euro100display" class="moneydisplay"></p>
        <p id="euro200display" class="moneydisplay"></p>
        <p id="euro500display" class="moneydisplay"></p>
        <p id="dollar1display" class="moneydisplay"></p>
        <p id="dollar2display" class="moneydisplay"></p>
        <p id="dollar5display" class="moneydisplay"></p>
        <p id="dollar10display" class="moneydisplay"></p>
        <p id="dollar20display" class="moneydisplay"></p>
        <p id="dollar50display" class="moneydisplay"></p>
        <p id="dollar100display" class="moneydisplay"></p>
        <p id="yen1000display" class="moneydisplay"></p>
        <p id="yen2000display" class="moneydisplay"></p>
        <p id="yen5000display" class="moneydisplay"></p>
        <p id="yen10000display" class="moneydisplay"></p>
        <p id="pound5display" class="moneydisplay"></p>
        <p id="pound10display" class="moneydisplay"></p>
        <p id="pound20display" class="moneydisplay"></p>
        <p id="pound50display" class="moneydisplay"></p>
        <p id="roebel100display" class="moneydisplay"></p>
        <p id="roebel200display" class="moneydisplay"></p>
        <p id="roebel1000display" class="moneydisplay"></p>
        <p id="roebel2000display" class="moneydisplay"></p>
        <p id="roebel5000display" class="moneydisplay"></p>
    </div>
    <div style="width: max; height: 100px;">
        <div class="moneydisplay"><p class="moneypart" id="euro5display-title"></p><p class="moneypart" id="euro5display-prijs"></p><p class="moneypart" id="euro5display-amount"></p><p class="moneypart" id="euro5display-total"></p></div>

    </div>
    <br><br><br>
    <div style="background-color: gray; width: all; height: 100px; display: flex;"><div style="background-color: blue; width: 20%; height: 100px;"></div><div style="background-color: yellow; width: 20%; height: 100px;"></div><div style="background-color: green; width: 20%; height: 100px;"></div><div style="background-color: red; width: 20%; height: 100px;">BTW: 21%</div><div style="background-color: purple; width: 20%; height: 100px;">TOTAALL BTW BEDRAG</div></div>
    <div style="width: all; height: 100px; display: flex;"><div style="width: 20%; height: 100px;"></div><div style="width: 20%; height: 100px;"></div><div style="width: 20%; height: 100px;"></div><div style="width: 20%; height: 100px;"></div><div style="width: 20%; height: 100px;">TOTAAL PRIJS</div></div>
   </div> -->

    <!-- <fieldset>
        <legend>Euros</legend>
        <p id="euro5display"></p>
        <p id="euro10display"></p>
        <p id="euro20display"></p>
        <p id="euro50display"></p>
        <p id="euro100display"></p>
        <p id="euro200display"></p>
        <p id="euro500display"></p>
    </fieldset>
    <fieldset>
        <legend>Dollars</legend>
        <p id="dollar1display"></p>
        <p id="dollar2display"></p>
        <p id="dollar5display"></p>
        <p id="dollar10display"></p>
        <p id="dollar20display"></p>
        <p id="dollar50display"></p>
        <p id="dollar100display"></p>
    </fieldset>
    <fieldset>
        <legend>Yen</legend>
        <p id="yen1000display"></p>
        <p id="yen2000display"></p>
        <p id="yen5000display"></p>
        <p id="yen10000display"></p>
    </fieldset>
    <fieldset>
        <legend>Pond</legend>
        <p id="pound5display"></p>
        <p id="pound10display"></p>
        <p id="pound20display"></p>
        <p id="pound50display"></p>
    </fieldset>
    <fieldset>
        <legend>Roebel</legend>
        <p id="roebel100display"></p>
        <p id="roebel200display"></p>
        <p id="roebel1000display"></p>
        <p id="roebel2000display"></p>
        <p id="roebel5000display"></p>
    </fieldset> -->


    <p id="counter" class="dis-none">amount in cart</p>
    <script src="./assets/js/cart.js"></script>
</body>

</html>
let i = 0;
let counter = document.getElementById("counter");

let euro5 = 0
let euro10 = 0
let euro20 = 0
let euro50 = 0
let euro100 = 0
let euro200 = 0
let euro500 = 0
let dollar1 = 0
let dollar2 = 0
let dollar5 = 0
let dollar10 = 0
let dollar20 = 0
let dollar50 = 0
let dollar100 = 0
let yen1000 = 0
let yen2000 = 0
let yen5000 = 0
let yen10000 = 0
let pound5 = 0
let pound10 = 0
let pound20 = 0
let pound50 = 0
let roebel100 = 0
let roebel200 = 0
let roebel1000 = 0
let roebel2000 = 0
let roebel5000 = 0

const d = new Date();
const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const days = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];


function DisplayStorage() { // if there is someting in storage it loads it and displays
    if(localStorage !== null){
        if(localStorage.getItem("amount") != null){
            i = localStorage.getItem("amount");
            counter.innerHTML = "(" + i + ")";
        }
        if (localStorage.getItem("euro5") != null) {
            euro5 = localStorage.getItem("euro5");
            // document.getElementById("euro5display").innerHTML =  (euro5 * 10) + "x 5 euro" + "   (" + euro5 + ")";
            document.getElementById("euro5display").innerHTML = "10x 5 euro briefjes  " + "€ 14,95" + "   (" + euro5 + ")" + "   € " + (((14.95) * euro5).toFixed(2));
        }
        if (localStorage.getItem("euro10") !== null) {
            euro10 = localStorage.getItem("euro10");
            // document.getElementById("euro10display").innerHTML =  (euro10 * 10) + "x 10 euro" + "   (" + euro10 + ")";
            document.getElementById("euro10display").innerHTML = "10x 10 euro briefjes  " + "€ 19,95" + "   (" + euro10 + ")" + "   € " + (((19.95) * euro10).toFixed(2));
        }
        if (localStorage.getItem("euro20") !== null) {
            euro20 = localStorage.getItem("euro20");
            // document.getElementById("euro20display").innerHTML =  (euro20 * 10) + "x 20 euro" + "   (" + euro20 + ")";
            document.getElementById("euro20display").innerHTML = "10x 20 euro briefjes  " + "€ 29,95" + "   (" + euro20 + ")" + "   € " + (((29.95) * euro20).toFixed(2));
        }
        if (localStorage.getItem("euro50") !== null) {
            euro50 = localStorage.getItem("euro50");
            // document.getElementById("euro50display").innerHTML =  (euro50 * 10) + "x 50 euro" + "   (" + euro50 + ")";
            document.getElementById("euro50display").innerHTML = "10x 50 euro briefjes  " + "€ 69,95" + "   (" + euro50 + ")" + "   € " + (((69.95) * euro50).toFixed(2));
        }
        if (localStorage.getItem("euro100") !== null) {
            euro100 = localStorage.getItem("euro100");
            // document.getElementById("euro100display").innerHTML =  (euro100 * 10) + "x 100 euro" + "   (" + euro100 + ")";
            document.getElementById("euro100display").innerHTML = "10x 100 euro briefjes  " + "€ 149,95" + "   (" + euro100 + ")" + "   € " + (((149.95) * euro100).toFixed(2));
        }
        if (localStorage.getItem("euro200") !== null) {
            euro200 = localStorage.getItem("euro200");
            // document.getElementById("euro200display").innerHTML =  (euro200 * 10) + "x 200 euro" + "   (" + euro200 + ")";
            document.getElementById("euro200display").innerHTML = "10x 200 euro briefjes  " + "€ 299,95" + "   (" + euro200 + ")" + "   € " + (((299.95) * euro200).toFixed(2));
        }
        if (localStorage.getItem("euro500") !== null) {
            euro500 = localStorage.getItem("euro500");
            // document.getElementById("euro500display").innerHTML =  (euro500 * 10) + "x 500 euro" + "   (" + euro500 + ")";
            document.getElementById("euro500display").innerHTML = "10x 500 euro briefjes  " + "€ 899,95" + "   (" + euro500 + ")" + "   € " + (((899.95) * euro500).toFixed(2));
        }
        if (localStorage.getItem("dollar1") !== null) {
            dollar1 = localStorage.getItem("dollar1");
            // document.getElementById("dollar1display").innerHTML =  (dollar1 * 10) + "x 1 dollar" + "   (" + dollar1 + ")";
            document.getElementById("dollar1display").innerHTML = "10x 1 dollar briefjes  " + "€ 7,95" + "   (" + dollar1 + ")" + "   € " + (((7.95) * euro500).toFixed(2));
        }
        if (localStorage.getItem("dollar2") !== null) {
            dollar2 = localStorage.getItem("dollar2");
            // document.getElementById("dollar2display").innerHTML =  (dollar2 * 10) + "x 2 dollar" + "   (" + dollar2 + ")";
            document.getElementById("dollar2display").innerHTML = "10x 2 dollar briefjes  " + "€ 9,95" + "   (" + dollar2 + ")" + "   € " + (((9.95) * dollar2).toFixed(2));
        }
        if (localStorage.getItem("dollar5") !== null) {
            dollar5 = localStorage.getItem("dollar5");
            // document.getElementById("dollar5display").innerHTML =  (dollar5 * 10) + "x 5 dollar" + "   (" + dollar5 + ")";
            document.getElementById("dollar5display").innerHTML = "10x 5 dollar briefjes  " + "€ 39,95" + "   (" + dollar5 + ")" + "   € " + (((39.95) * dollar5).toFixed(2));
        }
        if (localStorage.getItem("dollar10") !== null) {
            dollar10 = localStorage.getItem("dollar10");
            // document.getElementById("dollar10display").innerHTML =  (dollar10 * 10) + "x 10 dollar" + "   (" + dollar10 + ")";
            document.getElementById("dollar10display").innerHTML = "10x 10 dollar briefjes  " + "€ 69,95" + "   (" + dollar10 + ")" + "   € " + (((69.95) * dollar10).toFixed(2));
        }
        if (localStorage.getItem("dollar20") !== null) {
            dollar20 = localStorage.getItem("dollar20");
            // document.getElementById("dollar20display").innerHTML =  (dollar20 * 10) + "x 20 dollar" + "   (" + dollar20 + ")";
            document.getElementById("dollar20display").innerHTML = "10x 20 dollar briefjes  " + "€ 149,95" + "   (" + dollar20 + ")" + "   € " + (((149.95) * dollar20).toFixed(2));
        }
        if (localStorage.getItem("dollar50") !== null) {
            dollar50 = localStorage.getItem("dollar50");
            // document.getElementById("dollar50display").innerHTML =  (dollar50 * 10) + "x 50 dollar" + "   (" + dollar50 + ")";
            document.getElementById("dollar50display").innerHTML = "10x 50 dollar briefjes  " + "€ 349,95" + "   (" + dollar50 + ")" + "   € " + (((349.95) * dollar50).toFixed(2));
        }
        if (localStorage.getItem("dollar100") !== null) {
            dollar100 = localStorage.getItem("dollar100");
            // document.getElementById("dollar100display").innerHTML =  (dollar100 * 10) + "x 100 dollar" + "   (" + dollar100 + ")";
            document.getElementById("dollar100display").innerHTML = "10x 100 dollar briefjes  " + "€ 849,95" + "   (" + dollar100 + ")" + "   € " + (((849.5) * dollar100).toFixed(2));
        }
        if (localStorage.getItem("yen1000") !== null) {
            yen1000 = localStorage.getItem("yen1000");
            // document.getElementById("yen1000display").innerHTML =  (yen1000 * 10) + "x 1000 yen" + "   (" + yen1000 + ")";
            document.getElementById("yen1000display").innerHTML = "10x 1000 yen briefjes  " + "€ 34,95" + "   (" + yen1000 + ")" + "   € " + (((34.95) * yen1000).toFixed(2));
        }
        if (localStorage.getItem("yen2000") !== null) {
            yen2000 = localStorage.getItem("yen2000");
            // document.getElementById("yen2000display").innerHTML =  (yen2000 * 10) + "x 2000 yen" + "   (" + yen2000 + ")";
            document.getElementById("yen2000display").innerHTML = "10x 2000 yen briefjes  " + "€ 89,95" + "   (" + yen2000 + ")" + "   € " + (((89.95) * yen2000).toFixed(2));
        }
        if (localStorage.getItem("yen5000") !== null) {
            yen5000 = localStorage.getItem("yen5000");
            // document.getElementById("yen5000display").innerHTML =  (yen5000 * 10) + "x 5000 yen" + "   (" + yen5000 + ")";
            document.getElementById("yen5000display").innerHTML = "10x 5000 yen briefjes  " + "€ 179,95" + "   (" + yen5000 + ")" + "   € " + (((179.95) * yen5000).toFixed(2));
        }
        if (localStorage.getItem("yen10000") !== null) {
            yen10000 = localStorage.getItem("yen10000");
            // document.getElementById("yen10000display").innerHTML =  (yen10000 * 10) + "x 10000 yen" + "   (" + yen10000 + ")";
            document.getElementById("yen10000display").innerHTML = "10x 10000 yen briefjes  " + "€ 399,95" + "   (" + yen10000 + ")" + "   € " + (((399.95) * yen10000).toFixed(2));
        }
        if (localStorage.getItem("pound5") !== null) {
            pound5 = localStorage.getItem("pound5");
            // document.getElementById("pound5display").innerHTML =  (pound5 * 10) + "x 5 pond" + "   (" + pound5 + ")";
            document.getElementById("pound5display").innerHTML = "10x 5 pond briefjes  " + "€ 34,95" + "   (" + pound5 + ")" + "   € " + (((34.95) * pound5).toFixed(2));
        }
        if (localStorage.getItem("pound10") !== null) {
            pound10 = localStorage.getItem("pound10");
            // document.getElementById("pound10display").innerHTML =  (pound10 * 10) + "x 10 pond" + "   (" + pound10 + ")";
            document.getElementById("pound10display").innerHTML = "10x 10 pond briefjes  " + "€ 59,95" + "   (" + pound10 + ")" + "   € " + (((59.95) * pound10).toFixed(2));
        }
        if (localStorage.getItem("pound20") !== null) {
            pound20 = localStorage.getItem("pound20");
            // document.getElementById("pound20display").innerHTML =  (pound20 * 10) + "x 20 pond" + "   (" + pound20 + ")";
            document.getElementById("pound20display").innerHTML = "10x 20 pond briefjes  " + "€ 149,95" + "   (" + pound20 + ")" + "   € " + (((149.95) * pound20).toFixed(2));
        }
        if (localStorage.getItem("pound50") !== null) {
            pound50 = localStorage.getItem("pound50");
            // document.getElementById("pound50display").innerHTML =  (pound50 * 10) + "x 50 pond" + "   (" + pound50 + ")";
            document.getElementById("pound50display").innerHTML = "10x 50 pond briefjes  " + "€ 449,95" + "   (" + pound50 + ")" + "   € " + (((449.95) * pound50).toFixed(2));
        }
        if (localStorage.getItem("roebel100") !== null) {
            roebel100 = localStorage.getItem("roebel100");
            // document.getElementById("roebel100display").innerHTML =  (roebel100 * 10) + "x 100 roebel" + "   (" + roebel100 + ")";
            document.getElementById("roebel100display").innerHTML = "10x 100 roebel briefjes  " + "€ 7,95" + "   (" + roebel100 + ")" + "   € " + (((7.95) * roebel100).toFixed(2));
        }
        if (localStorage.getItem("roebel200") !== null) {
            roebel200 = localStorage.getItem("roebel200");
            // document.getElementById("roebel200display").innerHTML =  (roebel200 * 10) + "x 200 roebel" + "   (" + roebel200 + ")";
            document.getElementById("roebel200display").innerHTML = "10x 200 roebel briefjes  " + "€ 15,95" + "   (" + roebel200 + ")" + "   € " + (((15.95) * roebel200).toFixed(2));
        }
        if (localStorage.getItem("roebel1000") !== null) {
            roebel1000 = localStorage.getItem("roebel1000");
            // document.getElementById("roebel1000display").innerHTML =  (roebel1000 * 10) + "x 1000 roebel" + "   (" + roebel1000 + ")";
            document.getElementById("roebel1000display").innerHTML = "10x 1000 roebel briefjes  " + "€ 69,95" + "   (" + roebel1000 + ")" + "   € " + (((69.95) * roebel1000).toFixed(2));
        }
        if (localStorage.getItem("roebel2000") !== null) {
            roebel2000 = localStorage.getItem("roebel2000");
            // document.getElementById("roebel2000display").innerHTML =  (roebel2000 * 10) + "x 2000 roebel" + "   (" + roebel2000 + ")";
            document.getElementById("roebel2000display").innerHTML = "10x 2000 roebel briefjes  " + "€ 159,95" + "   (" + roebel2000 + ")" + "   € " + (((159.95) * roebel2000).toFixed(2));
        }
        if (localStorage.getItem("roebel5000") !== null) {
            roebel5000 = localStorage.getItem("roebel5000");
            // document.getElementById("roebel5000display").innerHTML =  (roebel5000 * 10) + "x 5000 roebel" + "   (" + roebel5000 + ")";
            document.getElementById("roebel5000display").innerHTML = "10x 5000 roebel briefjes  " + "€ 299,95" + "   (" + roebel5000 + ")" + "   € " + (((299.95) * roebel5000).toFixed(2));
        }
    }
    // if(localStorage !== null){
    //     console.log(((14.95) * euro5) + ((19.95) * euro10) + ((29.95) * euro20) + ((69.95) * euro50) + ((149.95) * euro100) + ((299.95) * euro200) + ((899.95) * euro500))//.toFixed(2)
    //     console.log().toFixed(2)
    // }
}

function CalculateTotal() {
    let totalPrice;
    
    if(localStorage !== null){
        totalPrice = (((14.95) * euro5) + ((19.95) * euro10) + ((29.95) * euro20) + ((69.95) * euro50) + ((149.95) * euro100) + ((299.95) * euro200) + ((899.95) * euro500) + ((7.95) * dollar1) + ((9.95) * dollar2) + ((39.95) * dollar5) + ((69.95) * dollar10) + ((149.95) * dollar20) + ((349.95) * dollar50) + ((849.95) * dollar100) + ((34.95) * yen1000) + ((89.95) * yen2000) + ((179.95) * yen5000) + ((399.95) * yen10000) + ((34.95) * pound5) + ((59.95) * pound10) + ((149.95) * pound20) + ((449.95) * pound50) + ((7.95) * roebel100) + ((15.95) * roebel200) + ((69.95) * roebel1000) + ((159.95) * roebel2000) + ((299.95) * roebel5000)).toFixed(2);
        // console.log(((14.95) * euro5) + ((19.95) * euro10) + ((29.95) * euro20) + ((69.95) * euro50) + ((149.95) * euro100) + ((299.95) * euro200) + ((899.95) * euro500) + ((7.95) * dollar1) + ((9.95) * dollar2) + ((39.95) * dollar5) + ((69.95) * dollar10) + ((149.95) * dollar20) + ((349.95) * dollar50) + ((849.95) * dollar100) + ((34.95) * yen1000) + ((89.95) * yen2000) + ((179.95) * yen5000) + ((399.95) * yen10000) + ((34.95) * pound5) + ((59.95) * pound10) + ((149.95) * pound20) + ((449.95) * pound50) + ((7.95) * roebel100) + ((15.95) * roebel200) + ((69.95) * roebel1000) + ((159.95) * roebel2000) + ((299.95) * roebel5000)).toFixed(2)
    }

    console.log("Exc BTW:" + totalPrice);
    console.log("Inc BTW:" + (totalPrice / 100 * 121).toFixed(2));

    document.getElementById("excbtw").innerHTML = ("Exc BTW: €" + totalPrice);
    // document.getElementById("incbtw").innerHTML = ("Inc BTW:" + (totalPrice / 100 * 121).toFixed(2));
    document.getElementById("verbtw").innerHTML = ("BTW:   €" + ((totalPrice / 100 * 121).toFixed(2) - totalPrice).toFixed(2));

    document.getElementById("totprice").innerHTML = ("Totaal prijs: €" + (totalPrice / 100 * 121).toFixed(2))
    // switch (type) {
    //     case 'A':
    //         console.log(totalPrice);
    //         break;
    //     case 'A':
    //         console.log(totalPrice / 100 * 121);
    //         break;
    //     default:
    //         console.log(totalPrice);
    //         break;
    // }
}

function ManageStorage(product) { // when you click a cart-button it does +1
    if(localStorage.getItem("amount") !== null){
        i = localStorage.getItem("amount");
    }
    switch(product) {
        case 'euro5':
            console.log("10x 5 euro added to cart!");
            euro5++;
            localStorage.setItem("euro5", euro5);
            break;
        case 'euro10':
            console.log("10x 10 euro added to cart!");
            euro10++;
            localStorage.setItem("euro10", euro10);
            break;
        case 'euro20':
            console.log("10x 20 euro added to cart!");
            euro20++;
            localStorage.setItem("euro20", euro20);
            break;
        case 'euro50':
            console.log("10x 50 euro added to cart!");
            euro50++;
            localStorage.setItem("euro50", euro50);
            break;
        case 'euro100':
            console.log("10x 100 euro added to cart!");
            euro100++;
            localStorage.setItem("euro100", euro100);
            break;
        case 'euro200':
            console.log("10x 200 euro added to cart!");
            euro200++;
            localStorage.setItem("euro200", euro200);
            break;
        case 'euro500':
            console.log("10x 500 euro added to cart!");
            euro500++;
            localStorage.setItem("euro500", euro500);
            break;
        case 'dollar1':
            console.log("10x 1 dollar added to cart!");
            dollar1++;
            localStorage.setItem("dollar1", dollar1);
            break;
        case 'dollar2':
            console.log("10x 2 dollar added to cart!");
            dollar2++;
            localStorage.setItem("dollar2", dollar2);
            break;
        case 'dollar5':
            console.log("10x 5 dollar added to cart!");
            dollar5++;
            localStorage.setItem("dollar5", dollar5);
            break;
        case 'dollar10':
            console.log("10x 10 dollar added to cart!");
            dollar10++;
            localStorage.setItem("dollar10", dollar10);
            break;
        case 'dollar20':
            console.log("10x 20 dollar added to cart!");
            dollar20++;
            localStorage.setItem("dollar20", dollar20);
            break;
        case 'dollar50':
            console.log("10x 50 dollar added to cart!");
            dollar50++;
            localStorage.setItem("dollar50", dollar50);
            break;
        case 'dollar100':
            console.log("10x 100 dollar added to cart!");
            dollar100++;
            localStorage.setItem("dollar100", dollar100);
            break;
        case 'yen1000':
            console.log("10x 1000 yen added to cart!");
            yen1000++;
            localStorage.setItem("yen1000", yen1000);
            break;
        case 'yen2000':
            console.log("10x 2000 yen added to cart!");
            yen2000++;
            localStorage.setItem("yen2000", yen2000);
            break;
        case 'yen5000':
            console.log("10x 5000 yen added to cart!");
            yen5000++;
            localStorage.setItem("yen5000", yen5000);
            break;
        case 'yen10000':
            console.log("10x 10000 yen added to cart!");
            yen10000++;
            localStorage.setItem("yen10000", yen10000);
            break;
        case 'pound5':
            console.log("10x 5 pound added to cart!");
            pound5++;
            localStorage.setItem("pound5", pound5);
            break;
        case 'pound10':
            console.log("10x 10 pound added to cart!");
            pound10++;
            localStorage.setItem("pound10", pound10);
            break;
        case 'pound20':
            console.log("10x 20 pound added to cart!");
            pound20++;
            localStorage.setItem("pound20", pound20);
            break;
        case 'pound50':
            console.log("10x 50 pound added to cart!");
            pound50++;
            localStorage.setItem("pound50", pound50);
            break;
        case 'roebel100':
            console.log("10x 100 roebel added to cart!");
            roebel100++;
            localStorage.setItem("roebel100", roebel100);
            break;
        case 'roebel200':
            console.log("10x 200 roebel added to cart!");
            roebel200++;
            localStorage.setItem("roebel200", roebel200);
            break;
        case 'roebel1000':
            console.log("10x 1000 roebel added to cart!");
            roebel1000++;
            localStorage.setItem("roebel1000", roebel1000);
            break;
        case 'roebel2000':
            console.log("10x 2000 roebel added to cart!");
            roebel2000++;
            localStorage.setItem("roebel2000", roebel2000);
            break;
        case 'roebel5000':
            console.log("10x 5000 roebel added to cart!");
            roebel5000++;
            localStorage.setItem("roebel5000", roebel5000);
            break;
        // Add cases for other products as needed
        default:
            console.log("Unknown product");
    }
    // switch(product) {
    //     case '0':
    //         console.log("10x 5 euro added to cart!");
    //         euro5++;
    //         localStorage.setItem("euro5", euro5);
    //         break;
    //     case '1':
    //         console.log("10x 10 euro added to cart!");
    //         euro10++;
    //         localStorage.setItem("euro10", euro10);
    //         break;
    //     case '2':
    //         console.log("10x 20 euro added to cart!");
    //         euro20++;
    //         localStorage.setItem("euro20", euro20);
    //         break;
    //     case '3':
    //         console.log("10x 50 euro added to cart!");
    //         euro50++;
    //         localStorage.setItem("euro50", euro50);
    //         break;
    //     case '4':
    //         console.log("10x 100 euro added to cart!");
    //         euro100++;
    //         localStorage.setItem("euro100", euro100);
    //         break;
    //     case '5':
    //         console.log("10x 200 euro added to cart!");
    //         euro200++;
    //         localStorage.setItem("euro200", euro200);
    //         break;
    //     case '6':
    //         console.log("10x 500 euro added to cart!");
    //         euro500++;
    //         localStorage.setItem("euro500", euro500);
    //         break;
    //     case '7':
    //         console.log("10x 1 dollar added to cart!");
    //         dollar1++;
    //         localStorage.setItem("dollar1", dollar1);
    //         break;
    //     case '8':
    //         console.log("10x 2 dollar added to cart!");
    //         dollar2++;
    //         localStorage.setItem("dollar2", dollar2);
    //         break;
    //     case '9':
    //         console.log("10x 5 dollar added to cart!");
    //         dollar5++;
    //         localStorage.setItem("dollar5", dollar5);
    //         break;
    //     case '10':
    //         console.log("10x 10 dollar added to cart!");
    //         dollar10++;
    //         localStorage.setItem("dollar10", dollar10);
    //         break;
    //     case '11':
    //         console.log("10x 20 dollar added to cart!");
    //         dollar20++;
    //         localStorage.setItem("dollar20", dollar20);
    //         break;
    //     case '12':
    //         console.log("10x 50 dollar added to cart!");
    //         dollar50++;
    //         localStorage.setItem("dollar50", dollar50);
    //         break;
    //     case '13':
    //         console.log("10x 100 dollar added to cart!");
    //         dollar100++;
    //         localStorage.setItem("dollar100", dollar100);
    //         break;
    //     case '14':
    //         console.log("10x 1000 yen added to cart!");
    //         yen1000++;
    //         localStorage.setItem("yen1000", yen1000);
    //         break;
    //     case '15':
    //         console.log("10x 2000 yen added to cart!");
    //         yen2000++;
    //         localStorage.setItem("yen2000", yen2000);
    //         break;
    //     case '16':
    //         console.log("10x 5000 yen added to cart!");
    //         yen5000++;
    //         localStorage.setItem("yen5000", yen5000);
    //         break;
    //     case '17':
    //         console.log("10x 10000 yen added to cart!");
    //         yen10000++;
    //         localStorage.setItem("yen10000", yen10000);
    //         break;
    //     case '18':
    //         console.log("10x 5 pound added to cart!");
    //         pound5++;
    //         localStorage.setItem("pound5", pound5);
    //         break;
    //     case '19':
    //         console.log("10x 10 pound added to cart!");
    //         pound10++;
    //         localStorage.setItem("pound10", pound10);
    //         break;
    //     case '20':
    //         console.log("10x 20 pound added to cart!");
    //         pound20++;
    //         localStorage.setItem("pound20", pound20);
    //         break;
    //     case '21':
    //         console.log("10x 50 pound added to cart!");
    //         pound50++;
    //         localStorage.setItem("pound50", pound50);
    //         break;
    //     case '22':
    //         console.log("10x 100 roebel added to cart!");
    //         roebel100++;
    //         localStorage.setItem("roebel100", roebel100);
    //         break;
    //     case '23':
    //         console.log("10x 200 roebel added to cart!");
    //         roebel200++;
    //         localStorage.setItem("roebel200", roebel200);
    //         break;
    //     case '24':
    //         console.log("10x 1000 roebel added to cart!");
    //         roebel1000++;
    //         localStorage.setItem("roebel1000", roebel1000);
    //         break;
    //     case '25':
    //         console.log("10x 2000 roebel added to cart!");
    //         roebel2000++;
    //         localStorage.setItem("roebel2000", roebel2000);
    //         break;
    //     case '26':
    //         console.log("10x 5000 roebel added to cart!");
    //         roebel5000++;
    //         localStorage.setItem("roebel5000", roebel5000);
    //         break;
    //     // Add cases for other products as needed
    //     default:
    //         console.log("Unknown product");
    // }
    i++;
    console.log(i);
    counter.innerHTML = "(" + i + ")";
    localStorage.setItem("amount", i);
}

document.getElementById("clear").onclick = function() {ClearStorage()};


function ClearStorage() { // Clears storage if there is any in there
    if(localStorage !== null){
        // localStorage.clear();
        localStorage.removeItem("amount");
        localStorage.removeItem("euro5");
        localStorage.removeItem("euro10");
        localStorage.removeItem("euro20");
        localStorage.removeItem("euro50");
        localStorage.removeItem("euro100");
        localStorage.removeItem("euro200");
        localStorage.removeItem("euro500");
        localStorage.removeItem("dollar1");
        localStorage.removeItem("dollar2");
        localStorage.removeItem("dollar5");
        localStorage.removeItem("dollar10");
        localStorage.removeItem("dollar20");
        localStorage.removeItem("dollar50");
        localStorage.removeItem("dollar100");
        localStorage.removeItem("yen1000");
        localStorage.removeItem("yen2000");
        localStorage.removeItem("yen5000");
        localStorage.removeItem("yen10000");
        localStorage.removeItem("pound5");
        localStorage.removeItem("pound10");
        localStorage.removeItem("pound20");
        localStorage.removeItem("pound50");
        localStorage.removeItem("roebel100");
        localStorage.removeItem("roebel200");
        localStorage.removeItem("roebel1000");
        localStorage.removeItem("roebel2000");
        localStorage.removeItem("roebel5000");

        i = 0
        euro5 = 0
        euro10 = 0
        euro20 = 0
        euro50 = 0
        euro100 = 0
        euro200 = 0
        euro500 = 0
        dollar1 = 0
        dollar2 = 0
        dollar5 = 0
        dollar10 = 0
        dollar20 = 0
        dollar50 = 0
        dollar100 = 0
        yen1000 = 0
        yen2000 = 0
        yen5000 = 0
        yen10000 = 0
        pound5 = 0
        pound10 = 0
        pound20 = 0
        pound50 = 0
        roebel100 = 0
        roebel200 = 0
        roebel1000 = 0
        roebel2000 = 0
        roebel5000 = 0

        counter.innerHTML = "(" + i + ")";
    }
}

function CheckStorage(){
    console.log("Counter = " + i);
    console.log("5 euro = " + euro5);
    console.log("10 euro = " + euro10);
    console.log("20 euro = " + euro20);
    console.log("50 euro = " + euro50);
    console.log("100 euro = " + euro100);
    console.log("200 euro = " + euro200);
    console.log("500 euro = " + euro500);
    console.log("1 dollar = " + dollar1);
    console.log("2 dollar = " + dollar2);
    console.log("5 dollar = " + dollar5);
    console.log("10 dollar = " + dollar10);
    console.log("20 dollar = " + dollar20);
    console.log("50 dollar = " + dollar50);
    console.log("100 dollar = " + dollar100);
    console.log("1000 yen = " + yen1000);
    console.log("2000 yen = " + yen2000);
    console.log("5000 yen = " + yen5000);
    console.log("10000 yen = " + yen10000);
    console.log("5 pound = " + pound5);
    console.log("10 pound = " + pound10);
    console.log("20 pound = " + pound20);
    console.log("50 pound = " + pound50);
    console.log("100 roebel = " + roebel100);
    console.log("200 roebel = " + roebel200);
    console.log("1000 roebel = " + roebel1000);
    console.log("2000 roebel = " + roebel2000);
    console.log("5000 roebel = " + roebel5000);
}

function GetDate() {
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let weekday = days[d.getDay()];
    let day = d.getDate();

    // document.getElementById("demo").innerHTML = month;
    document.getElementById("date").innerHTML = weekday + " " + month + " " + day + " " + year;
    
    // document.getElementById("date").innerHTML = d.getFullYear() + "   " + (d.getMonth() + 1) + "   "  + d.getDate();
    // document.getElementById("date").innerHTML = d.getFullYear() + "   " + (d.getMonth() + 1) + "   " ;
}

function GetUuid() {
    if (localStorage.getItem("uuid") == null) {
        const uuids = [
        'e8435d12-f6bb-443f-89c9-ad864f53699c',
        '622ee464-697f-448e-b361-adcb748315f3',
        'f605ef01-84ed-42bc-a2a7-8a00d32f12b6',
        'ab67caf2-7af9-446c-a31c-5f3b87c54d71',
        '9b1e1797-e3b5-4f00-9b9f-b5d1300c6860',
        '85ef48bc-86fe-458a-a6ab-f7f21a7ed8d7',
        '3181f089-e02d-48cc-8a04-d8eadb1e6870',
        '34153fb1-9336-47a1-9ea7-bd48ae85d366',
        '7520e1bc-ef62-4b7d-bb0e-f81f08ef75ed',
        'd070482b-16dc-444d-a9d7-8d0058998050',
        '61d87813-3897-4c38-94d6-a76e0bc684b8',
        '60caf3cd-2f03-4d05-bf0c-8872d8da23d0',
        'd6c1b05a-e28d-4983-bb27-79ecc5e8e628',
        '7a8af31c-d510-4837-a1c4-ef12df6eb778',
        'f3dbf3e5-8aaf-47db-9a0b-9c23a6d4ecd7',
        '26204400-2748-4e80-a2d9-11f1a7ff7ffa',
        '35a5e782-0078-4cce-bd5e-7bd8dc7e54e7',
        '1ad2b35c-44ee-4882-ae53-bbce18c73186',
        'c3ee5b87-d88a-4e39-8a04-d92585193f48',
        '8be72b27-5434-4654-b3ce-2b43289173f7',
        '808f4af3-ddf4-4dbd-8e08-5303ec90532b',
        '3261364e-111e-46fa-aabf-2a05c5c39083',
        '6ffdf638-c8de-4c84-9134-1ad857263d7c',
        'f9a4fbd3-2913-4d60-ac38-d580cf91c16d',
        '54441d99-2802-48f4-a13a-b3bb6a7efd98',
        'ca3ef5c1-8c62-4bcc-b235-c720abe54797',
        'ab9cfc92-bb56-4576-a5a8-a696aba3274e',
        '703477df-102a-460c-88cf-19e121c410d7',
        '569655ea-75c6-4660-aa61-45c0fd2a1c57',
        '3d1df78c-0f61-441c-89bc-14c8c7275b37',
        '52701480-d969-4600-b98e-f761e94cdc62',
        'ed3b99a0-41cd-462a-93cf-319324058322',
        'a5a0b38e-7653-4855-9301-ef17685821ef',
        '0d89302e-ac36-4c88-a47a-71185f2a88aa',
        '506552fa-b8e0-4a81-917b-f29117efcb1f',
        '28f7ec1c-913f-4074-90af-750d1a00a350',
        'a64d2f27-9827-4420-8697-f4ea15592ee9',
        '1ef4c62f-21d7-43ad-93d9-fdf0653c4639',
        'dbef8aa7-127e-4d80-b549-785b493fd005',
        '7c9b6581-ce6b-4386-84ab-e7bdf61c1c3b',
        '999c48ba-8a69-4b4a-b5b3-bf54150a15ce',
        'f8b7f263-c4bf-4759-be0d-f1cfaff1f86c',
        '241845fa-a73f-4842-8259-fe94b094c43c',
        '45b1c67b-f665-42d7-bc16-762f88901692',
        '63ba783c-93d2-44ec-ba5f-21f438ed04f8',
        'dbceef5d-3730-48bb-9b83-931d5435c9de',
        'b627be92-1af9-45f9-a3ec-24f248dc7995',
        '7992cdb0-bde1-461d-aff3-1aa1987c6e0d',
        '8f32ad8f-a47c-491b-9efb-55b869b58f62',
        '2187f35d-297e-446e-8f56-5f17f9fe3c33',
        'de9d4253-e7ef-455b-9a01-3654e4d3b56c',
        'd936978f-2050-4a3b-b061-048710cc4510',
        '7dc8a987-a7a5-4f8c-8587-efc6f42a853d',
        'a9331346-a62b-4729-8b43-f77f37192afd',
        '8935b398-9e53-43aa-9c3d-92fab498e0ef',
        '0c855c71-9c52-479f-a92d-d9ed2663d582',
        '07113473-fdb2-466d-84cc-c1bf78fc919e',
        '79807d62-35b7-4e74-a2f3-9d27298eacbe',
        '79f29ca8-1919-4c01-a749-73cdee6d65ce',
        '22267de4-d8d5-406c-9dcc-628d752eb19c'
      ];
      const randomIndex = Math.floor(Math.random() * uuids.length);

      // Access the UUID using the random index
      const uuid = uuids[randomIndex];
      localStorage.setItem("uuid", uuid);
  
      document.getElementById("bestelling-id").innerHTML = "UUID:  " + localStorage.getItem("uuid")
      console.log("Generated  " + uuid);
    }
    else {
        document.getElementById("bestelling-id").innerHTML = "UUID:  " + localStorage.getItem("uuid")
        console.log("Already Generated  " + localStorage.getItem("uuid"));
    }
}

// function CrossSell(){
//     let items = [];

//     let categories = ["euro", "dollar", "yen", "pond", "roebel"];
//     let categoryLenght = [7,7,4,4,5];

//     for(let i = 0; i < 4; i++) {
//         let category = Math.floor(Math.random() * categories.length);
//         // categories == categoryLenght.value;
//         let id = Math.floor(Math.random() * categoryLenght[category]); 
//         items.push([categories[category], id])
//     }

//     console.log(items)

//     var fs = require('fs');
//     fs.writeFile ("input.json", JSON.stringify(items), function(err) {
//         if (err) throw err;
//         console.log('complete');
//         }
//     );
// }

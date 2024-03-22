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

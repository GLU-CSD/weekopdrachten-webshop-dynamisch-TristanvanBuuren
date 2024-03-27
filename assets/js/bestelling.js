let aanhef;
let voornaam;
let tussenvoegsel;
let achternaam;
let geboortedatum;

let straatnaam;
let huisnummer = 0;
let postcode;
let land;

let emailadres;
let telefoonnummer;

let avv = false;

function ShowInfo() {
    if(localStorage !== null){
        if (localStorage.getItem("voornaam") !== null) {
            document.getElementById("voornaam").innerHTML = localStorage.getItem("voornaam");
        }
        if (localStorage.getItem("tussenvoegsel") !== null) {
            document.getElementById("tussenvoegsel").innerHTML = localStorage.getItem("tussenvoegsel");
        }
        if (localStorage.getItem("achternaam") !== null) {
            document.getElementById("achternaam").innerHTML = localStorage.getItem("achternaam");
        }
        if (localStorage.getItem("geboortedatum") !== null) {
            document.getElementById("geboortedatum").innerHTML = localStorage.getItem("geboortedatum");
        }
        if (localStorage.getItem("straatnaam") !== null) {
            document.getElementById("straatnaam").innerHTML = localStorage.getItem("straatnaam");
        }
        if (localStorage.getItem("huisnummer") !== null) {
            document.getElementById("huisnummer").innerHTML = localStorage.getItem("huisnummer");
        }
        if (localStorage.getItem("postcode") !== null) {
            document.getElementById("postcode").innerHTML = localStorage.getItem("postcode");
        }
        if (localStorage.getItem("land") !== null) {
            document.getElementById("land").innerHTML = localStorage.getItem("land");
        }
        if (localStorage.getItem("emailadres") !== null) {
            document.getElementById("emailadres").innerHTML = localStorage.getItem("emailadres");
        }
        if (localStorage.getItem("telefoonnummer") !== null) {
            document.getElementById("telefoonnummer").innerHTML = localStorage.getItem("telefoonnummer");
        }
    }
}

function SaveInfo() {
    if (document.getElementById("voornaam").value !== null) {
        voornaam = document.getElementById("voornaam").value;
        localStorage.setItem("voornaam", voornaam);
    }
    if (document.getElementById("tussenvoegsel").value !== null) {
        tussenvoegsel = document.getElementById("tussenvoegsel").value;
        localStorage.setItem("tussenvoegsel", tussenvoegsel);
    }
    if (document.getElementById("achternaam").value !== null) {
        achternaam = document.getElementById("achternaam").value;
        localStorage.setItem("achternaam", achternaam);
    }
    if (document.getElementById("geboortedatum").value !== null) {
        geboortedatum = document.getElementById("geboortedatum").value;
        localStorage.setItem("geboortedatum", geboortedatum);
    }
    if (document.getElementById("straatnaam").value !== null) {
        straatnaam = document.getElementById("straatnaam").value;
        localStorage.setItem("straatnaam", straatnaam);
    }
    if (document.getElementById("huisnummer").value !== null) {
        huisnummer = document.getElementById("huisnummer").value;
        localStorage.setItem("huisnummer", huisnummer)
    }
    if (document.getElementById("postcode").value !== null) {
        postcode = document.getElementById("postcode").value;
        localStorage.setItem("postcode", postcode);
    }
    if (document.getElementById("land").value !== null) {
        land = document.getElementById("land").value;
        localStorage.setItem("land", land);
    }
    if (document.getElementById("emailadres").value !== null) {
        emailadres = document.getElementById("emailadres").value;
        localStorage.setItem("emailadres", emailadres);
    }
    if (document.getElementById("telefoonnummer").value !== null) {
        telefoonnummer = document.getElementById("telefoonnummer").value;
        localStorage.setItem("telefoonnummer", telefoonnummer);
    }
}

function ClearInfo(){
    if (localStorage.getItem("voornaam") !== null) {
        localStorage.removeItem("voornaam");
        document.getElementById("voornaam").value = "";
    }
    if (localStorage.getItem("tussenvoegsel") !== null) {
        localStorage.removeItem("tussenvoegsel");
        document.getElementById("tussenvoegsel").value = "";
    }
    if (localStorage.getItem("achternaam") !== null) {
        localStorage.removeItem("achternaam");
        document.getElementById("achternaam").value = "";;
    }
    if (localStorage.getItem("geboortedatum") !== null) {
        localStorage.removeItem("geboortedatum");
        document.getElementById("geboortedatum").value = "";
    }
    if (localStorage.getItem("straatnaam") !== null) {
        localStorage.removeItem("straatnaam");
        document.getElementById("straatnaam").value = "";
    }
    if (localStorage.getItem("huisnummer") !== null) {
        localStorage.removeItem("huisnummer");
        document.getElementById("huisnummer").value = "";
    }
    if (localStorage.getItem("postcode") !== null) {
        localStorage.removeItem("postcode");
        document.getElementById("postcode").value = "";
    }
    if (localStorage.getItem("land") !== null) {
        localStorage.removeItem("land");
        document.getElementById("land").value = "";
    }
    if (localStorage.getItem("emailadres") !== null) {
        localStorage.removeItem("emailadres");
        document.getElementById("emailadres").value = "";
    }
    if (localStorage.getItem("telefoonnummer") !== null) {
        localStorage.removeItem("telefoonnummer");
        document.getElementById("telefoonnummer").value = "";
    }
}


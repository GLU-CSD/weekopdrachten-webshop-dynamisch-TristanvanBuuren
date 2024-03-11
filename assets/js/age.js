function clicked(event) {
    // event.preventDefault;
    const value = document.getElementById("geboortedatum").value;
    const dob = new Date(value); // Parse the date string into a Date object
    const now = new Date();
    if (isNaN(dob) || dob > now) {
        alert("Invalid date of birth");
        return;
    }
    const age = calculateAge(dob)
    ageText = ("Uw leeftijd: " + age);
    document.getElementById("leeftijd").innerHTML = ageText
    // alert("Uw leeftijd: " + calculateAge(dob));
    // alert(calculateAge(dob));
}

function calculateAge(date) {
    const now = new Date();
    const diff = now - date;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
    // alert(age);
    return age;
}
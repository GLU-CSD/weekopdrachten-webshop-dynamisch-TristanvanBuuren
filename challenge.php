<?php
// $name = "Tristan";
// for ($number = 1; $number <= 100; $number++) {
//     echo ($number . $name . "<br> <br>");
// }

$code = "";
$length = 7; // Corrected variable name to $length
$characters = array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

echo "ID Generator: <br><br>";

for ($i = 0; $i < $length; $i++) {
    $randomIndex = rand(0, count($characters) - 1);
    $code .= $characters[$randomIndex];
}

echo $code;
?>
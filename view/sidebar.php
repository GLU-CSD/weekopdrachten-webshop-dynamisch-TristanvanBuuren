<div class="side-box" id="categorie">
    <span class="fw-bolder fs-20 bb-2-s-b">Geld</span>
    <ul class="arrow-points">
        <li>Alle (15)</li>
        <li>Munt Geld (8)</li>
        <?php
        include ("view/products.php");

        if ($currentpage == "index") {
            echo "<li>Brief Geld (7)</li>";
        }
        if ($currentpage == "dollar") {
            echo "<li>Brief Geld (7)</li>";
        }
        if ($currentpage == "yen") {
            echo "<li>Brief Geld (4)</li>";
        }
        if ($currentpage == "pound") {
            echo "<li>Brief Geld (4)</li>";
        }
        if ($currentpage == "roebel") {
            echo "<li>Brief Geld (5)</li>";
        }
        ?>

        <!-- <li>Brief Geld (7)</li> -->
    </ul>
</div>
<div class="side-box" id="Uw-selectie-verfijnen">
    <span class="fw-bolder fs-20 bb-2-s-b">Uw selectie verfijnen</span>
    <span class="fw-bolder mb-5">Echtheidskenmerken</span>
    <ul class="arrow-points">
        <li>Voelbare inkt (14)</li>
        <li>Hologram (12)</li>
        <li>veiligheidsdraad (13)</li>
        <li>Kantelen (11)</li>
        <li>uv-licht (15)</li>
        <li>Kleine letters (10)</li>
    </ul>
    <span class="ds-flex fd-rr col-lsb c-p">more</span>
</div>
<div class="side-box" id="Prijs">
    <span class="fw-bolder fs-20 bb-2-s-b">Prijs</span>
    <div class="min-max-slider" data-legendnum="2">
        <label for="min">€ 0,00</label>
        <input id="min" class="min" name="min" type="range" step="1" min="0" max="1000">
        <label for="max">€ 1000,00</label>
        <input id="max" class="max" name="max" type="range" step="1" min="0" max="1000">
    </div>
</div>
<div class="side-box" id="Recent-bekeken">
    <span class="fw-bolder bb-2-s-b">Recent bekeken</span>
    <div class="bekeken-items">
        <img src="assets/img/1_dollar.jpg" alt="1-dollar" width="100" height="50">
        <div>
            <span class="fs-small fw-bold">10x $1 biljetten</span>
            <span class="fs-small">€7,95</span>
        </div>
    </div>
    <div class="bekeken-items">
        <img src="assets/img/10_pounds.jpg" alt="10-pound" width="100" height="50">
        <div>
            <span class="fs-small fw-bold">10x £10 biljetten</span>
            <span class="fs-small">€59,95</span>
        </div>
    </div>
</div>
<div class="side-box" id="Niewsbrief">
    <span class="fw-bolder bb-2-s-b mb-5">Nieuwsbrief</span>
    <input type="email" class="b-2-s-b">
    <button type="button" class="b-2-s-b bcol-000195255 col-white mt-5">Inschrijven</button>
</div>
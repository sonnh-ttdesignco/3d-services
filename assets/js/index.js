import * as PCH from "/src/3d-cad/model/js/data.js";
import { APP } from "/src/3d-cad/model/js/app.js";
window.PCH = PCH; // Used by APP Scripts.

var loader = new PCH.FileLoader();

$(document).ready(function() {
    loader.load("/src/3d-cad/model/app.json", function(text) {
        var player = new APP.Player();
        player.load(JSON.parse(text));
        var element = document.getElementById("view-model-3d");
        if (element.clientWidth == 0) return;

        player.setSize(element.clientWidth, element.clientHeight);
        player.play();

        var loading = document.getElementById("loading-model");
        element.removeChild(loading);
        element.appendChild(player.dom);

        // window.addEventListener("resize", function() {
        //     player.setSize(element.clientWidth, element.clientHeight);
        // });
    });
});
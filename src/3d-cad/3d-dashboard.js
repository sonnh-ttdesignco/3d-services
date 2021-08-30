const pageName = "3d-dashboard";


function initCart() {
    let isShow = false;
    let $cart = $("#cart");
    let $cartIcon = $("#cart-icon");
    let $backdrop = $("#cart-dropback");

    //set position for cart
    $cart.css("left", `${$cartIcon.offset().left + $cartIcon.width() - $cart.width()}px`)

    //action hide/show when click icon
    $cartIcon.click(function () {
        if ($cart.hasClass("hide")) {
            $cart.removeClass("hide");
            if (!$backdrop.hasClass("show")) {
                $backdrop.addClass("show");
            }
            isShow = true;
        } else {
            $cart.addClass("hide");
            if ($backdrop.hasClass("show")) {
                $backdrop.removeClass("show");
            }
            isShow = false;
        }

        if (!$cart.hasClass("hide") && isShow == true) {
            $backdrop.click(function () {
                $cart.addClass("hide");
                if ($backdrop.hasClass("show")) {
                    $backdrop.removeClass("show");
                }
                isShow = false;
            })
        }
    })



}

$(function () {
    initCart();
})
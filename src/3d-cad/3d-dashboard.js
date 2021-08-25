const pageName = "3d-dashboard";
requiredLogin(pageName);

function initCart() {
    let $cart = $("#cart");
    let $cartIcon = $("#cart-icon");

    //set position for cart
    $cart.css("left", `${$cartIcon.offset().left + $cartIcon.width() - $cart.width()}px`)

    //action hide/show when click icon
    $cartIcon.click(function () {
        if ($cart.hasClass("hide")) {
            $cart.removeClass("hide");
        } else {
            $cart.addClass("hide");
        }
    })
}

$(function () {
    initCart();
})
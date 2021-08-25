const pageName = "3d-checkout";
requiredLogin(pageName);

function initCouponForm() {
    let $checkActor = $(`#check-actor`);
    let $check = $(`#check`);
    let $form = $("#coupon-form");

    $checkActor.click(function () {
        if ($check.attr("checked") != undefined) {
            $check.attr("checked", false);
            $checkActor.css("background-color", "#df1660");
            $form.css("display", "flex");
        } else {
            $check.attr("checked", true);
            $checkActor.css("background-color", "white");
            $form.css("display", "none");
        }
    })
}

function initAddToCart() {
    $(".price-container").each(function () {
        let $this = $(this);
        $this.hover(() => {
            $(".price", $this).css("opacity", "0");
            $(".add-to-cart", $this).css("opacity", "1");
        }, () => {
            $(".price", $this).css("opacity", "1");
            $(".add-to-cart", $this).css("opacity", "0");
        })
    })
}

$(function () {
    initCouponForm();
    initAddToCart();
})
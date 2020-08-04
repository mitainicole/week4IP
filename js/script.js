$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };


        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "BBQ Steak":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "Buffalo Beef":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "Sausage and Spice":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "Magheritta Pizza":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
            case flavour = "Crazy Meaty":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 85;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 140;
                        } else {
                            totalPrice = (price * number) + 190;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "Crazy Meaty":
                totalPrice = totalPrice + 80;
                break;
            case topping = "pepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "persley":
                totalPrice = totalPrice + 120;
                break;
            case topping = "sweetpine":
                totalPrice = totalPrice + 120;
                break;
            case topping = "brocolli":
                totalPrice = totalPrice + 120;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "buffalo":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 170;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 170;
                break;

        }

        
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);


        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });


    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });



    $(".delivernot").click(function () {

    });


    $(function () {
        $.scrollify.move('#sum-order');
    });
});

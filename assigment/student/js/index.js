window.onload = function() {
    jQuery(document).ready(function() {

        $("#content").load("html/alap.html");

        $("#sauto").click(function() {
            $("#content").load("html/alap.html");;
        });

        $("#Cars-button").click(function() {
            $("#content").load("html/car.html", function(){
                cars();
            });
        });

        $("#addCar-button").click(function() {
            addCar();
        });

        $("#Manufacturers-button").click(function() {
            $("#content").load("html/manufacturer.html", function(){
                manufacturers()
            });
        });

        $("#addManufacturers-button").click(function() {
            addManufacturer();
        });

        $("#Carsbutton").click(function(){
            $("#Cars-button").fadeToggle();
            $("#addCar-button").fadeToggle();
        });

        $("#Cars-button").click(function(){
            $("#Carsbutton").fadeIn();
            $("#addCar-button").fadeOut();
            $("#Cars-button").fadeOut();
        });

        $("#addCar-button").click(function(){
            $("#Carsbutton").fadeIn();
            $("#addCar-button").fadeOut();
            $("#Cars-button").fadeOut();
        });

        $("#Manufacturersbutton").click(function(){
            $("#Manufacturers-button").fadeToggle("slow");
            $("#addManufacturers-button").fadeToggle("slow");
        });

        $("#Manufacturers-button").click(function(){
            $("#Manufacturersbutton").fadeIn();
            $("#addManufacturers-button").fadeOut();
            $("#Manufacturers-button").fadeOut();
        });

        $("#addManufacturers-button").click(function(){
            $("#Manufacturersbutton").fadeIn();
            $("#addManufacturers-button").fadeOut();
            $("#Manufacturers-button").fadeOut();
        });

    });
}
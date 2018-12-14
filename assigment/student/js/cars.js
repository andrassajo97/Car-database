var listCarform = function (car) {
    return $(`
        <tr class = "carlist">
            <td>${car.name}</td>
            <td>${car.consumption}</td>
            <td>${car.color}</td>
            <td><button class="modal">${car.manufacturer}</button</td>
            <td>${car.available}</td>
            <td>${car.year}</td>
            <td>${car.horsepower}</td>    
        </tr>
    `)
};

var addCarform = function () {
    return $(`
        <form id="addCar">
            <table>
                <tr>
                    <th>Name<br><input type="text" name="name" required id="name"/></th>
                    <th>Consumption<br><input type="text" required name="consumption" id="consumption"/></th>
                    <th>Color<br><input type="text" required name="color" id="color"/></th>
                    <th>Manufacturer<br><select type="text" name="manufacturer" required id="manufacturer"/></th>
                </tr>
                    <th>Available<br><input type="number" required name="available" id="available"/></th>
                    <th>Year<br><input type="date" required name="year" id="year"/></th>
                    <th>Horsepower<br><input type="number" required name="horsepower" id="horsepower"/></th>
                    <th><button type="submit">Add</button></th>
                </tr>
            </table>
        </form>   
    `)
}
//list the car
function cars() {
         $.getJSON("cars", function (cars) {
             for (let car of cars) {
                 var list = listCarform(car);
                 $("#cartable").append(list);
                 list.find("button").click(function () {
                     document.cookie = "name=" + car.manufacturer;
                     $.getJSON("manufacturer", function (cars) {
                         for (var car of cars) {
                             alert(car.name);
                         }
                     })
                 })
             }
         })
         $.getJSON("/manufacturerNames", function (mNames) {
             window.manufacturerNames = mNames;
         }).fail(function () {
             alert("There are no manufacturer-names");
         })
     }
//add new car
function addCar() {
    $("#content").empty();
    $("#content").append(addCarform);

    $.each(window.manufacturerNames, function (i,item) {
        $('#manufacturer').append($('<option>', {
            value: item,
            text: item
        }));
    });

    $("#addCar").submit(function (e) {
        e.preventDefault();
        $.post("/addCar",
            $("#addCar").serialize(),
            function () {
                alert("Succes!");
                $(".carlist").empty();
                cars();
            }).fail(function (err) {
                if(err.status===409){
                    alert("The name is used!");
                } else {
                    alert("Not today!")
                }
        });
    });
};

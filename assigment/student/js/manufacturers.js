var listManuform = function (manufacturer) {
    return $(`
        <tr class="manufacturerlist">
            <td>${manufacturer.name}</td>
            <td>${manufacturer.country}</td>
            <td>${manufacturer.founded}</td>
        </tr>
    `)
};

var addManuform = function () {
    return $(`
        <form id="addManu">
            <table>
                <tr>
                    <th>Name<br><input type="text" name="name" required id="name"/></th>
                    <th>Country<br><input type="text" required name="country" id="country"/></th>
                    <th>Founded<br><input type="date" required name="founded" id="founded"/></th>
                </tr>
                <tr>
                    <th colspan="3"><button type="submit">Add</button></th>
                </tr>
            </table>
        </form> 
    `)
};
//list the manufacturers
function manufacturers() {
    $.getJSON("manufacturers", function (manufacturers) {
        for (var manufacturer of manufacturers) {
            $("#manufactable").append(listManuform(manufacturer));
        }
    }).fail(function(){
        alert("There are no manufacturers");
    })
}
//add new manufacturer
function addManufacturer() {
    $("#content").empty();
    $("#content").append(addManuform());
    $("#addManu").submit(function (e) {
        e.preventDefault();
        $.post("/addManufacturers",
            $("#addManu").serialize(),
            function (manufacturers) {
                alert("Succes!");
                $(".manufacturerlist").empty();
                for (var manufacturer of manufacturers) {
                    $("#manufactable").append(listManuform(manufacturer));
                }
            }).fail (function (err) {
            if(err.status === 409) {
                alert("The name is already used!");
            } else {
                alert("Not today!");
            }
        })
    })
}

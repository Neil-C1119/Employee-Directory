$(document).ready(function () {
    var apiRandom = "https://randomuser.me/api/?nat=us&results=12";
    var dataRandom = { format: "json" };
    function callbackRandom(data) {
        var employeeHTML = "<ul>";
        $.each(data.results, function (i, item) {
            employeeHTML += "<a href='#'><li class='employeeBox'>";
            employeeHTML += "<img src='" + item.picture.large + "' class='image'>";
            employeeHTML += "<div class='text employee'><h4 class='employeeName'>" + item.name.first + " " + item.name.last + "</h4>";
            employeeHTML += "<p class='employeeEmail'>" + item.email + "</p>";
            employeeHTML += "<p class='employeeLocation'>" + item.location.city + "</p></div></li></a>";
        });
        employeeHTML += "</ul>";
        $("#employees").html(employeeHTML);

        var overlay = document.getElementsByClassName("overlay")[0];
        var content = document.getElementsByClassName("content")[0];
        var employeeBox = document.getElementsByClassName("employeeBox");
        function addEmployeeListener(x) {
            employeeBox[x].addEventListener("click", () => {
                overlay.style.display = "block";
                content.style.display = "block";
            });
        }

        var overlayHTML = "<a href='#'><h3 class='exit'>X</h3></a>";
        $.each(data.results, function (i, item) {
            overlayHTML += "<img src='" + item.picture.large + "' class='image'>";
            overlayHTML += "<h4 class='employeeName'>" + item.name.first + " " + item.name.last + "</h4>";
            overlayHTML += "<p class='employeeEmail'>" + item.email + "</p>";
            overlayHTML += "<p class='employeeLocation'>" + item.location.city + "</p>";
            overlayHTML += "<p class='employeePhone'>" + item.phone + "</p>";
            overlayHTML += "<p class='employeeAddress'>" + item.location.street + " " + item.location.city + ", " + item.location.state + " " + item.location.postcode + "</p>";
            overlayHTML += "<p class='employeeBirth'>Birthday: " + item.dob + "</p>";
            overlayHTML += "<div class='divider'></div>";
        });
        $(".content").html(overlayHTML);

        document.getElementsByClassName("exit")[0].addEventListener("click", () => {
            overlay.style.display = "none";
            content.style.display = "none";
        });

        addEmployeeListener(0);
        addEmployeeListener(1);
        addEmployeeListener(2);
        addEmployeeListener(3);
        addEmployeeListener(4);
        addEmployeeListener(5);
        addEmployeeListener(6);
        addEmployeeListener(7);
        addEmployeeListener(8);
        addEmployeeListener(9);
        addEmployeeListener(10);
        addEmployeeListener(11);
    }
    $.getJSON(apiRandom, dataRandom, callbackRandom);

}); //end ready
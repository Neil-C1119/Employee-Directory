$(document).ready(function () {
    var apiRandom = "https://randomuser.me/api/?nat=us&results=12";
    var dataRandom = { format: "json" };
    function callbackRandom(data) {
        var employeeHTML = "<ul>";
        $.each(data.results, function (i, item) {
            employeeHTML += "<a href='#'><li class='employeeBox'>";
            employeeHTML += "<img src='" + item.picture.large + "' class='image'>";
            employeeHTML += "<div class='text employee'><h4 class='employeeName'>" + item.name.first + " " + item.name.last + "</h4>";
            employeeHTML += "<p class='employeeUsername'>" + item.login.username + "</p>";
            employeeHTML += "<p class='employeeLocation'>" + item.location.city + "</p></div></li></a>";
        });
        employeeHTML += "</ul>";
        $("#employees").html(employeeHTML);

        var overlay = document.getElementsByClassName("overlay")[0];
        var content = document.getElementsByClassName("content");
        var selected = document.getElementById("active");
        var employeeBox = document.getElementsByClassName("employeeBox");
        var modal = document.getElementsByClassName("modal")[0];
        function addEmployeeListener(x) {
            overlay.style.display = "none";
            content[x].style.display = "none";
            employeeBox[x].addEventListener("click", () => {
                overlay.style.display = "block";
                content[x].style.display = "block";
            });
            document.getElementsByClassName("exit")[x].addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        var overlayHTML = "";
        $.each(data.results, function (i, item) {
            let usernameLabel = "Username: ";
            let emailLabel = "E-Mail: ";
            let cityLabel = "City: ";
            let phoneLabel = "Phone: ";
            let addressLabel = "Address: ";
            let birthdayLabel = "Birthday: ";
            overlayHTML += "<div class='content'><button class='exit'>Back</button>";
            overlayHTML += "<img src='" + item.picture.large + "' class='modalImage'>";
            overlayHTML += "<div class='modalText'><h4 class='modalName'>" + item.name.first + " " + item.name.last + "</h4>";
            overlayHTML += "<p class='modalUsername'>" + usernameLabel.bold() + item.login.username + "</p>";
            overlayHTML += "<p class='modalEmail'>" + emailLabel.bold() + item.email + "</p>";
            overlayHTML += "<p class='modalLocation'>" + cityLabel.bold() + item.location.city + "</p>";
            overlayHTML += "<p class='modalPhone'>" + phoneLabel.bold() + item.phone + "</p>";
            overlayHTML += "<p class='modalLocation'>" + addressLabel.bold() + item.location.street + " " + item.location.city + ", " + item.location.state + " " + item.location.postcode + "</p>";
            overlayHTML += "<p class='modalBirth'>" + birthdayLabel.bold() + item.dob + "</p></div></div>";
        });
        $(".modal").prepend(overlayHTML);
        overlay.style.display = "none";
        
        function addListeners() {
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
        addListeners();
    }
    $.getJSON(apiRandom, dataRandom, callbackRandom);

}); //end ready
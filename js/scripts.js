$(document).ready(function () {
    var overlay = document.getElementsByClassName("overlay")[0];
    var content = document.getElementsByClassName("content");
    var selected = document.getElementById("active");
    var employeeBox = document.getElementsByClassName("employeeBox");
    var modal = document.getElementsByClassName("modal")[0];
    let modalGallery = modal.children;   //children array
    var apiRandom = "https://randomuser.me/api/?nat=us&results=12";
    var dataRandom = { format: "json" };
    function callbackRandom(data) {
        var employeeHTML = "<ul>";
        $.each(data.results, function (i, item) {
            employeeHTML += "<a href='#'><li class='employeeBox'>";
            employeeHTML += "<img src='" + item.picture.large + "' class='image'>";
            employeeHTML += "<div class='text employee'><h4 class='employeeName'>" + item.name.first + " " + item.name.last + "</h4>";
            employeeHTML += "<p class='employeeUsername'>" + item.login.username + "</p>";
            employeeHTML += "<p class='employeeLocation'>" + item.location.city + ", " + item.nat + "</p></div></li></a>";
        });
        employeeHTML += "</ul>";
        $("#employees").html(employeeHTML);

        var overlayHTML = "";
        $.each(data.results, function (i, item) {
            let usernameLabel = "Username: ";
            let emailLabel = "E-Mail: ";
            let cityLabel = "City: ";
            let phoneLabel = "Phone: ";
            let addressLabel = "Address: ";
            let birthdayLabel = "Birthday: ";
            overlayHTML += "<div class='content' id='content''><button class='exit'>Back</button>";
            overlayHTML += "<img src='" + item.picture.large + "' class='modalImage'>";
            overlayHTML += "<div class='nav'><div class='leftNav'></div>";
            overlayHTML += "<div class='rightNav'></div></div>";
            overlayHTML += "<div class='modalText'><h4 class='modalName'>" + item.name.first + " " + item.name.last + "</h4>";
            overlayHTML += "<p class='modalUsername'>" + usernameLabel.bold() + item.login.username + "</p>";
            overlayHTML += "<p class='modalEmail'>" + emailLabel.bold() + item.email + "</p>";
            overlayHTML += "<p class='modalLocation'>" + cityLabel.bold() + item.location.city + "</p>";
            overlayHTML += "<p class='modalPhone'>" + phoneLabel.bold() + item.phone + "</p>";
            overlayHTML += "<p class='modalLocation'>" + addressLabel.bold() + item.location.street + " " + item.location.city + ", " + item.location.state + " " + item.location.postcode + "</p>";
            overlayHTML += "<p class='modalBirth'>" + birthdayLabel.bold() + item.dob + "</p></div>";
            overlayHTML += "<div class='credit'>Icon made from <a href='http://www.onlinewebfonts.com/icon'>Icon Fonts</a> is licensed by CC BY 3.0</div></div>";
        });
        $(".modal").prepend(overlayHTML);

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

        $.each(data.results, function (i, item) {
            let searchField = document.getElementsByClassName("searchField")[0];
            let searchButton = document.getElementsByClassName("searchButton")[0];
            let firstName = item.name.first.toLowerCase();
            let lastName = item.name.last.toLowerCase();
            let username = item.login.username.toLowerCase();
            let li = document.getElementsByTagName("LI");
            let searchResults = [];
            searchButton.addEventListener("click", () => {
                let $searchInput = $(searchField).val().toLowerCase();
                if ($(searchField).val().length > 0) {
                    if (firstName.includes($searchInput) || lastName.includes($searchInput) || username.includes($searchInput)) {
                        $(li[i]).show();
                    }
                    else if (firstName.includes($searchInput) === false || lastName.includes($searchInput) === false || username.includes($searchInput) === false) {
                        $(li[i]).hide();
                    }
                }
            });
        });
    }
    $.getJSON(apiRandom, dataRandom, callbackRandom);
    
        function addEmployeeListener(x) {   //x is the box to listen for
            let rightNav = document.getElementsByClassName("rightNav");   //right arrow
            let leftNav = document.getElementsByClassName("leftNav");   //left arrow
            let modalIndex = modalGallery[x];   //this is the box you clicked/the modal you're on
            let nextIndex = modalIndex.nextSibling;   //the next modal
            let prevIndex = modalIndex.previousSibling;   //the previous modal
            employeeBox[x].addEventListener("click", () => {   //when you click on the thumbnail
                modal.style.display = "";   //show the modal
                overlay.style.display = "block";   //show the black overlay
                modalGallery[x].style.display = "block";   //show the modal you clicked
            });
            document.getElementsByClassName("exit")[x].addEventListener("click", () => {   //exit button
                overlay.style.display = "none";
                modalGallery[x].style.display = "none";
                modalGallery[x].className = "content";
            });
            rightNav[x].addEventListener("click", () => {   //when you click on the right nav button
                modalGallery[x].style.display = "none";   //hide the modal you're on
                if (x === 11) {
                    $(modal.firstChild).show(); //if you're at the end of the list, go back to the first modal window
                }
                else {
                    $(nextIndex).show();   //show the next modal
                }
            });
            leftNav[x].addEventListener("click", () => {   //when you click on the left nav button
                modalGallery[x].style.display = "none";   //hide the modal you're on
                if (x === 0) {
                    $(modalGallery[11]).show(); //if you're at the start of the list, go to the last modal window
                }
                else {
                    $(prevIndex).show();   //show the previous modal
                }
            });
        }
        

}); //end ready
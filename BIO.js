function hungryImg() {
	var img = document.getElementById("hungry"); 
	img.style.display = "block"; 
}

function happyImg() {
	var img = document.getElementById("happy");
	img.style.display = "block";
}

function tiredImg() {
	var img = document.getElementById("tired");
	img.style.display = "block";
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

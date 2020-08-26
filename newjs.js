// Footer's Left menu bar
/*function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// Smiley in Footer's right section
function smile() {
    var a;
    a = document.getElementById("smiley");
    a.innerHTML = "&#xf118;";
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf119;";
    }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf11a;";
    }, 3000);
}
smile();
setInterval(smile, 4000);
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () { div.style.display = "none"; }, 600);
    }
}*/
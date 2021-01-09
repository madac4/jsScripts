var nav = document.getElementsByClassName('menu_list');
var item = document.getElementsByClassName('menu_item');

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function() {
        var current = document.getElementsByClassName('current');
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
    })
}
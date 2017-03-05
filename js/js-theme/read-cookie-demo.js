// read-cookie-demo.js is used for presentation purpose
// it helps remember if the visitor changed the theme color, so if he changes to a different page, it will be with the last color selected

function getCookie(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
}
var color = getCookie('theme-color');
if (color) {
	document.getElementById('page-theme').href = "css/bootstrap-theme-" + color + ".css";  
}
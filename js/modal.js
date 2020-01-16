
function open_modal(src){
	loadTextFile(src, function(result) {
		document.getElementById("modal_window").innerHTML = result;
	});
	document.getElementById("modal").style.display = "block";
}

function close_modal(){
	document.getElementById("modal").style.display = "none";
	loadTextFile("./html/none.html", function(result) {
		document.getElementById("modal_window").innerHTML = result;
	});
}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById('modal_window').addEventListener('click', (e) => e.stopPropagation());
});
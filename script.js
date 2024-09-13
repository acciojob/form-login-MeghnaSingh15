window.onload = function() {
	let btn = document.querySelector("#button");

	btn.addEventListener("click", function(event) {
		event.preventDefault();
		getFormvalue();
	});

	function getFormvalue() {
		let a = document.querySelector("#first_name"); 
		let b = document.querySelector("#last_name"); 
		alert(a.value + " " + b.value);
	}
}

window.onload = function() {
    let btn = document.querySelector("input[type='submit']");
    
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        getFormvalue();
    });
    
    function getFormvalue() {
        let a = document.querySelector("input[name='fname']"); 
        let b = document.querySelector("input[name='lname']"); 
        alert(a.value + " " + b.value);
    }
}

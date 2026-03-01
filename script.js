document.getElementById("requestForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let problem = document.getElementById("problem").value;

    if(name === "" || city === "" || problem === "") {
        alert("Please fill in all fields.");
        e.preventDefault();
    }

});
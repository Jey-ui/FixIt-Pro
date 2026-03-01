document.getElementById("requestForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value.trim();
    let service = document.getElementById("service").value;
    let problem = document.getElementById("problem").value.trim();

    if(name === "" || service === "" || problem === "") {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
    }

    alert("Your request has been submitted successfully!");
});

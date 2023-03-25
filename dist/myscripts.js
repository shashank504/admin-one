function validateForm() {
    var x = document.forms["myform"]["first"]["last"]["email"]["number"]["optradio"]["pws"]["psw-again"]["add"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}




function validateForm() {
    // var x = document.forms["hello"]["email"]["pws"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
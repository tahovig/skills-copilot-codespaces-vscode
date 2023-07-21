function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    if (member == "yes") {
        document.getElementById("member").value = "No";
    } else {
        document.getElementById("member").value = "Yes";
    }
}
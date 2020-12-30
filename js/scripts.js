function convert() {
    var code = document.getElementById('htmlCode').value;
    document.getElementById('display').src = "data:text/plain," + code;
}
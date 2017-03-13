var key = document.getElementsByClassName("key");
for (var i = 0; i < key.lenght; i++)
    key[i].onclick = keyPress;

function keyPress()
{
    var kp = thisContent;
    document.getElementById("exp").value += kp;
}
var key = document.getElementsByClassName("key");

function calcular()
{
    var r = eval(document.getElementById("exp").value);
    document.getElementById("res").value = r;
}

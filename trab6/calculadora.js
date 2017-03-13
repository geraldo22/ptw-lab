var key = document.getElementsByClassName("key");
for (var i = 0; i < key.lenght; i++)
    key[i].onclick = keyPress;

function keyPress()
{
    var kp = thisContent;
    var xp = document.getElementById("e").value;
    document.getElementById("e").value = xp.concat(kp);
}

function calcular()
{
    var r = eval(document.getElementById("exp").value);
    document.getElementById("r").value = r;
}

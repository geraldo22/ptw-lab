var key = document.getElementsByClassName("key");
for (var i = 0; i < key.length; i++)
    key[i].onclick = keyPress;

function keyPress()
{
    var xp = document.getElementById("e").value;
    var kp = this.textContent;
    var lc = kp.charCodeAt((kp.length) - 1);
    /*if(lc < 48 || lc > 57)
    {
        if()
        kp.replace(kp.charAt((kp.length)-1), xp);
    }
    else*/
    if (kp == '=')
    {
        calcular();
    }
    else if (kp == 'C')
    {
        clear();
    }
    else
    {
        document.getElementById("e").value += kp;
    }
}

function calcular()
{
    var r = eval(document.getElementById("e").value);
    if (r == null || r === "undefined" || isNAN(r) || !isFinite(r))
    {
        document.getElementById("r").value = "expressão inválida";
    }
    else
    {
        document.getElementById("r").value = r;
    }
}

function clear()
{
    document.getElementById("e").value = "";
    document.getElementById("r").value = "";
}

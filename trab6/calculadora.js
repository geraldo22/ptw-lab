var keys = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"];

var num = prompt("Insira o numero de teclas", "16")

var j = 0;
for (var i = 0; i < num; i++)
{
    var newKey = document.createElement("div");
    var keyV = document.createTextNode(keys[j]);
    newKey.appendChild(keyV);

    var newKeyAtt = document.createAttribute("class");
    newKeyAtt.value = "key";
    newKey.setAttributeNode(newKeyAtt);

    var getKeypad = document.getElementById("keypad");
    getKeypad.appendChild(newKey);

    if (j == keys.length - 1)
        j = 0;
    else
        j++;
}

var key = document.getElementsByClassName("key");
for (var i = 0; i < key.length; i++)
{
    key[i].onclick = keyPress;
}


function keyPress()
{
    var xp = document.getElementById("e").value;
    var kp = this.textContent;
    var lc = kp.charCodeAt((kp.length) - 1);
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
        document.getElementById("e").value = xp.concat(kp);
    }
}

function calcular()
{
    var exp = document.getElementById("e").value;
    try
    {
        if (exp == "")
            throw err;
        var r = eval(exp);
        if (r == "Infinity")
            throw err;
        document.getElementById("r").value = r;
    }
    catch (err)
    {
        document.getElementById("r").value = "expressão inválida";
    }
}

function clear()
{
    document.getElementById("e").value = "";
    document.getElementById("r").value = "";
}

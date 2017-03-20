var keys = ["C", "=", "/", "*", "-", "+"];

var num = prompt("Insira o numero de teclas", "10")

for (i = 0; i < num; i++)
{
    var newKey = document.createElement("div");
    var keyV = document.createTextNode(i);
    newKey.appendChild(keyV);

    var newKeyAtt = document.createAttribute("class");
    newKeyAtt.value = "key";
    newKey.setAttributeNode(newKeyAtt);

    var getKeypad = document.getElementById("keypad");
    newKey.onclick = keyPress;
    getKeypad.appendChild(newKey);
}
for (var i = 0; i < keys.length; i++)
{
    var newKey = document.createElement("div");
    var keyV = document.createTextNode(keys[i]);
    newKey.appendChild(keyV);

    var newKeyAtt = document.createAttribute("class");
    newKeyAtt.value = "key";
    newKey.setAttributeNode(newKeyAtt);

    var getKeypad = document.getElementById("keypad");
    newKey.onclick = keyPress;
    getKeypad.appendChild(newKey);
}

function keyPress()
{
    var xp = document.getElementById("e").value;
    var kp = this.textContent;

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

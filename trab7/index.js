document.getElementById('button').onclick = split;

function converter(input)
{
    input = input.match(/\d{2}/g);
    var e1 = Number(input[0]);
	var e2 = Number(input[1]);
	var e3 = Number(input[2]);

	var res = eval(e1 + (e2/60) + (e3/3600));
    return res.toFixed(4);
}

function clear()
{
    document.getElementById("in").innerHTML = "";
    document.getElementById("out").innerHTML = "";
}

function split()
{
    clear();
    document.getElementById("r").style.visibility = "visible";
    var input = document.getElementById("input").value.split(",");
    for (var i = 0; i < input.length; i++)
    {
        if (input[i].match(/^(n|s|e|w)\d{2}\º\d{2}\'\d{2}\"$/gi))
        {
            document.getElementById("in").innerHTML += input[i] + "<br>";
            document.getElementById("out").innerHTML += converter(input[i]) + "<br>";
        }
        else if (input[i] == ""){}
        else
        {
            document.getElementById("in").innerHTML += input[i] + "<br>";
            document.getElementById("out").innerHTML += "<span id=\"erro\">Coordenada Inválida</span><br>";
        }
    }
}



function ahorrar()
{
    let sumar = 0;
    function agregardinero(coins)
    {
       sumar+= coins;
       console.log(sumar);
    }

    return agregardinero;

}

let variable = ahorrar();

variable(5);
variable(5);
variable(15);

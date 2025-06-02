function colors(){
    var rojo = document.getElementById("rojo").value;
    var verde = document.getElementById("verde").value;
    var azul = document.getElementById("azul").value;

    document.body.style.backgroundColor = "rgb("+ rojo +", "+ verde +","+ azul +" )";
    document.getElementById("output").innerHTML = "rgb ("+ rojo +", "+ verde +", "+ azul +" )";
}
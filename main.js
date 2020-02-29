let output = document.querySelector(".output");
let operators = document.querySelector(".operators");
let turnon = document.querySelector(".turnon");
let inputs = document.querySelector(".inputs");
let img = document.querySelector(".seta");
let text = document.querySelector(".text")

//liga/desliga calculadora
function turn(){
    if (turnon.checked){
        inputs.style.visibility = 'visible';
        output.style.visibility = 'visible';
        text.style.visibility = "hidden";
        img.style.visibility = "hidden";
    }
    else{
        inputs.style.visibility = 'hidden';
        output.style.visibility = 'hidden';
        output.value = "";
    }
}

//Função para limpar o visor
function deletar(){
    output.value = "";
}

//Função para pegar os values dos buttons e imprimir no visor(input)
function btnumber(num){
    output.value += num;

    //limitar os caratctéres na tela a 12
    if (output.value.length >=12){
        output.value = output.value.substring(0,12-1)
    }
}

//Função para somar os valores
function isEqual(){
    output.value = eval(output.value);
}

//Função para apagar apenas um char 
function delChar(){
    var valor = output.value
    output.value = valor.substring(0,valor.length-1);
}
//declaração de variável
let texto = prompt("Digite seu nome");
let caixaTexto = document.getElementById('caixa');
const btnTrocaCor = document.getElementById("trocaCor");
const btnTrocaTexto = document.getElementById('trocaTexto');
const btnSoma = document.getElementById("somar");
const btnBolinhas = document.getElementById("addBolinhas");


//inserção de conteúdo HTML
document.getElementById("titalo").innerHTML= "Meu nome é " + texto;

//evento de clique
btnTrocaCor.addEventListener("click", () => {

    //valida o nome da cor
    if(caixaTexto.className === "verde"){
        caixaTexto.classList.add("amarelo");
        caixaTexto.classList.remove("verde");
    }else{
        caixaTexto.classList.add("verde");
        caixaTexto.classList.remove("amarelo");
    }

    //exibe no console
    console.log(caixaTexto.className);
});

    //troca texto
    btnTrocaTexto.addEventListener("click", () => {
        if(caixaTexto.innerText === "Inter lixo"){
            document.getElementById("caixa").innerHTML = "Grêmio top";
        }else{
            document.getElementById("caixa").innerHTML = "Inter lixo";
        }
});

    //soma os valores
    btnSoma.addEventListener("click", () => {
        let numero1 =  document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        let soma = parseInt(numero1) +  parseInt(numero2);
        console.log(soma);
});

    //adiciona bolinhas
    let total = 0;
    let bolinhas = "";
    let bola = '<div class="bolinha></div>';

    btnBolinhas.addEventListener("click", () =>{
        total = total +1;
        bolinhas = "";
        for (let index = 0;  index < total; index++) {
            bolinhas = bolinhas+bola;
        }
        document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
    });



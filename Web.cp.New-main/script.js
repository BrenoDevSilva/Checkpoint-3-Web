/*
    FUNÇÕES PARA A TROCA DO BACKGROUND PELOS BOTÕES
*/
function tema1(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(82, 80, 80), rgb(57, 56, 56), rgb(27, 26, 26))";
}

function tema2(){
    document.body.style.backgroundImage = "linear-gradient(to right, rgb(255, 255, 255), rgba(219, 212, 212, 0.631), rgba(255, 253, 253, 0.648))";
}


/*
    FURMULÁRIO PARA A PÁGINA CONTATO
*/

function Formulario(){
    var nome = document.getElementById('nomes').value;
    var Email = document.getElementById('email').value;
    var Telefone = document.getElementById('telefone').value;
    if (nome == "" || Email == "" || Telefone == ""){
        alert("Preencha todos os campos, por favor!");
    } else {
        alert("Formulário preenchido com sucesso!");
    }
}

/*
    SÉRIE DE FUNCTIONS PARA O FUNCIONAMENTO DO QUIZ DA PÁGINA QUIZ
*/

function pulalinha(){
    document.write("<br>")
    document.write("<br>")
   }
   
   function mostra(frase){
       document.write(frase)
       pulalinha()
   }
   
//SLIDESHOW
/*criando um array de imagens  */
var imagens=[
    'images/vinho1.jpeg',
    'images/vinho2.webp',
    'images/vinho3.jpg',
    'images/vinho4.webp',
    'images/vinho5.jpg',
    'images/vinho6.jpeg',
];

/*declarando variaveis */
var Index =0;
var time =3000;

/* criando uma função */

function slideShow(){
    document.getElementById('image').src =imagens[Index]; /* pega  id e o caminho da imagem*/
    Index++;/* incrementa */
    if (Index == imagens.length){Index =0;} /* verifica se tem imagens e conta */
    setTimeout("slideShow()",time);/* definindo o tempo de 2 milesegundos*/
}

slideShow();

function quiz (){
    var questão1 =  prompt("Como armazenar adequadamente uma garrafa de vinho?")
    var questão2 = prompt("Qual é a diferença entre vinho branco e vinho tinto?")
    var questão3 = prompt('O que significa "tanino"em um vinho?')
    
    var elem = document.getElementById("respostas")
    elem.innerHTML ="<Br>"+ "Resposta: Para armazenar adequadamente uma garrafa de vinho, é importante mantê-la em local escuro e fresco, com temperatura entre 12°C e 18°C."+"<Br>"+ "Resposta: A principal diferença entre vinho branco e vinho tinto está nas uvas usadas para fazer cada um. Vinho branco é feito com uvas brancas ou verdes, enquanto vinho tinto é feito com uvas vermelhas ou roxas."+"<Br>"+ 'Resposta: Tanino é uma substância presente nas sementes, cascas e caules das uvas e que pode ser encontrada em quantidades variadas nos vinhos. Os taninos são responsáveis por dar ao vinho sua sensação de adstringência, ou seja, aquela sensação de secura e "puxamento" que sentimos na boca ao beber um vinho encorpado.'
    }
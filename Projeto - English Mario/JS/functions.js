var engine ={
    "cores" : ['green','purple','blue','red','black','white','orange','pink','yellow'],
    "hexadecimais":{
        'green':'#02EF00',
        'purple':'#790093',
        'red':'#E90808',
        'yellow':'#E7D703',
        'black':'#000000',
        'orange':'#F16529',
        'white':'#FFFFFF',
        'pink':'#ffcbdb',
        'blue':'#0000ff'
    },
    "moedas":0
}

function sortearCor(){
    var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
    var legendaCorCaixa = document.getElementById('cor-na-caixa');
    var nomeCorSorteada = engine.cores[indexCorSorteada];

    legendaCorCaixa.innerText = nomeCorSorteada.toUpperCase();

    return engine.hexadecimais[nomeCorSorteada]
}

function aplicarCorNaCaixa(nomeDaCor){
    var caixaDasCores = document.getElementById('cor-atual')
    caixaDasCores.style.backgroundColor = nomeDaCor;
    caixaDasCores.style.backgroundImage = "url('/img/caixa-fechada.png')";
    caixaDasCores.style.backgroundSize = "100%";
}
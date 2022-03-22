var q = 5;
var w = 2;
var conta = "+";

function calculadora (q,w,conta) {
    if (conta==="+"){
        return q+w;
    }else if (conta ==="-"){
        return q-w;
    }else if(conta==="*"){
        return q*w;
    }else if(conta==="/"){
        return q/w;
    }else{
        document.write("<h1>Não foi possível calcular.</h1>")
    }
}

document.write("<h1>"+q+" "+conta+" "+w+" = "+calculadora(q,w,conta)+"</h1>");
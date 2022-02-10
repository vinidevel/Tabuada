
function gerar() {

    var numero = document.getElementById("numero");
    var tab = document.getElementById("table");
    var res = document.getElementById("res");
    
    if(numero.value.length == 0 ){
            alert("ERROR !!! é necessário preencher o campo Número !");
        } else{

            var num = Number(numero.value);
            var c = 1;
            while (c <= 10){

                var item = document.createElement(`option`);
                item.text = `${num} * ${c} = ${num*c}`
                tab.appendChild(item)
                c++
                
            } 
                      
           }

           res.innerText = `Esta é a tabuada do número ${num}`
        
    }
let casa = document.querySelectorAll(".casa");
let modalGanhar = document.querySelector("#modal-ganhou");
let modalEmpate = document.querySelector("#modal-empatou");
let botaoModal = document.querySelector("#botao-modal")


//casa.innerHTML = "X"
//for(i=0; i<=9; i++){
i=0;
function clique(){
    i++
    if (i%2 == 0){
        this.innerHTML = "X"
     }
    else if (i%2 !== 0){
        this.innerHTML = "O"
     }
     this.onclick = null;
     this.removeEventListener('click', clique);
     if(i>=5){
        verificar();
        //botaoModal.addEventListener = ("click", fechar)
        if (i==9 && verificar!=true){
            modalEmpate.style.display = "block";
        } 
    }

    
}

// for(casinhas in casa){
// casa[casinhas].addEventListener ("click", click);
// }

//ENTENDER FOR...IN E CLICKON
for (casinhas in casa){
    casa[casinhas].onclick = clique;
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML &&
        casa2.innerHTML === casa3.innerHTML &&
        casa1.innerHTML !== ""){
        return true;
    }
    return false;
}
 function verificar(){
     if(comparar(casa[0], casa[1], casa[2]) ||
     comparar(casa[3], casa[4], casa[5]) ||
     comparar(casa[6], casa[7], casa[8]) ||
     comparar(casa[0], casa[3], casa[6]) ||
     comparar(casa[1], casa[4], casa[7]) ||
     comparar(casa[2], casa[5], casa[8]) ||
     comparar(casa[0], casa[4], casa[8]) ||
     comparar(casa[2], casa[4], casa[6])){
        verificar = true
        modalGanhar.style.display = "block";
    // }else{
    //     modalEmpate.style.display = "block"
    }
 }
 

 botaoModal.onclick = function(){
    modalGanhar.style.display = "none";
}

botaoModal.onclick = function(){
    casa[0] === "";
    casa[1] === "";
    casa[2] === "";
    casa[3] === "";
    casa[4] === "";
    casa[5] === "";
    casa[6] === "";
    casa[7] === "";
    casa[8] === "";
}




 
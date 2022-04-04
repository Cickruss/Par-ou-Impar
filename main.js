var nomeplayer1, nomeplayer2, sorteio ,role1, role2;
var n1r1, n2r1, respround1;
var escolha1, escolha2;
var rodada = 1;
var vencedorround1;
var pontuacaop1 = 0, pontuacaop2 = 0;

//INICIO
function rodar(params) {

    var delayInMilliseconds2 = 2000, delayInMilliseconds3 = 3000;
    sorteio =  Math.floor(Math.random()*2)
    console.log(sorteio)

    nomeplayer1 = document.getElementById("player1").value
    nomeplayer2 = document.getElementById("player2").value

    document.getElementById("escolhap1").innerText = `${nomeplayer1} SERA: `
    document.getElementById("escolhap2").innerText = `${nomeplayer2} SERA: `

    setTimeout(function() {
    if (sorteio == 0) {
        document.getElementById("resplayer1").innerText = "PAR"
        document.getElementById("resplayer2").innerText = "IMPAR"
        role1 = 0
        role2 = 1
    }
    else {
        document.getElementById("resplayer1").innerText = "IMPAR"
        document.getElementById("resplayer2").innerText = "PAR"
        role1 = 1
        role2 = 0
    }
    }, delayInMilliseconds2);
    
    setTimeout(function() {
        
    document.getElementById("inicio").style.display = "none";
    document.getElementById("rodada").style.display = "block";
    
    }, delayInMilliseconds3);
   
    

    
}

//ROUNDS
function round1(params) {

    var delayInMilliseconds1 = 1000, delayInMilliseconds35 = 3500,  delayInMilliseconds4 = 4000;

    n1r1 = parseInt(document.getElementById("n1r1").value)
    n2r1 = parseInt(document.getElementById("n2r1").value)
    parseInt(role1)
    parseInt(role2)

    respround1 = (n1r1 + n2r1) % 2
    rodada++
    
    console.log(respround1)
    console.log(role1)
    console.log(role2)

    if(role1 == 0 && respround1 == 0){
            
        vencedorround1 = nomeplayer1 + " VENCEU A RODADA"
        pontuacaop1++
        
    }else if(role2 == 0 && respround1 == 0){

        vencedorround1 = nomeplayer2 + " VENCEU A RODADA"
        pontuacaop2++

    }else if (role1 == 1 && respround1 != 0){

        vencedorround1 = nomeplayer1 + " VENCEU A RODADA"
        pontuacaop1++

    }
    else if(role2 == 1 && respround1 != 0){

        vencedorround1 = nomeplayer2 + " VENCEU A RODADA"
        pontuacaop2++

    }
    setTimeout(function(){
    document.getElementById("venceu").innerText = vencedorround1
    }, delayInMilliseconds1);

    setTimeout(function(){
        document.getElementById("venceu").innerText = "ROUND " + rodada;
        document.getElementById("n1r1").value = ''
        document.getElementById("n2r1").value = ''
        document.getElementById("pontuacaop1").innerText = `${nomeplayer1}: ${pontuacaop1}`
        document.getElementById("pontuacaop2").innerText = `${nomeplayer2}: ${pontuacaop2}`
        }, delayInMilliseconds35);
    
    if (pontuacaop1 == 3 ) {
        document.getElementById("rodada").style.display = "none";
        document.getElementById("telav").style.display = "block";
        document.getElementById("vitoria").innerHTML = `${nomeplayer1} VENCEU! <br> <center> <br> <iframe src="https://giphy.com/embed/13w6Kxv69la5NK" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/13w6Kxv69la5NK"></a></p> </center> CONGRATULATIONS!`
    }
    else if (pontuacaop2 == 3) {
        document.getElementById("rodada").style.display = "none";
        document.getElementById("telav").style.display = "block";
        document.getElementById("vitoria").innerHTML = `${nomeplayer2} VENCEU! <br> <center> <br> <iframe src="https://giphy.com/embed/13w6Kxv69la5NK" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/13w6Kxv69la5NK"></a></p> </center> CONGRATULATIONS!`
    }
}
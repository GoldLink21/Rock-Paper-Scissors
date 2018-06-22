function calculate(p){
    var o = (Math.floor((Math.random()*3)));
    var choice = document.getElementById("opponent");
    choice.src=convert(o);

    var calc=p-o;
    if(calc===2) calc=-1;
    
    if(calc===-2) calc=1;

    check(calc);
}

function check(calc){
    var result = document.getElementById("results");
    switch(calc){
        case -1:
            result.style.color='red';
            result.textContent="You have lost";
        break;
        case 0:
            result.style.color='grey'
            result.textContent="It was a tie";
        break;
        case 1:
            result.style.color='green';
            result.textContent="You have won";
        break;
    }
}

function convert(rnd){
    var choice = document.getElementById("choice");
    switch(rnd){
        case 0:return "rock.png";
        case 1:return "paper-new.png";
        case 2:return "scissors-new.png";
    }
}
let number=document.getElementById('number')

let count=0;
function counter(){
    count++;
    number.innerHTML=count+'%'
    if(count===65)
        clearInterval(x)
}


let x=setInterval(counter,2000/65)

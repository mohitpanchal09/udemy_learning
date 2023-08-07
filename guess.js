let maximum=parseInt(prompt("Enter a maximum no."))
while(!maximum){
    maximum=parseInt(prompt("Enter valid no.:"));
}

const targetNum = Math.floor(Math.random()*maximum)+1
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess"))

while (parseInt(guess)!==targetNum){
    if(guess==='q'){
        break
    }
    if(guess>targetNum){
        guess=prompt("Your guess is too high")
    }
    else{
        guess = prompt("Your guess is too low")
    }
}
alert("You win")
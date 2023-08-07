const password = prompt("Enter the password")

if (password.length>=6){
    console.log("good password")
}
else{
    console.log("short password")
}

if (password.indexOf(' ')===-1){
    console.log('good')
}
else{
    console.log("cant have space")
}
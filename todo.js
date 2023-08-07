let input = prompt("what do you want to do ?")
const tasks =['wakeup','gym']
while (input!=='quit' && input!=='q'){
    
    if(input==='list'){
        console.log("##############")
        for(let i=0;i<tasks.length;i++){
            console.log(`${i}: ${tasks[i]}`)
        }
        console.log("##############")
    }else if(input=='new'){
        const newTodo = prompt("What new")
        tasks.push(newTodo)
        console.log(`${newTodo} added to list`)
    }else if(input=='delete'){
        const index = parseInt(prompt("Enter the index"))
        if(!Number.isNaN(index)){
            const deleted =tasks.splice(index,1)
            console.log(`${deleted} is deleted`)
        }else{
            console.log('unkown index')
        }


    }
    input=prompt("what do you want to do now?")

}
console.log('Ok Quit')
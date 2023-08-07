const scores={
    mohit:700,
    devesh:600,
    harsh:500,
    nivesh:400,
    dhruval:200
}
console.log(scores)

for (let i in scores){
    console.log(`${i} scores  ${scores[i]}`)
}

let totals=0;
// Object.keys(scores) it returns keys
console.log(Object.values(scores))
for(marks of Object.values(scores)){
    console.log(marks)
    totals = totals +marks
}

console.log(totals)
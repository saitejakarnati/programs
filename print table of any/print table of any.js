function printTableOf(x){
    let y = "";
    for (let i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + x * i )
    } 
    return y
    }
    let x= printTableOf(5);
    console.log(x)
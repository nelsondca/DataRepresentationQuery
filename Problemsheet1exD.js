const myArray = [25, 31, 42, 77];//declaring a variable

const test = myArray.map((element)=>{//all the logic inside these brakets

    if(element < 70){//Creating the condition

    return element*2

    }else{
        return element;//avoiding the undefined output
    }
});

console.log(test);//


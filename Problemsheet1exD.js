const myArray = [25, 31, 42, 77];//declaring a variable

const test = myArray.map((element)=>{//all the logic inside these brakets

    if(element < 70){//Creating the condition when each element inside the array is less than 70 gets multiplied by 2

    return element*2

    }else{
        //or else to avoid the undefined output return the element itself
        return element;
    }
});

console.log(test);//outputting the test function


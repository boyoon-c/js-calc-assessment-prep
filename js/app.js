// Instructions:  You've been given the HTML template for a JavaScript 'calculator.'  
// Implement functionality such that when two numbers are entered in the input fields, 


//    pressing one of the 'operator' buttons results in the mathematical calculation for those two numbers.  
plusBtn=document.getElementById("plus")
minusBtn=document.getElementById("minus")
divisionBtn=document.getElementById("divided")
multiplyBtn=document.getElementById("times")
a = document.getElementById('math-input-1')
b = document.getElementById('math-input-2')
mathResult=document.getElementById("math-result")
// a.addEventListener('keyup', upKey)
// a.addEventListener('keydown', downKey)
// b.addEventListener('keyup', upKey)
// b.addEventListener('keydown', downKey)
function upKey(e) {
    a.getAttribute("value").textContent += `${e.code}`;
}
function downKey(e){
    a.getAttribute("value").textContent -= `${e.code}`;
}

/*
function calculate(a,b, operator){
    if (operator == "plus"){
        return a+b
    } else if (operator =="minus"){
        return a-b
    } else if (operator =="division"){
        return a/b
    } else if (operator=="multiply"){
        return a*b
    }
}

plusBtn.addEventListener('click', ()=>{
    operator = "plus"
    res = calculate(parseInt(a.value), parseInt(b.value), operator)
    //mathResult.setAttribute("value", res)
    mathResult.value = res
})
minusBtn.addEventListener('click', ()=>{
    operator = "minus"
    res = calculate(parseInt(a.value), parseInt(b.value), operator)
    //mathResult.setAttribute("value", res)
    mathResult.value = res
})
divisionBtn.addEventListener('click', ()=>{
    operator = "division"
    res = calculate(parseInt(a.value), parseInt(b.value), operator)
    //mathResult.setAttribute("value", res)
    mathResult.value = res
})
multiplyBtn.addEventListener('click', ()=>{
    res = calculate(parseInt(a.value), parseInt(b.value), "multiply")
    //mathResult.setAttribute("value", res)
    mathResult.value = res
})
*/

function calcFun(a,b,operator){
    mathResult.value = eval(a + operator + b)
    return mathResult.value
}
operators = document.getElementById('operators')
operators.addEventListener('click', (e)=>{
    operator=e.target.innerText
    num1 = parseInt(a.value)
    num2 = parseInt(b.value)
    calcFun(num1,num2,operator)
})


// EASY BONUS:  If the result is odd, change it's color to salmon.
// MEDIUM BONUS:  Use a single event listener to accomplish this task, rather than 4 of them.
// HARD BONUS:  Use a single event listener and don't use any conditionals for the math

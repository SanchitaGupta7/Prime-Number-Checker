let input=document.querySelector(".number input");
let clearButton=document.querySelector("#clearButton");
let submitButton=document.querySelector("#submitButton");
let result=document.querySelector(".resultBox p");
clearButton.addEventListener("click",()=>{
    input.value="";
    result.innerText="Result";
});
const checkPrime=(n)=>{
    if(n==1){
        return false;
    }
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
};
const displayResult=(val,num)=>{
    if(val){
        result.innerText=`${num} is Prime!`;
    }else{
        result.innerText=`${num} is not Prime.`;
    }
};
submitButton.addEventListener("click",()=>{
    let num=input.value;
    if(num<1){
        input.value=1;
        num=1;
    }
    displayResult(checkPrime(num),num);
});
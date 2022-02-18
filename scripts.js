var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function refreshColor(){
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    
    else  {
        currentNumberWrapper.style.color ='black';
    }
}
function increment(){
    currentNumber = currentNumber + 1;
    refreshColor();
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement(){
    currentNumber = currentNumber -1;
    refreshColor();
    currentNumberWrapper.innerHTML = currentNumber;

}




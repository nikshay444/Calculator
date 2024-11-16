let input = document.getElementById("userInput");
let result = '';

function number(num) {
    
    result += num;
    input.value = result;
    console.log(result);
}
function equal() {
    try {
        input.value = eval(result);
        result = '';
    } catch (error) {
        input.value="Error"
    }
   }
function clearInput() {
    result = '';
    input.value = '0';
   
}
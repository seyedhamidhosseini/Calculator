var result = document.getElementById("result");

function calculate(value){
  try {
    result.value=eval(value);
  } catch (error) {
    result.value = 'خطا';
  }
}

function liveScreen(enteredValue) {
  result.value=result.value+enteredValue;
}

document.addEventListener("keydown",function(e){
  e.preventDefault();
  if (e.key==='0' || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
    result.value +=e.key;
  }
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    result.value += e.key;
  }
  if (e.key === ".") {
    result.value += ".";
  }
  if (e.key === "Enter") {
    calculate(e.key);
  }
  if (e.key ==="Backspace") {
    result.value=result.value.substring(0, result.value.length-1);
  }
});
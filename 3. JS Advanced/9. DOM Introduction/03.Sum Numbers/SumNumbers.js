function calc() {
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let result = n1 + n2;
    document.getElementById('sum').value = result;
}
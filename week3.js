console.log("connect")

function fun1() {
    let i, j, sum;
    i = parseInt(document.getElementById('first').value);
    j = parseInt(document.getElementById('second').value);
    sum = i + j;
    result = document.getElementById('answer').value = sum;
}
function fun2() {
    let i, j, sub;
    i = parseInt(document.getElementById('first').value);
    j = parseInt(document.getElementById('second').value);
    sub = i - j;
    result = document.getElementById('answer').value = sub;
}
function fun3() {
    let i, j, mul;
    i = parseInt(document.getElementById('first').value);
    j = parseInt(document.getElementById('second').value);
    mul = i * j;
    result = document.getElementById('answer').value = mul;
}
function fun4() {
    let i, j, div;
    i = parseInt(document.getElementById('first').value);
    j = parseInt(document.getElementById('second').value);
    div = i / j;
    result = document.getElementById('answer').value = div;
}
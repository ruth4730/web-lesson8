function sum()
{
    alert(+document.getElementById('num1').value+(+document.getElementById('num2').value))
}
function mult()
{
    alert(document.getElementById('num1').value*document.getElementById('num2').value)
}
function pow()
{
    alert(document.getElementById('num1').value**document.getElementById('num2').value)
}
function save()
{
    let name=document.getElementById('name').value||"אורח"
    let pass=document.getElementById('pass').value||1234
    alert(" שלום"+name+" סיסמתך היא"+pass)
}
function bin(){
    let n1=parseInt(document.getElementById("num1").value,2)
    let n2=parseInt( document.getElementById("num2").value,2)
    alert((n1+n2).toString(2))
}
function convertFunction(){
    let convrtNumber=Number(document.getElementById("inputText").value);
    convrtNumber=convrtNumber/2.54;
    document.getElementById("disp").innerHTML=convrtNumber;
}
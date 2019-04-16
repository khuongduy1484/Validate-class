let class1 = prompt('nhap class');
let request = /^[CAP0-9]{5}[GHIKLM]$/;
let ckeck = request.test(class1);
function checkclass() {
    if (ckeck){
        alert("TRUE");
    } else {
        alert("FALE");
    }
}
checkclass(class1);
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById('myForm'); //ดึงค่ามาใช้
    form.onsubmit = validateForm; //ส่งต่อให้อีกfunction
}
//getelement = การรับค่าที่py'ไม่รู้

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    //forms = ดึงเฉพาะส่วนที่ต้องการมาใช้
    var MainPassword = document.forms['myForm'] ['password'].value;
    var RecheckPassword =  document.forms['myForm']['recheckpassword'].value;

    if(MainPassword != RecheckPassword){
        document.getElementById('errormsg').innerHTML = 'Please Recheck Password again'
        return false;
    }
    else{
        alert("Sucess");
    }

    
}

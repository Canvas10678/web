window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById('myLogin');
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	//querystring เป็นเหมือน Gps
	//URLSearchParams เข้าถึง querystring
	const queryString = window.location.search;
	const urlParums = new URLSearchParams(queryString); 

	const username = urlParums.get('username');
	const password = urlParums.get('password');

	var User = document.forms['myLogin'] ['username'].value;
    var Pass =  document.forms['myLogin']['password'].value;

	if(username == User && password == Pass){
		alert('Sucess');
	}
	else{
		alert('Please try again');
		return false;
	}
}

			
window.onload = loginLoad;
function loginLoad(){
	const form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;
}

function checkLogin(){
    const queryString = window.location.search;
    console.log(queryString);

    let urlParams = new URLSearchParams(queryString);
    let username = urlParams.get('username')
    console.log(username);

    const password = urlParams.get('password')
    console.log(password);

    let name = document.forms["myLogin"]["username"].value;
    let pass = document.forms["myLogin"]["password"].value;
    console.log(name);
    console.log(pass);
    
    if (username === name && password === pass) {
        alert("OK");
        return true;
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }
}

			
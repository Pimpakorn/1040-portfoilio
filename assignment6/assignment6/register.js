window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById('myRegister');
    form.onsubmit = validateForm;
}

function validateForm() {
    let username = document.forms["myRegister"]["username"].value;
    let password = document.forms["myRegister"]["password"][0].value;
    let retypePassword = document.forms["myRegister"]["password"][1].value;
    let lastname = document.forms["myRegister"]["lastname"].value;
    let Gender = document.forms["myRegister"]["gender"].value;
    let Birthday = document.forms["myRegister"]["bday"].value;
    let Emailaddress = document.forms["myRegister"]["email"].value;
    console.log(username);
    console.log(password);
    console.log(retypePassword);

    let err = document.getElementById('errormsg');
    if (username == "" || lastname == "" || Gender == "" || Birthday == "" || Emailaddress == "") {
        err.innerHTML ="กรุณากรอกข้อมูลให้ครบทุกช่อง";
        return false;
    }

    if (password !== retypePassword) {
        err.innerHTML = "Password และ Retype Password ไม่ตรงกัน";
        return false;
    }

    return true;
}
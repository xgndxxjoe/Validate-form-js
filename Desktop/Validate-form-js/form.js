
//Getting all input object
var names = document.forms["myForm"]["nam"];
var emails = document.forms["myForm"]["ema"];
var dates = document.forms["myForm"]["dat"];
var froms = document.forms["myForm"]["from"];
var edus = document.forms["myForm"]["education"];
var cmts = document.forms["myForm"]["cm"];
//getting value of email
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//Getting all error display object
var names_error = document.getElementById("name_error");
var emails_error = document.getElementById("email_error");
var dates_error = document.getElementById("date_error");
var froms_error = document.getElementById("from_error");
//var edu_error = document.getElementById("edu_error");
var cmts_error = document.getElementById("cmt_error");
//Setting all event listerner
names.addEventListener("blur", nameVerify, true);
emails.addEventListerner("blur", emailVerify, true);
dates_error.addEventListerner("blur", dateVerify, true);
froms_error.addEventListerner("blur", fromVerify, true);
// //edu.addEventListerner("blur", eduVerify, true);
cmts_error.addEventListerner("blur", cmtVerify, true);

function validateForm(){
    if(names.value == ""){
        names.style.border = "1px solid red";
        names_error.textContent = "Mời bạn nhập họ và tên";
        names.focus();
        return false;
    }
    // if(emails.value == ""){
    //     emails.style.border = "1px solid red";
    //     emails_error.textContent = "Mời bạn nhập email";
    //     emails.focus();
    //     return false;
    // }
    if(!filter.test(emails.value)){
        emails.style.border = "1px solid red";
        emails_error.textContent = "Mời bạn nhập đúng định dạng email";
        emails.focus();
        return false;
    }
    if(dates.value == ""){
        dates.style.border = "1px solid red";
        dates_error.textContent = "Ngày sinh không được để trống"
        dates.focus();
        return false;
    }
    if(froms.value == "Chon"){
        froms.style.border = "1px solid red";
        froms_error.textContent = "Quê quán không được để trống";
        froms.focus();
        return false;
    }
    if(cmts.value == "" ){
        cmts.style.border = "1px solid red";
        cmts_error.textContent = "Hãy giới thiệu về bản thân";
        cmts.focus();
        return false;
    } else if(cmts.value.length < 50 ){
        cmts.style.border = "1px solid red";
        cmts_error.textContent = "Giới thiệu bản thân ít nhất 50 ký tự";
        cmts.focus();
        return false;
    }
}
function nameVerify(){
    if(names.value != ""){
        names.style.border = "1px solid black";
        names_error.innerHTML = "";
        return true;
    }
}
function emailVerify(){
    if(filter.test(emails.value)){
        emails.style.border = "1px solid black";
        emails_error.innerHTML = "";
        return true;
    }
}
function dateVerify(){
    if(dates.value != ""){
        dates.style.border = "1px solid black";
        dates_error.innerHTML = "";
        return true;
    }
}
function fromVerify(){
    if(froms.value != "Chon"){
        froms.style.border = "1px solid black";
        froms_error.innerHTML = "";
        return true;
    }
}
function cmtVerify(){
    if(cmts.value != ""){
        cmts.style.border = "1px solid black";
        cmts_error.innerHTML = "";
        return true;
    }
}
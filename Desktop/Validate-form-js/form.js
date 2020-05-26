
//Getting all input object
var names = document.forms["myForm"]["nam"];
var emails = document.forms["myForm"]["ema"];
var dates = document.forms["myForm"]["dat"];
var f = document.forms["myForm"]["from"];
var froms = f.value;
var edus = document.forms["myForm"]["education"];
var cmts = document.forms["myForm"]["cm"];
//getting value of email
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//Getting all error display object
var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var date_error = document.getElementById("date_error");
var from_error = document.getElementById("from_error");
//var edu_error = document.getElementById("edu_error");
var cmt_error = document.getElementById("cmt_error");
//Setting all event listerner
// names.addEventListeners("blur", nameVerify, true);
// emails.addEventListerners("blur", emailVerify, true);
// dates.addEventListerners("blur", dateVerify, true);
// froms.addEventListerners("blur", fromVerify, true);
// //edu.addEventListerner("blur", eduVerify, true);
// cmts.addEventListerners("blur", cmtVerify, true);

function validateForm(){
    if(names.value == ""){
        names.style.border = "1px solid red";
        name_error.textContent = "Mời bạn nhập họ và tên";
        names.focus();
        return false;
    }
    if(!filter.test(emails.value)){
        emails.style.border = "1px solid red";
        email_error.textContent = "Mời bạn nhập đúng định dạng email";
        emails.focus();
        return false;
    }
    if(dates.value == ""){
        dates.style.border = "1px solid red";
        date_error.textContent = "Ngày sinh không được để trống"
        dates.focus();
        return false;
    }
    if(froms.text == "Chọn" ){
        froms.style.border = "1px solid red";
        from_error.textContent = "Quê quán không được để trống";
        froms.focus();
        return false;
    }
    if(cmts.value == "" ){
        cmts.style.border = "1px solid red";
        cmt_error.textContent = "Hãy giới thiệu về bản thân";
        cmts.focus();
        return false;
    } else if(cmts.value.length < 50 ){
        cmts.style.border = "1px solid red";
        cmt_error.textContent = "Giới thiệu bản thân ít nhất 50 ký tự";
        cmts.focus();
        return false;
    }
}
function nameVerify(){
    if(names.value != ""){
        //name.style.border = "1px solid red";
        name_error.innerHTML = "";
        return true;
    }
}
function emailVerify(){
    if(emails.value != ""){
        //name.style.border = "1px solid red";
        email_error.innerHTML = "";
        return true;
    }
}
function dateVerify(){
    if(dates.value != ""){
        //name.style.border = "1px solid red";
        date_error.innerHTML = "";
        return true;
    }
}
function fromVerify(){
    if(froms.text == "Hà Nội" || froms.text == "Hồ Chí Minh" || froms.text == "Thái Bình" || froms.text == "Huế" || froms.text == "Đà Nẵng"){
        //name.style.border = "1px solid red";
        from_error.innerHTML = "";
        return true;
    }
}
function cmtVerify(){
    if(cmts.value != ""){
        //name.style.border = "1px solid red";
        cmt_error.innerHTML = "";
        return true;
    }
}
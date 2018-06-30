function overPunkt(obj_listPunkt) {
    obj_listPunkt.childNodes[3].style.display="block";
    obj_listPunkt.childNodes[3].style.top=obj_listPunkt.offsetHeight;
}

function outPunkt(obj_listPunkt) {
    obj_listPunkt.childNodes[3].style.display="none";
}

function overPunkts(obj_listPunkts) {
    obj_listPunkts.childNodes[1].style.display="block";
    obj_listPunkts.childNodes[1].style.top=obj_listPunkts.offsetHeight;
}

//----------------------------
// Reg Form
//----------------------------

var re_nameuser=/^[A-ZА-ЯЁ\'\`]{2,100}$/i;
var re_email=/^[A-Z0-9_$\.!\-]+@[A-Z0-9\.]+\.[A-ZА-ЯЁ]{2}$/i;
var re_tel=/^(\+380)[0-9]{9}$/;

regform.subm.onclick=function(){
    var flag=0;
    if(!re_nameuser.test(regform.nameuser.value)){
        message("Некорректно введено ім'я","lnameuser");
        flag=1;
    }
    if(!re_email.test(regform.email.value)){
        message("Некорректно введено почта","lemail");
        flag=2;
    }
    if(!re_tel.test(regform.tel.value)){
        message("Некорректно введено номер телефона (+380)","ltel");
        flag=3;
    }
    if(flag===0){
        regform.submit();
        regform.reset();
        //alert("Congratulation your text is send");
    }
}
function message(mes,str_id){
    document.getElementById(str_id).innerHTML=mes;
}
var inpregf=regform.getElementsByTagName("input");
for(i=0;i<inpregf.length;i++){
    if (inpregf[i].type.toLowerCase()==="text" || inpregf[i].type.toLowerCase()==="password"){
        inpregf[i].onfocus=function(){
            message("","l"+this.id);
        }
    }
}
function clearMes(){
    message("","l"+this.id);
}
regform.nameuser.onfocuse=clearMes;
regform.email.onfocuse=clearMes;
regform.tel.onfocuse=clearMes;
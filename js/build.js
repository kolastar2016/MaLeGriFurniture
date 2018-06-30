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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvdmVyUHVua3Qob2JqX2xpc3RQdW5rdCkge1xyXG4gICAgb2JqX2xpc3RQdW5rdC5jaGlsZE5vZGVzWzNdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgb2JqX2xpc3RQdW5rdC5jaGlsZE5vZGVzWzNdLnN0eWxlLnRvcD1vYmpfbGlzdFB1bmt0Lm9mZnNldEhlaWdodDtcclxufVxyXG5cclxuZnVuY3Rpb24gb3V0UHVua3Qob2JqX2xpc3RQdW5rdCkge1xyXG4gICAgb2JqX2xpc3RQdW5rdC5jaGlsZE5vZGVzWzNdLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG92ZXJQdW5rdHMob2JqX2xpc3RQdW5rdHMpIHtcclxuICAgIG9ial9saXN0UHVua3RzLmNoaWxkTm9kZXNbMV0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgICBvYmpfbGlzdFB1bmt0cy5jaGlsZE5vZGVzWzFdLnN0eWxlLnRvcD1vYmpfbGlzdFB1bmt0cy5vZmZzZXRIZWlnaHQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSZWcgRm9ybVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciByZV9uYW1ldXNlcj0vXltBLVrQkC3Qr9CBXFwnXFxgXXsyLDEwMH0kL2k7XHJcbnZhciByZV9lbWFpbD0vXltBLVowLTlfJFxcLiFcXC1dK0BbQS1aMC05XFwuXStcXC5bQS1a0JAt0K/QgV17Mn0kL2k7XHJcbnZhciByZV90ZWw9L14oXFwrMzgwKVswLTldezl9JC87XHJcblxyXG5yZWdmb3JtLnN1Ym0ub25jbGljaz1mdW5jdGlvbigpe1xyXG4gICAgdmFyIGZsYWc9MDtcclxuICAgIGlmKCFyZV9uYW1ldXNlci50ZXN0KHJlZ2Zvcm0ubmFtZXVzZXIudmFsdWUpKXtcclxuICAgICAgICBtZXNzYWdlKFwi0J3QtdC60L7RgNGA0LXQutGC0L3QviDQstCy0LXQtNC10L3QviDRltC8J9GPXCIsXCJsbmFtZXVzZXJcIik7XHJcbiAgICAgICAgZmxhZz0xO1xyXG4gICAgfVxyXG4gICAgaWYoIXJlX2VtYWlsLnRlc3QocmVnZm9ybS5lbWFpbC52YWx1ZSkpe1xyXG4gICAgICAgIG1lc3NhZ2UoXCLQndC10LrQvtGA0YDQtdC60YLQvdC+INCy0LLQtdC00LXQvdC+INC/0L7Rh9GC0LBcIixcImxlbWFpbFwiKTtcclxuICAgICAgICBmbGFnPTI7XHJcbiAgICB9XHJcbiAgICBpZighcmVfdGVsLnRlc3QocmVnZm9ybS50ZWwudmFsdWUpKXtcclxuICAgICAgICBtZXNzYWdlKFwi0J3QtdC60L7RgNGA0LXQutGC0L3QviDQstCy0LXQtNC10L3QviDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAgKCszODApXCIsXCJsdGVsXCIpO1xyXG4gICAgICAgIGZsYWc9MztcclxuICAgIH1cclxuICAgIGlmKGZsYWc9PT0wKXtcclxuICAgICAgICByZWdmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgIHJlZ2Zvcm0ucmVzZXQoKTtcclxuICAgICAgICAvL2FsZXJ0KFwiQ29uZ3JhdHVsYXRpb24geW91ciB0ZXh0IGlzIHNlbmRcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVzc2FnZShtZXMsc3RyX2lkKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cl9pZCkuaW5uZXJIVE1MPW1lcztcclxufVxyXG52YXIgaW5wcmVnZj1yZWdmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XHJcbmZvcihpPTA7aTxpbnByZWdmLmxlbmd0aDtpKyspe1xyXG4gICAgaWYgKGlucHJlZ2ZbaV0udHlwZS50b0xvd2VyQ2FzZSgpPT09XCJ0ZXh0XCIgfHwgaW5wcmVnZltpXS50eXBlLnRvTG93ZXJDYXNlKCk9PT1cInBhc3N3b3JkXCIpe1xyXG4gICAgICAgIGlucHJlZ2ZbaV0ub25mb2N1cz1mdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBtZXNzYWdlKFwiXCIsXCJsXCIrdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTWVzKCl7XHJcbiAgICBtZXNzYWdlKFwiXCIsXCJsXCIrdGhpcy5pZCk7XHJcbn1cclxucmVnZm9ybS5uYW1ldXNlci5vbmZvY3VzZT1jbGVhck1lcztcclxucmVnZm9ybS5lbWFpbC5vbmZvY3VzZT1jbGVhck1lcztcclxucmVnZm9ybS50ZWwub25mb2N1c2U9Y2xlYXJNZXM7Il19

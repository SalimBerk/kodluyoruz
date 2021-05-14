var info=prompt("Adınız nedir ?")
document.getElementById("myName").innerHTML=info;

var saat;

function showTime(){
    var suan= new Date();
    var dsaat=suan.getHours();
    var ddakika=suan.getMinutes();
    var dsaniye=suan.getSeconds();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    saat=dsaat + ':' + ((ddakika<10) ? '0' : '') + ddakika + ':' + ((dsaniye<10) ? '0' : '') + dsaniye;
    document.getElementById("myclock").innerHTML=saat+" "+gunler[suan.getDay()];
    
    

    

    setTimeout("showTime()",1000);
    }
    setTimeout("showTime()",1000);
    
    








(()=>{let e=document.getElementsByClassName("input")[13],t=document.getElementsByClassName("input")[9],a=document.getElementsByClassName("button")[0];t.addEventListener("change",(function(a){parseFloat(t.value)<=parseFloat(e.value)&&parseFloat(t.value)>=10||(document.getElementsByClassName("input")[9].value="",showToast("error","Valor de saque não permitido!"))})),a.addEventListener("click",(function(e){document.getElementsByClassName("input")[9].disabled=!0}))})();/*! Tue Jul 19 2022 20:47:40 GMT+0000 (Coordinated Universal Time) !*/
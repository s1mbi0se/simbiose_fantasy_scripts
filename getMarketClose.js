(()=>{function e(){n().forEach((e=>{horario_mercado_fecha=function(e){let t=n();for(i=0;i<t.length;i++)return document.getElementsByClassName(e)[i].textContent}(e);const o=(new Date(horario_mercado_fecha)-new Date)/1e3,r=Math.floor(o/3600/24),l=Math.floor(o/3600)%24,a=Math.floor(o/60)%60,c=Math.floor(o)%60;let s=r,d=t(l),m=t(a),h=t(c),f=document.getElementById(e);return f.innerHTMl="<div id='{tables__table_id}'>{mercado_fecha}</div>",s>0?(f.textContent=s+"d "+d+"h "+m+"m "+h+"s",f.style.color="green",f):d>12&&d<=24||d<=12&&d>=2?(f.textContent=d+"h "+m+"m "+h+"s",f.style.color="orange",f):d<=2&&d>=1?(f.textContent=d+"h "+m+"m "+h+"s",f.style.color="red",f):d<=0&&m<=59&&m>=1?(f.textContent=m+"m "+h+"s",f.style.color="red",f):h>=0&&h<=59?(f.textContent=h+"s",f.style.color="red",f):(f.textContent="MERCADO FECHADO !!!",f.style.color="red",document.getElementById(e+"btn").disabled=!0,f)}))}function t(e){return e<10?`0${e}`:e}function n(){let e=[],t=document.getElementsByClassName("class_id");for(i=0;i<t.length;i++)e.push(t[i].id);return e}!async function(){setInterval(e,1e3)}()})();/*! Mon Jul 18 2022 21:05:42 GMT+0000 (Coordinated Universal Time) !*/
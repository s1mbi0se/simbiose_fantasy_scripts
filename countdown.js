(()=>{function e(){n().forEach((e=>{horario_mercado_fecha=function(e){let t=n();for(i=0;i<t.length;i++)return document.getElementsByClassName(e)[i].textContent}(e);const l=(new Date(horario_mercado_fecha)-new Date)/1e3,o=Math.floor(l/3600/24),c=Math.floor(l/3600)%24,r=Math.floor(l/60)%60,s=Math.floor(l)%60;let d=o,u=t(c),a=t(r),f=t(s),g=document.getElementById(e);if(g.innerHTMl="<div id='{tables__table_id}'>{mercado_fecha}</div>",d>0)return g.textContent=d+"d "+u+"h "+a+"m "+f+"s",g.style.color="green",g;if(u>12&&u<=24)return g.textContent=u+"h "+a+"m "+f+"s",g.style.color="orange",g;if(u<=12&&u>=2)return g.textContent=u+"h "+a+"m "+f+"s",g.style.color="orange",g;if(u<=2&&u>=1)return g.textContent=u+"h "+a+"m "+f+"s",g.style.color="red",g;if(u<=0&&a<=59&&a>=1)return g.textContent=a+"m "+f+"s",g.style.color="red",g;if(f>=0&&f<=59)return g.textContent=f+"s",g.style.color="red",g;texto="MERCADO FECHADO",g.textContent=texto,g.style.color="red",g.style.fontWeight="bold";let b=document.getElementById(e+"btn");return g.parentNode.firstChild.textContent="؜",b.disable=!0,b.style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",b.addEventListener("click",(function(e){e.preventDefault()}),!1),g}))}function t(e){return e<10?`0${e}`:e}function n(){let e=[],t=document.getElementsByClassName("class_id");for(i=0;i<t.length;i++)e.push(t[i].id);return e}!async function(){setInterval(e,1e3)}(),function(){if(window.location.href.includes("/fantasy-listagem-mesas")){let e=document.getElementById("logged_user").innerHTML;executeAction("query-get-all-subs-leagues",null).then((t=>{for(let n=0;n<t.length;n++)if(t[n].subs===t[n].max_users&&null!=t[n].max_users){let e=document.querySelectorAll("button");for(let l=0;l<e.length;l++)(e[l].id===t[n].table_id+"btn"||e[l].id===t[n].table_id+"Grátisbtn"||e[l].id===t[n].table_id+"Pagasbtn")&&(e[l].disable=!0,e[l].style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",e[l].addEventListener("click",(function(e){e.preventDefault()}),!1))}else executeAction("get-limit-lineups",null,{identifier:e}).then((e=>{for(let t=0;t<e.length;t++)if(e[t].user_lineups===e[t].limit_lineups){let n=document.querySelectorAll("button");for(let l=0;l<n.length;l++)(n[l].id===e[t].table_round_id+"btn"||n[l].id===e[t].table_round_id+"Grátisbtn"||n[l].id===e[t].table_round_id+"Pagasbtn")&&(n[l].disable=!0,n[l].style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",n[l].addEventListener("click",(function(e){e.preventDefault()}),!1))}})).catch((e=>console.log(e)))})).catch((e=>console.log(e)))}else if(window.location.href.includes("/fantasy-tables-rules")){let e=document.getElementById("logged_user").innerHTML,t=getObjectId();executeAction("get-subs",null,{identifier:t}).then((t=>{let n=new Date,l=t[0].finish_date,o=new Date(l);if(t[0].subs===t[0].max_users||o<=n){let e=document.getElementById("btn_rules");e.disable=!0,e.style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",e.addEventListener("click",(function(e){e.preventDefault()}),!1)}else executeAction("get-limit-lineups",null,{identifier:e}).then((e=>{for(let t=0;t<e.length;t++)if(e[t].user_lineups===e[t].limit_lineups&&window.location.href.includes("/fantasy-tables-rules/"+e[t].table_round_id)){let e=document.getElementById("btn_rules");e.disable=!0,e.style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",e.addEventListener("click",(function(e){e.preventDefault()}),!1)}})).catch((e=>console.log(e)))})).catch((e=>console.log(e)))}else if(window.location.href.includes("/fantasy-minhas-ligas-visualizar")){let e=document.getElementById("logged_user").innerText,t=getObjectId();executeAction("get-subs",null,{identifier:t}).then((t=>{if(t[0].subs===t[0].max_users&&null!=t[0].max_users){let e=document.getElementsByTagName("button");e[0].disabled=!0,e[0].addEventListener("click",(function(e){e.preventDefault()}),!1)}else executeAction("get-limit-lineups",null,{identifier:e}).then((e=>{for(let t=0;t<e.length;t++)if(e[t].user_lineups===e[t].limit_lineups&&window.location.href.includes("/fantasy-minhas-ligas-visualizar/"+e[t].table_round_id)){let e=document.getElementsByTagName("button");e[0].disabled=!0,e[0].addEventListener("click",(function(e){e.preventDefault()}),!1)}})).catch((e=>console.log(e)))})).catch((e=>console.log(e)))}}()})();/*! Mon Jul 04 2022 13:26:53 GMT+0000 (Coordinated Universal Time) !*/
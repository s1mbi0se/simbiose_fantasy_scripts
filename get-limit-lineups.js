!function(){let e=document.getElementById("logged_user").innerText;executeAction("get-limit-lineups",null,{identifier:e}).then((e=>{for(let t=0;t<e.length;t++)if(e[t].user_lineups===e[t].limit_lineups&&window.location.href==="http://fantasy.localhost:3004/fantasy-lineup/"+e[t].table_round_id){let e=document.getElementById("btn_save");e.setAttribute("disabled","disabled"),e.style.cssText="border: 1px solid #999999;color: #666666;background-color: #cccccc;cursor: not-allowed",e.addEventListener("click",(function(e){e.preventDefault()}),!1);let t=document.getElementsByClassName("playerContainer");for(let e=0;e<t.length;e++)t[e].setAttribute("disabled","disabled"),t[e].style.cssText="cursor: not-allowed",t[e].addEventListener("click",(function(e){e.preventDefault()}),!1);let n=document.getElementsByClassName("reservationsContainer");for(let e=0;e<t.length;e++)n[e].setAttribute("disabled","disabled"),n[e].style.cssText="cursor: not-allowed",n[e].addEventListener("click",(function(e){e.preventDefault()}),!1)}})).catch((e=>console.log(e)))}(),function(){if(window.location.href.includes("/fantasy-minhas-ligas-visualizar")){let e=document.getElementById("logged_user").innerText;executeAction("get-limit-lineups",null,{identifier:e}).then((e=>{for(let t=0;t<e.length;t++)if(e[t].user_lineups===e[t].limit_lineups&&window.location.href==="http://fantasy.localhost:3004/fantasy-minhas-ligas-visualizar/"+e[t].table_round_id){let e=document.getElementsByTagName("button");e[0].disabled=!0,e[0].addEventListener("click",(function(e){e.preventDefault()}),!1)}})).catch((e=>console.log(e)))}}();/*! Mon Jul 18 2022 19:03:43 GMT+0000 (Coordinated Universal Time) !*/
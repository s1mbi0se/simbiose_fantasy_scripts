(()=>{async function n(){const n=components.table_rounds__round_id.value;if(n){const t=await executeAction("query-select-to-min-date",null,{current_round:n}),_=new Date(t[0].round__start_round),o=new Date(_),a=e(t[0].round__finish_round),u=e(t[0].round__finish_round);console.log(a,u),components.table_rules__publish_date.maxDate=o,components.table_rules__award_date.minDate=a}else components.table_rules__publish_date.value="",components.table_rules__award_date.value=""}function e(n){var e=n.split("T")[0],t=e.split("/");return t[0]+"/"+(parseInt(t[1])+1)+"/"+t[2]}components.table_rounds__round_id.onChange((()=>{n()})),n()})();/*! Mon Jul 18 2022 14:46:37 GMT+0000 (Coordinated Universal Time) !*/
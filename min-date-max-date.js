(()=>{function n(n){var e=n.split("T")[0],t=e.split("/");return t[0]+"/"+(parseInt(t[1])+1)+"/"+t[2]}components.table_rounds__round_id.onChange((()=>{!async function(){const e=components.table_rounds__round_id.value,t=await executeAction("query-select-to-min-date",null,{current_round:e}),_=new Date(t[0].round__start_round),o=new Date(_),a=n(t[0].round__finish_round);n(t[0].round__finish_round),components.table_rules__publish_date.maxDate=o,components.table_rules__award_date.minDate=a}()}))})();/*! Mon Jul 11 2022 11:28:19 GMT+0000 (Coordinated Universal Time) !*/
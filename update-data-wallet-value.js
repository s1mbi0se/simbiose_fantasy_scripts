onAction("fantasy-admin-add-users-wallet","createAndRedirect",(function(e){let t=parseInt(e.wallet__value_add)+parseInt(e.wallet__value),l=parseInt(e.wallet__wallet_id),a=window.location.href;a=a.toString(),a=a.split("/"),a=a[a.length-1].replace(/[^0-9]/g,"").toString(),executeAction("update-wallet-value",null,{identifier:a,sum:t,wallet_id:l}).then((e=>{})).catch((e=>console.log(e)))}));/*! Mon Jul 11 2022 11:58:23 GMT+0000 (Coordinated Universal Time) !*/
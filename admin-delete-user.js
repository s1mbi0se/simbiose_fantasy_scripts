components.fantasy_admin_list_users.onVoidClick((e=>{var n;n=e,openModal({container:"fantasy-admin-modal-delete-user",identifier:null,viewMode:"center"}),setTimeout((()=>{components.deleteAccount.onClick((async()=>{await executeAction("fantasy-action-delete-user",null,{identifier:n[1].value}),await executeAction("integration-delete-user-api",null,{user_id:n[2].value}),window.location.replace("/fantasy-admin-list-users")})),components?.closedModal?.onClick((()=>closeModal()))}),1e3)}),"deleteUser");/*! Thu Jul 21 2022 13:53:05 GMT+0000 (Coordinated Universal Time) !*/
(()=>{components.modalExcluir.onClick((async()=>{await openModal({container:"fantasy-modal-excluir-conta",identifier:null,viewMode:"center"})}));const e=getUserData();components?.excluirConta?.onClick((async()=>{await executeAction("fantasy-actions-delete-user",null),await executeAction("fantasy-integration-delete-user",null,{current_user:e.id}),logOut()})),components?.fecharModal?.onClick((()=>closeModal()))})();/*! Mon Jul 11 2022 11:58:23 GMT+0000 (Coordinated Universal Time) !*/
(()=>{function e(){components.user_fantasy__address.value="",components.user_fantasy__city.value="",components.user_fantasy__state.value="",components.user_fantasy__address_num.value="",components.user_fantasy__complement.value=""}components.user_fantasy__cep.onChange((()=>{let s=components.user_fantasy__cep.value;s&&fetch(`https://viacep.com.br/ws/${s}/json/`).then((s=>{s.json().then((s=>{"true"!==s.erro?(components.user_fantasy__address.value=s.logradouro,components.user_fantasy__city.value=s.localidade,components.user_fantasy__state.value=s.uf,components.user_fantasy__address_num.value="",components.user_fantasy__complement.value=""):e()}))})).catch((e=>{showToast("error","Tente Novamente")})),e()}))})();/*! Tue Jul 19 2022 22:11:51 GMT+0000 (Coordinated Universal Time) !*/
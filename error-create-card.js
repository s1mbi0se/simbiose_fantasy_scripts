(()=>{function r(){components.customer_credit_card__card_address.value="",components.customer_credit_card__card_address_number.value="",components.customer_credit_card__card_complement.value=""}onAction("fantasy-register-credit-card","createAndRedirect",(async r=>{try{await executeAction("fantasy-integration-create-credit-card",null,{customer_credit_card__card_exp_month:r.customer_credit_card__card_exp_month,customer_credit_card__card_exp_year:r.customer_credit_card__card_exp_year,customer_credit_card__card_display_number:r.customer_credit_card__card_display_number,customer_credit_card__card_cvv:r.customer_credit_card__card_cvv,user_fantasy__stripe_user:r.user_fantasy__stripe_user,customer_credit_card__card_stripe:r.customer_credit_card__card_stripe,customer_credit_card__user_fantasy_id:r.customer_credit_card__user_fantasy_id})}catch(r){if(console.log({e:r}),"incorrect_number"===r.response.data.errors.before.error.code)throw components.customer_credit_card__card_display_number.hasError=!0,new Error("Número do cartão de crédito incorreto")}})),components.customer_credit_card__card_cep.onChange((()=>{let e=components.customer_credit_card__card_cep.value;e&&fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{"true"!==e.erro?(components.customer_credit_card__card_address.value=e.logradouro,components.customer_credit_card__card_address_number.value="",components.customer_credit_card__card_complement.value=""):r()}))})).catch((r=>{showToast("error","Tente Novamente")})),r()}))})();/*! Mon Jul 18 2022 19:03:43 GMT+0000 (Coordinated Universal Time) !*/
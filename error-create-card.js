(()=>{function e(){components.customer_credit_card__card_address.value="",components.customer_credit_card__card_address_number.value="",components.customer_credit_card__card_complement.value=""}onAction("fantasy-register-credit-card","createAndRedirect",(async e=>{try{await executeAction("fantasy-integration-create-credit-card",null,{customer_credit_card__card_exp_month:e.customer_credit_card__card_exp_month,customer_credit_card__card_exp_year:e.customer_credit_card__card_exp_year,customer_credit_card__card_display_number:e.customer_credit_card__card_display_number,customer_credit_card__card_cvv:e.customer_credit_card__card_cvv,user_fantasy__stripe_user:e.user_fantasy__stripe_user,customer_credit_card__card_stripe:e.customer_credit_card__card_stripe,customer_credit_card__user_fantasy_id:e.customer_credit_card__user_fantasy_id})}catch(e){if(console.log({e}),"incorrect_number"===e.response.data.errors.before.error.code)throw components.customer_credit_card__card_display_number.hasError=!0,new Error("Número do cartão de crédito incorreto")}})),components.customer_credit_card__card_cep.onChange((()=>{let r=components.customer_credit_card__card_cep.value;r&&fetch(`https://viacep.com.br/ws/${r}/json/`).then((r=>{r.json().then((r=>{"true"!==r.erro?(components.customer_credit_card__card_address.value=r.logradouro,components.customer_credit_card__card_address_number.value="",components.customer_credit_card__card_complement.value=""):e()}))})).catch((e=>{showToast("error","Tente Novamente")})),e()})),components.customer_credit_card__card_display_number.onChange((()=>{if(16==components.customer_credit_card__card_display_number.value.length){let e=components.customer_credit_card__card_display_number.value.slice(-4);components.customer_credit_card__card_last_digits.value=e}else components.customer_credit_card__card_last_digits.value=""})),components.customer_credit_card__card_exp_month_year.onChange((()=>{if(6===components.customer_credit_card__card_exp_month_year.value.length){let e=components.customer_credit_card__card_exp_month_year.value.substring(0,2),r=components.customer_credit_card__card_exp_month_year.value.substring(2,6);components.customer_credit_card__card_exp_month.value=e,components.customer_credit_card__card_exp_year.value=r}else components.customer_credit_card__card_exp_month_year.value="",components.customer_credit_card__card_exp_month.value="",components.customer_credit_card__card_exp_year.value="",showToast("error","Data de vencimento inválida!")}))})();/*! Fri Jul 22 2022 19:20:55 GMT+0000 (Coordinated Universal Time) !*/
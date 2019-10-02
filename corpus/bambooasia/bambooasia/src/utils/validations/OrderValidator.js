import Validator from 'validatorjs'

export class OrderValidator {
  static summation(list){
    let total=0;
    const listLength=list.length;
    for(let i=0;i<=listLength;i++){
      if(i===listLength){
        if(total<1){return undefined}
        return total
      };
      total+=list[i].qty || 0;
    }
  }
  // static hry checkErrors(errors){
  //   let passed=false;
  //   for(let i=0;i<=errorsLength;i++){
  //     if(i==errorsLength){return passed};
  //     passed=errors[i] && passed;
  //   }
  // }
  static doValidation(values) {
    const rules = {
      price: 'required',
      qty: 'numeric|min:1',
      protein:'numeric|min:' + JSON.stringify(values.config.headcount[0].qty),
      base:'numeric|min:' + JSON.stringify(values.config.headcount[0].qty),
      toppings:'required'
    };

    const messages = {
      required: ':attribute are required',
      numeric: 'Please choose at least one'
    };

    const summation=this.summation;
    const configKeys=Object.keys(values.config);
    const configKeysLength=configKeys.length;
    for(let i=0;i<=configKeysLength;i++){
      if(i===configKeysLength){
        const validation = new Validator(values, rules, messages);
        validation.setAttributeNames({ date: 'delivery date' });
        // console.log('v:',validation)
        return validation
      }
      const item=configKeys[i];
      const cItem=values.config[item];
      if(typeof(cItem)!==typeof({})){continue};
      const amount=summation(cItem);
      values[item]=amount;
    }
  }
}

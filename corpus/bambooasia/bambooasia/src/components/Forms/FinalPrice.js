import { connect, getIn } from 'formik'
import React, { Component } from 'react'

// This component renders an error message if a field has
// an error and it's already been touched.
class FinalPrice extends Component {
  constructor(props) {
    super(props)

    this.state = {
     price: getIn(this.props.formik.values, 'price'),
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.formik !== this.props.formik) {
  //     this.props.onChange(this.props.formik, prevProps.formik);
  //   }
  // }

  render() {
    // All FormikProps available on props.formik!
    const price = getIn(this.props.formik.values, 'price');

    let priceResult = price;
    const { defaultProteinPrice, defaultVeggiesPrice, protein, veggies } = this.props.formik.values;

    const proteinCost = protein.reduce((accumulator, item) => accumulator + parseFloat(item.qty * item.price), 0)
    if(proteinCost > defaultProteinPrice) {
      priceResult += (proteinCost - defaultProteinPrice);
    }

    const veggiesCost = veggies.reduce((accumulator, item) => accumulator + parseFloat(item.qty * item.price), 0)
    if(veggiesCost > defaultVeggiesPrice) {
      priceResult += (veggiesCost - defaultVeggiesPrice);
    }

    if(price !== priceResult) {
      this.props.onChange(priceResult)
    }

    return priceResult.toFixed(2);
  }
}

export default connect(FinalPrice);

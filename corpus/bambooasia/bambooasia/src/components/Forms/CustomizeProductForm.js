import styled from 'styled-components'
import { Checkbox, CheckboxGroup, RadioButtonGroup, SubmitRow, RadioButton } from '../Forms'
import React, { Component } from 'react'
import { Field, Form, Formik } from 'formik'
import { inject, observer } from 'mobx-react'
import QtySelector from '../QtySelector'
import { CommerceButton, CommerceButtonSecondary } from '../Buttons'
import { OrderValidator } from '../../utils/validations/OrderValidator'
import { observable } from 'mobx'
import { get } from 'lodash'

styled.insert=`span{color:blue}`

const ProductName = styled.span`
  text-transform: uppercase;
`
const ProductNameContainer = styled.h3`

`
const ProductDescriptionContainer = styled.div`
  margin: 1em 0 1.5em;
`
const ProductAttributeRow = styled.div`
  margin: 0 0 1em 0;
`
const CommentRow = styled.div`
  margin: 0 0 1em 0;

  textarea {
    width: 100%;
    height: 100px;
    padding: .5em 1em;
    font-size: 16px;
    line-height: 170%;
  }
`
const PriceRow = styled.div`
  text-align: right;
  padding: .5em 0;
`
const QuantitySelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.4rem;
`

const ItemLabel = styled.div`
  margin-left: 14px;
`

const Feedback = styled.div`
  margin-top: .1em;
  padding: .5em;
  padding-left: 0;
  font-size: .9em;
  line-height: 130%;
  color: ${props => props.theme.colors.secondary};
`

const SubmitGroup = styled.div`
.ccm-required{color:orange;}
  select {
    display: inline-block;
    padding: .5em 1.4em .5em .8em;
    width: 50px;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: 2px solid #f26722;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    background-color: #f26722;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;

    /* Hide arrow icon in IE browsers */
    &::-ms-expand {
        display: none;
    }

    &:focus {
        /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: white;
        outline: none;
    }

    /* Set options to normal weight */
    & option {
        font-weight:normal;
    }
  }
`

const ValidIcon = styled.i`
  margin-left: .5em;
  font-size: 1.5em;
  position: relative;
  top: 3px;
  color: mediumseagreen;
`

const InvalidIcon = styled.i`
  margin-left: .5em;
  font-size: 1.5em;
  position: relative;
  top: 3px;
  color: ${props => props.theme.colors.secondary};
`

const PerItemIncrease = styled.span`
  margin-left: .5em;
  color: ${props => props.theme.colors.tertiary};
`

const requiredFieldStyle = {color:"#3975ad"};

const dynamicStyles={
  quantityCheck:{
    valid:{color:"rgb(88, 88, 90)"},
    invalid:{color:"red"}
  }
}

const errorCheck = (errors) =>{
  const keys=Object.keys(errors);
  const errorsLength=keys.length;
  let hasErrors=false;
  for(let i=0;i<=errorsLength;i++){
    const cError=errors[keys[i]]
    if(i==errorsLength){return hasErrors};
    if(cError){hasErrors=true};
  }
}

const calculateTotalPrice = (values) => {
  let priceResult = values.basePrice;

  const { defaultProteinPrice, defaultVeggiesPrice, config: { protein }, config: { veggies }, config: { base } } = values;

  const proteinCost = protein.reduce((accumulator, item) => accumulator + parseFloat(item.qty * item.price), 0)
  if(proteinCost > defaultProteinPrice) {
    priceResult += (proteinCost - defaultProteinPrice);
  }

  const veggiesCost = veggies.reduce((accumulator, item) => accumulator + parseFloat(item.qty * item.price), 0)
  if(veggiesCost > defaultVeggiesPrice) {
    priceResult += (veggiesCost - defaultVeggiesPrice);
  }

  return priceResult;
}

@inject("ui")
@observer
class ChildCustomizeProductForm extends Component {
  constructor(props) {
    super(props);

    // For some reason can't put this in state for the form so doing it
    // manually with our own mobx observable. By using an observable and the
    // @observer decoration above the component it automagically reacts to changes
    this.perItemIncreases = observable([]);

    const totalPrice = calculateTotalPrice(this.props.values);
    this.props.setFieldValue('price', totalPrice);
  }

  onToppingsChanged = (id, value) => {
    this.props.setFieldValue(id, value);
  }

  onCateringQtyChange = (id, item, qty) => {
    const existingValue = get(this.props.values, id);
    let existingIndex = -1;
    if (existingValue) {
      existingIndex = existingValue.findIndex(value => value.slug === item.slug)
    }

    item.qty = qty;
    existingValue.push(item);

    const totalPrice = calculateTotalPrice(this.props.values);

    // todo: need to wire per item increases into first load of form also
    // may take some refactoring because it's simple logic for now based on last item added

    // simple way to show the extra price per item
    // is to keep track of the last item that increased the price
    const { perItemIncreases } = this;

    if (totalPrice > this.props.values.basePrice) {
      // save this last clicked in our cache of items to display per item increase price
      const increasesCountForItem = perItemIncreases.filter(inc => inc.slug === item.slug).length;
      if( qty === 0 ) {
        this.perItemIncreases.replace(perItemIncreases.filter(inc => inc.slug !== item.slug));
      }
      else if (increasesCountForItem < qty) {
        this.perItemIncreases.push({
          slug: item.slug,
          price: item.price,
        })
      } else {
        // remove the increase
        this.perItemIncreases.splice(perItemIncreases.findIndex(inc => inc.slug === item.slug), 1);
      }
    }
    else {
      this.perItemIncreases.clear()
    }
    this.props.setFieldValue(id, existingValue);
    this.props.setFieldValue('price', totalPrice);
  }

  onVeggiesChanged = (id, value) => {
    this.props.setFieldValue(id, value);
  }

  onHeadcountQtyChanged = (id,qty,config) => {
    config.headcount[0].qty=qty;
    this.props.setFieldValue(id, qty);
  }

  onQtyChanged = (id, item, qty) => {
    const existingValue = get(this.props.values, id);
    let existingIndex = -1;
    if (existingValue) {
      existingIndex = existingValue.findIndex(value => value.slug === item.slug)
    }

    if(existingIndex === -1) {
      // skip adding item if 0 qty
      if (qty > 0) {
        item.qty = qty;
        existingValue.push(item);
      }
    }
    else {
      if (qty > 0) {
        existingValue[existingIndex].qty = qty;
      } else {
        // remove from the values array if 0 qty
        existingValue.splice(existingIndex, 1);
      }
    }

    const totalPrice = calculateTotalPrice(this.props.values);

    // todo: need to wire per item increases into first load of form also
    // may take some refactoring because it's simple logic for now based on last item added

    // simple way to show the extra price per item
    // is to keep track of the last item that increased the price
    const { perItemIncreases } = this;

    if (totalPrice > this.props.values.basePrice) {
      // save this last clicked in our cache of items to display per item increase price
      const increasesCountForItem = perItemIncreases.filter(inc => inc.slug === item.slug).length;
      if( qty === 0 ) {
        this.perItemIncreases.replace(perItemIncreases.filter(inc => inc.slug !== item.slug));
      }
      else if (increasesCountForItem < qty) {
        this.perItemIncreases.push({
          slug: item.slug,
          price: item.price,
        })
      } else {
        // remove the increase
        this.perItemIncreases.splice(perItemIncreases.findIndex(inc => inc.slug === item.slug), 1);
      }
    }
    else {
      this.perItemIncreases.clear()
    }
    this.props.setFieldValue(id, existingValue);
    this.props.setFieldValue('price', totalPrice);
  }

  render() {
    const {
      values,
      touched,
      errors,
      product,
      product: { config },
      ui
    } = this.props;
    const { perItemIncreases } = this;

    return (
      <Form>
        <div>
          <ProductNameContainer>
            <ProductName>{product.name}</ProductName>
          </ProductNameContainer>
          <ProductDescriptionContainer>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description.childMarkdownRemark.html,
              }}
            />
          </ProductDescriptionContainer>

          { config.headcount ?
            <ProductAttributeRow>
              <div>
                <strong>Headcount</strong>
              </div>
              { config.headcount.map((headcount, idx) => (
                <QuantitySelectorContainer key={headcount.slug}>
                  <QtySelector initialQty={headcount.qty ? headcount.qty : null} setQty={(qty) => this.onHeadcountQtyChanged('config.headcount', qty, config)}/>
                  <ItemLabel>{headcount.label}</ItemLabel>
                  <PerItemIncrease>
                  {
                    values.config.headcount > values.config.initialHeadcount ? ` + ${headcount.price} per additional person` : null
                  }
                  </PerItemIncrease>
                </QuantitySelectorContainer>
              ))}
            </ProductAttributeRow>
          : null }

          { config.protein ?
            <ProductAttributeRow>
              <div>
                <strong>Protein</strong>
              </div>
              <p><em>Total protein items must equal headcount or greater. Additional protein is individually priced.</em><br/><strong>Total Protein: <span style={ OrderValidator.summation(config.protein) < config.headcount[0].qty ? dynamicStyles.quantityCheck.invalid : dynamicStyles.quantityCheck.valid}>{OrderValidator.summation(config.protein)}</span></strong></p>
              { config.protein.map((protein, idx) => (
                <QuantitySelectorContainer key={protein.slug}>
                  <QtySelector initialQty={protein.qty ? protein.qty : null} setQty={(qty) => this.onCateringQtyChange('config.protein', protein, qty)}/>
                  <ItemLabel>{protein.label}</ItemLabel>
                  {
                    perItemIncreases.find(item => item.slug === protein.slug) ?
                    <PerItemIncrease>
                      + {perItemIncreases.reduce((accumulator, item) => {
                        if (item.slug === protein.slug) {
                          return accumulator + parseFloat(item.price);
                        }
                        return accumulator;
                      }, 0).toFixed(2)} extra
                    </PerItemIncrease>
                    : null
                  }
                </QuantitySelectorContainer>
              ))}
              <span style={dynamicStyles.quantityCheck.invalid}>{errors.protein || null}</span>
            </ProductAttributeRow>

          : null }

          { config.base ?
            <ProductAttributeRow>
              <div>
                <strong>Base</strong>
              </div>
              <p><em>Total base items must equal headcount or greater. Additional base is individually priced.</em><br/><strong>Total base: <span style={ OrderValidator.summation(config.base) < config.headcount[0].qty ? dynamicStyles.quantityCheck.invalid : dynamicStyles.quantityCheck.valid}>{OrderValidator.summation(config.base)}</span></strong></p>
              { config.base.map((base, idx) => (
                <QuantitySelectorContainer key={base.slug}>
                  <QtySelector initialQty={base.qty ? base.qty : null} setQty={(qty) => this.onCateringQtyChange('config.base', base, qty)}/>
                  <ItemLabel>{base.label}</ItemLabel>
                  {
                    perItemIncreases.find(item => item.slug === base.slug) ?
                    <PerItemIncrease>
                      + {perItemIncreases.reduce((accumulator, item) => {
                        if (item.slug === base.slug) {
                          return accumulator + parseFloat(item.price);
                        }
                        return accumulator;
                      }, 0).toFixed(2)} extra
                    </PerItemIncrease>
                    : null
                  }
                </QuantitySelectorContainer>
              ))}
              <span style={dynamicStyles.quantityCheck.invalid}>{errors.base || null}</span>
            </ProductAttributeRow>
          : null }

          { config.veggies ?
            <ProductAttributeRow>
              <div>
                <strong>Japan Catering Veggies</strong>
              </div>
              <CheckboxGroup
                id="config.veggies"
                value={values.config.veggies}
                error={errors.veggies}
                touched={touched.veggies}
                onChange={this.onVeggiesChanged}
              >
                {config.veggies.map((veggies, idx) => (
                  <Field
                    key={veggies.slug}
                    component={Checkbox}
                    name={veggies.label}
                    id={veggies.slug}
                    label={veggies.label}
                  />
                ))}
              </CheckboxGroup>
            </ProductAttributeRow>
          : null }

          { config.sauces ?
            <ProductAttributeRow>
              <div>
                <strong>Sauces</strong>
              </div>
              <RadioButtonGroup
                name="config.sauces"
                value={values.config.sauces}
                error={errors.sauces}
                touched={touched.sauces}
              >
                {config.sauces.map((item, idx) => (
                  <Field
                    name="config.sauces"
                    key={item.slug}
                    id={item.slug}
                    component={RadioButton}
                    label={item.label}
                  />
                ))}
              </RadioButtonGroup>
            </ProductAttributeRow>
          : null }

          { config.toppings ?
            <ProductAttributeRow>
              <div>
                <strong>Toppings</strong>
              </div>
              <CheckboxGroup
                id="config.toppings"
                value={values.config.toppings}
                error={errors.toppings}
                touched={touched.toppings}
                onChange={this.onToppingsChanged}
              >
                {config.toppings.map((toppings, idx) => (
                  <Field
                    key={toppings.slug}
                    component={Checkbox}
                    name={toppings.label}
                    id={toppings.slug}
                    label={toppings.label}
                  />
                ))}
              </CheckboxGroup>
            </ProductAttributeRow>
          : null }

        </div>
        <CommentRow>
          <div>
            <strong>Special Instructions</strong>
          </div>
          <Field
            component="textarea"
            name="config.comments"
            id="config.comments"
            value={config.comments}
          />
        </CommentRow>
        <PriceRow>
          <strong>Price ${values.price.toFixed(2)}</strong>
        </PriceRow>
        <SubmitRow>
          <div><CommerceButtonSecondary onClick={this.resetForm}>Reset</CommerceButtonSecondary></div>
          <SubmitGroup>
            <Field className="select-css" component="select" name="qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Field>
            <CommerceButton type="submit" disabled={!errorCheck(errors)} onClick={this.submitForm}>{ ui.customizeButtonText }</CommerceButton>
          </SubmitGroup>
        </SubmitRow>
      </Form>
    )
  }
}

const addPricesReducer = (accumulator, item) => {
  if (item.qty && item.qty > 0) {
    return accumulator + (item.qty * parseFloat(item.price));
  }
  return accumulator;
}
const defaultFilter = (item) => item.qty && item.qty > 0;

@inject("order")
@inject("ui")
@inject("cart")
// todo: wire this up to work with custom configuration passed in also
class CustomizeProductForm extends Component {
  render() {
    // merge in our product config and custom config
    const { product, product: { config } } = this.props;
    // product.config = merge(this.props.product.config, this.props.product.customConfig);

    const defaultProteinPrice = config.protein.reduce(addPricesReducer, 0)
    const defaultVeggiesPrice = config.base.reduce(addPricesReducer, 0)
    const initialBase = config.base.filter(defaultFilter) || [];
    const initialHeadcount = config.headcount.filter(defaultFilter) || [];
    const initialProtein = config.protein.filter(defaultFilter) || [];
    const initialVeggies = config.base.filter(defaultFilter) || [];
    const initialSauces = config.sauces.filter(defaultFilter) || [];
    const initialToppings = config.toppings.filter(defaultFilter) || [];

    // let initialBase = config.base.filter(defaultFilter);
    // if (initialBase.length) {
    //   initialBase = initialBase[0].slug;
    // } else {
    //   initialBase = '';
    // }

    return (
      <Formik
        initialValues={{
          config: {
            headcount:initialHeadcount,
            initialHeadcount:initialHeadcount[0].qty,
            protein: initialProtein,
            veggies: initialVeggies,
            toppings: initialToppings,
            sauces: initialSauces,
            base: initialBase,
            comments: config.comments,
            validForm:false
          },
          price: product.price,
          basePrice: product.price,
          catering: product.catering,
          defaultProteinPrice,
          defaultVeggiesPrice,
          qty: 1,
        }}
        isInitialValid={(props) => {
          // alert(JSON.stringify(OrderValidator.valid))
          let validation = null;
          validation = OrderValidator.doValidation(props.initialValues)
          return validation.passes();
        }}
        validate={values => {
          const errors = {};
          let validation = null;
          validation = OrderValidator.doValidation(values)
          if(validation.fails() && values.catering) {
            errors.qty = validation.errors.first('qty');
            errors.price = validation.errors.first('price');
            errors.protein = validation.errors.first('protein');
            errors.base = validation.errors.first('base');
          }
          console.log('errors:',errors)
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // todo: save to mobx order store w custom configuration
          const { product, cart, ui } = this.props
          const payload = { ...product, qty: values.qty, price: values.price }
          cart.addToCart(payload, values)
          ui.closeCustomizeModal();
          ui.openCartModal({
            message: 'Sucessfully added to cart',
          })
        }}
        render={props => <ChildCustomizeProductForm {...props} {...this.props} product={product} />}
      />
    );
  }
}

export default CustomizeProductForm

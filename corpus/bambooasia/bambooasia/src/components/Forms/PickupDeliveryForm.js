import styled from 'styled-components'
import { RadioButton, RadioButtonGroup } from '../Forms'
import React, { Component } from 'react'
import { startingDate } from '../../utils/util'
import { Field, Form, Formik } from 'formik'
import DatePicker from 'react-datepicker/es'
import { PickupValidator, DeliveryValidator } from '../../utils/validations/PickupDeliveryValidator'
import { inject } from 'mobx-react'
import {
  ORDER_TYPE_TIMING_NOW,
  ORDER_TYPE_TIMING_DATE,
  ORDER_TYPE_DELIVERY,
} from '../../utils/constants'
import LocationSearchInput from '../LocationSearchInput'

const Radio = styled(RadioButtonGroup)`
  margin: 1em 0;
  max-width: 200px;
  font-size: 1em;
`

const AddressSearchInput = styled(LocationSearchInput)`
  margin-top: 2em;
  width: 250px;
  margin-bottom: 1em;
  height: 30px;
  font-size: 1em;
`

const DateWrapper = styled.div`
  height: 30px;
  opacity: ${(props) => props.showDisabled ? '0.5': '1'};
`

const Feedback = styled.div`
  margin-top: .1em;
  padding: .5em;
  padding-left: 0;
  font-size: .9em;
  line-height: 130%;
  color: ${props => props.theme.colors.secondary};  
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

@inject("order")
class ChildForm extends Component {
  constructor(props) {
    super(props);
    this.datePickerRef = React.createRef();
  }

  componentDidMount() {
    this.props.validateForm(this.props.values);
  }

  componentWillReceiveProps(newProps) {
    if((newProps.submit !== this.props.submit) && newProps.submit === true) {
      this.props.submitForm();
    }
    if((newProps.reset !== this.props.reset) && newProps.reset === true) {
      this.props.order.clearFullfillment();
      setTimeout(() => {
        this.props.resetForm();
        this.props.validateForm(this.props.values);
      }, 100)
    }
  }

  onDate = date => {
    this.props.setFieldValue('date', date);
  }

  // set date back to default and run validations again
  onTimeChangedNow = (e) => {
    this.props.setFieldValue('date', startingDate());
    this.props.handleChange(e);
  }

  onTimeChangedDate = (e) => {
    this.datePickerRef.current.setOpen(this.dateSelected())
    this.props.handleChange(e);
  }

  onDateWrapperClick = (e) => {
    this.props.setFieldValue('timing', ORDER_TYPE_TIMING_DATE);
    if (this.dateSelected()) {
      this.datePickerRef.current.setOpen(this.dateSelected())
    }
  }

  dateSelected = () => {
    return this.props.values.timing !== ORDER_TYPE_TIMING_DATE
  }

  onAddressChange = (results) => {
    const { address, latLng } = results;
    if (address && latLng) {
      this.props.setFieldValue('address', address);
      this.props.setFieldValue('latLng', latLng);
    }
  }

  render() {
    const {
      values,
      touched,
      errors,
      isValid,
    } = this.props;

    return (
      <Form>
        <div>
          { this.props.type === ORDER_TYPE_DELIVERY ? <AddressSearchInput initialValue={this.props.values.address} onChange={this.onAddressChange} /> : null }

          <Radio
            id="timing"
            value={values.timing}
            error={errors.timing}
            touched={touched.timing}
          >
            <Field
              onChange={this.onTimeChangedNow}
              component={RadioButton}
              name="timing"
              id={ORDER_TYPE_TIMING_NOW}
              label={ `${this.props.type} Now` }
            />
            <Field
              onChange={this.onTimeChangedDate}
              component={RadioButton}
              name="timing"
              id={ORDER_TYPE_TIMING_DATE}
              label={ `${this.props.type} Later` }
            />
          </Radio>

          <DateWrapper onClick={this.onDateWrapperClick} showDisabled={this.dateSelected()}>
            <DatePicker
              ref={this.datePickerRef}
              selected={this.dateSelected() ? startingDate() : values.date}
              onChange={this.onDate}
              showTimeSelect
              autofocus
              readOnly={this.dateSelected()}
              minDate={new Date()}
              timeFormat="h:mm aa"
              dateFormat="iii MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            { isValid ? <ValidIcon className="fa fa-check-circle" /> : <InvalidIcon className="fa fa-times-circle" /> }
          </DateWrapper>
        </div>
        {errors.date && <Feedback>{errors.date}</Feedback>}
      </Form>
    )
  }
}

@inject("order")
@inject("ui")
class DeliveryForm extends Component {
  render() {
    const { order, ui, type } = this.props;
    // the formik tag doesn't run validation on mount so we do it manually here with isInitialValid
    return (
      <Formik
        initialValues={{
          timing: order.fullfillment.timing || ORDER_TYPE_TIMING_NOW,
          date: order.fullfillment.dateTime || startingDate(),
          address: order.fullfillment.address || false,
        }}
        isInitialValid={(props) => {
          let validation = null;
          if (type === ORDER_TYPE_DELIVERY) {
            validation = DeliveryValidator.doValidation(props.initialValues)
          } else {
            validation = PickupValidator.doValidation(props.initialValues)
          }
          return validation.passes();
        }}
        validate={values => {
          const errors = {};
          let validation = null;
          if (type === ORDER_TYPE_DELIVERY) {
            validation = DeliveryValidator.doValidation(values)
          } else {
            validation = PickupValidator.doValidation(values)
          }
          if(validation.fails()) {
            errors.date = validation.errors.first('date');
            this.props.setParentValid(false);
          }
          if(validation.passes()) {
            // formik doesn't have an on change handler for the entire form so we hook in here for now
            this.props.setParentValid(true);
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          if (type === ORDER_TYPE_DELIVERY) {
            order.setDelivery(values);
          } else {
            order.setPickup(values);
          }

          ui.closeDeliveryModal();
        }}
        render={props => <ChildForm {...props} {...this.props} />}
      />
    );
  }
}

export default DeliveryForm

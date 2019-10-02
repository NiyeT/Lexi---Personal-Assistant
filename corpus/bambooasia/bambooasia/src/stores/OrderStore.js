import { observable, computed, action, autorun, set, toJS } from 'mobx'
import { PickupValidator, DeliveryValidator } from '../utils/validations/PickupDeliveryValidator'
import { format } from 'date-fns'
import {
  ORDER_TYPE_PICKUP,
  ORDER_TYPE_DELIVERY,
  STORE_LOCATION_MONTGOMERY
} from '../utils/constants'
import store from 'store'

const initialState = {
  fullfillment: {
    type: null,
    storeLocation: '',
    address: null,
    latLng: null,
    dateTime: null,
    timing: null,
  }
}

// todo: fill in
class OrderStore {
  firstRun = true;

  @observable fullfillment = {
    ...initialState.fullfillment
  };

  constructor(rootStore) {
    this.rootStore = rootStore;

    autorun(() => {
      if(this.firstRun) {
        const existingOrder = store.get("order")
        if (existingOrder) {
          set(this.fullfillment, existingOrder.fullfillment);
          // date-fns lib wants it as an actual date object not string
          if (this.fullfillment.dateTime) {
            this.fullfillment.dateTime = new Date(this.fullfillment.dateTime);
          }
        }
        this.firstRun = false;
      }
    });
  }

  /**
   * Check that the order is valid
   * - Has proper delivery or pickup settings
   * - Has items in their order
   */
  @computed get canCheckout() {
    if (!this.fullfillment.type) {
      return false;
    }

    if(this.fullfillment.type === ORDER_TYPE_PICKUP) {
      return this.pickupValid
    } else if(this.fullfillment.type === ORDER_TYPE_DELIVERY) {
      return this.deliveryValid
    } else {
      console.error("Invalid fullfillment type: ", this.fullfillment.type)
    }
  }

  @computed get pickupValid() {
    const validation = PickupValidator.doValidation({
      date: this.dateTime
    });

    return validation.passes()
  }
  @computed get deliveryValid() {
    const validation = DeliveryValidator.doValidation({
      date: this.dateTime,
      address: this.address,
      latLng: this.latLng
    });

    return validation.passes()
  }

  @computed get orderTypeMessage() {
    if (this.fullfillment.type === ORDER_TYPE_PICKUP) {
      return `Pickup ${format(new Date(this.fullfillment.dateTime), 'iii LLL d, y h:mmaa')}`;
    } else if (this.fullfillment.type === ORDER_TYPE_DELIVERY) {
      return `Delivery ${format(new Date(this.fullfillment.dateTime), 'iii LLL d, y h:mmaa')}`;
    }
  }

  @action
  setPickup(payload) {
    if (payload) {
      this.fullfillment.type = ORDER_TYPE_PICKUP;
      this.fullfillment.timing = payload.timing;
      this.fullfillment.storeLocation = STORE_LOCATION_MONTGOMERY;
      this.fullfillment.dateTime = payload.date;

      // todo: move this to an auto reaction not working at first try
      store.set('order', { fullfillment: toJS(this.fullfillment) })
    } else {
      console.error('Empty payload sent to order setPickup')
    }
  }

  @action
  setDelivery(payload) {
    if (payload) {
      this.fullfillment.type = ORDER_TYPE_DELIVERY;
      this.fullfillment.timing = payload.timing;
      this.fullfillment.address = payload.address;
      this.fullfillment.latLng = payload.latLng;
      this.fullfillment.storeLocation = STORE_LOCATION_MONTGOMERY;
      this.fullfillment.dateTime = payload.date;

      // todo: move this to an auto reaction not working at first try
      store.set('order', { fullfillment: toJS(this.fullfillment) })
    } else {
      console.error('Empty payload sent to order setDelivery')
    }
  }

  @action
  clearFullfillment() {
    const { fullfillment } = initialState;
    this.fullfillment = {
      ...fullfillment
    }
    store.set('order', { fullfillment })
  }
}

export default OrderStore;

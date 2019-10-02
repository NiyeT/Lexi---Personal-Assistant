import CartStore from './CartStore'
import UIStore from './UIStore'
import AuthStore from './AuthStore'
import OrderStore from './OrderStore'

class RootStore {
  constructor() {
    this.cart = new CartStore(this)
    this.ui = new UIStore(this)
    this.auth = new AuthStore(this)
    this.order = new OrderStore(this)
  }
}

export default RootStore;

import { observable, action, computed, reaction } from 'mobx'

class UIStore {
  @observable cartModalVisible = false;
  cartMessage = '';

  @observable notifyModalVisible = false;
  notifyMessage = '';

  @observable deliveryModalVisible = false;

  @observable customizeModalVisible = false;
  customizeProduct = null;
  customizeButtonText = null;

  constructor(rootStore) {
    this.rootStore = rootStore;

    // automatically reset messages when closing modals
    reaction(
      () => this.cartModalIsVisible,
      visible => !visible ? this.clearCartMessage() : null
    );

    reaction(
      () => this.notifyModalIsVisible,
      visible => !visible ? this.clearNotifyMessage() : null
    );
  }

  @computed get cartModalIsVisible() {
    return this.cartModalVisible
  }

  @computed get notifyModalIsVisible() {
    return this.notifyModalVisible
  }

  @computed get deliveryModalIsVisible() {
    return this.deliveryModalVisible
  }

  @computed get customizeModalIsVisible() {
    return this.customizeModalVisible
  }

  @action
  openCartModal(payload) {
    if (payload && payload.message) {
      this.cartMessage = payload.message;
    }
    this.cartModalVisible = true;
  }

  // todo: add passing custom order config
  // with defaults and available options
  @action
  openCustomizeModal(product, mode) {
    if (!product) {
      console.error("No product passed to customize modal")
    }
    this.customizeProduct = product;
    this.customizeButtonText = mode === 'edit' ? 'Update Item' : 'Add to Cart';
    this.customizeModalVisible = true;
  }

  @action
  closeCartModal() {
    this.cartModalVisible = false;
  }

  @action
  closeCustomizeModal() {
    this.customizeModalVisible = false;
  }

  @action
  openNotifyModal(payload) {
    if (payload && payload.message) {
      this.notifyMessage = payload.message;
    }
    this.notifyModalVisible = true;
  }

  @action
  closeNotifyModal() {
    this.notifyModalVisible = false;
  }

  @action
  openDeliveryModal(payload) {
    this.deliveryModalVisible = true;
  }

  @action
  closeDeliveryModal() {
    this.deliveryModalVisible = false;
  }

  @action
  clearNotifyMessage() {
    this.notifyMessage = '';
  }

  @action
  clearCustomizeProduct() {
    this.customizeProduct = null;
  }

  @action
  clearCartMessage() {
    this.cartMessage = '';
  }
}

export default UIStore;

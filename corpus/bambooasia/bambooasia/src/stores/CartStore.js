import store from 'store'
import { computed, observable, autorun, set, toJS, action, reaction } from 'mobx'
import hash from 'object-hash'

// TODO: need a way to clear/refresh this when data changes in the backend,
// i.e. product no longer available or price changed.

class CartStore {
  @observable products = [];
  firstRun = true;

  constructor(rootStore) {
    this.rootStore = rootStore;

    autorun(() => {
      if(this.firstRun) {
        const existingCart = store.get("cart")
        if (existingCart) {
          set(this.products, existingCart.products);
        }
        this.firstRun = false;
      }
    });

    reaction(
      () => this.products.map(product => product),
      products => store.set('cart', { products: toJS(this.products) })
    );
  }

  @computed get orderTotal() {
    if(this.products && this.products.length ) {
      return this.products.reduce((accumulator, product) => {
        if(product.price && product.qty) {
          return (parseFloat(product.price) * parseInt(product.qty)) + accumulator;
        } else {
          return accumulator;
        }
      }, 0)
    } else {
      return 0
    }
  }

  @computed get count() {
    if(this.products) {
      return this.products.reduce((accumulator, product) => {
        if(product.qty) {
          return parseInt(product.qty, 10) + accumulator;
        } else {
          return accumulator;
        }
      }, 0)
    } else {
      return 0
    }
  }

  @action
  clearCart() {
    this.products.clear();
  }

  // todo: this is naive for now, change this to find on custom configurations also (can be multiple of same slugs)
  // @return index if exists
  productIndexInCart(product) {
    const { slug, configHash } = product;
    return this.products.findIndex(item => item.slug === slug && item.configHash === configHash);
  }

  @action
  removeFromCart(product) {
    const productIndex = this.productIndexInCart(product);
    if( productIndex !== -1) {
      if (this.products.length > 0 ) {
        this.products.splice(productIndex, 1)
      }
    }
  }

  @action
  addToCart(product) {
    console.log('addToCart product: ', product);
    if (!product.qty) {
      product.qty = 0;
    }
    // if hash already exists on product it means we're modifying an existing cart config
    // so we need to remove it and add a new product with the new config hash
    if (product.configHash) {
      this.removeFromCart(product);
    }

    // generate new config hash and add to cart
    const configHash = hash(product.config);
    product.configHash = configHash;
    const existingProductIndex = this.productIndexInCart(product.slug, configHash);

    // check if it exists and update qty if so otherwise add as new product
    if(existingProductIndex !== -1) {
      const qty = this.products[existingProductIndex].qty + product.qty
      this.products[existingProductIndex] = { ...product, qty }
    } else {
      this.products.push(product)
    }
  }
}

export default CartStore;

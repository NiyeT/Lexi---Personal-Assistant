import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class TestElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[message]]</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'test-element',
      },
      message:{
        type:String,
        value:"bacon"
      }
    };
  }
}

window.customElements.define('test-element', TestElement);

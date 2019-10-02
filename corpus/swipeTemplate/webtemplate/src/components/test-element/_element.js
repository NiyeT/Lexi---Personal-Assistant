import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `test-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TestElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'test-element',
      },
    };
  }
}

window.customElements.define('test-element', TestElement);

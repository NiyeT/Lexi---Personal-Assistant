class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
    this.addEventListener('click',function(){console.log('WordCount')});
    this.textContent="testing"
  }
}

customElements.define('word-count', WordCount, { extends: 'h1' });

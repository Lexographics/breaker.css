class Btn extends HTMLAnchorElement {
   constructor() {
      super();
      this.onclick = function() {
         window.location.href = `${this.getAttribute('href')}` || "#";
      }
   }

   // Element added to page
   connectedCallback() {
      this.render();
   }

   // Element removed from page
   disconnectedCallback() {

   }

   // an attribute of the element has changed
   attributeChangedCallback(name, oldValue, newValue) {
      
   }


   render() {}
}


customElements.define('b-btn', Btn, { extends: 'a' })

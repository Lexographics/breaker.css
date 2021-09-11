class Btn extends HTMLAnchorElement {
   constructor() {
      super();
      this.onclick = function() {
         switch(this.getAttribute('target')) {
            case '_blank': {

            }
            case '_parent': {

            }
            case '_top': {

            }
            default: /* or _self */ {
               //window.location.href = `${this.getAttribute('href')}` || "#";
            }

         }
         console.log(this.getAttribute('_target'));
         window.open( this.getAttribute('href'), this.getAttribute('target') || '_self' )
      }

      this.oncontextmenu = function(e) {
         console.log(e);
      }
      

      this.ontouchmove = function() {
         void('hey');
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

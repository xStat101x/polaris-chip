import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Red Woods";
    this.img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Op2mehiUmXhnD1Mmb3p8gAHaEK%26pid%3DApi&f=1&ipt=e4feb207652abe7caee4ba7fafb4cc16cdafca9d3d3e8e7308717bf2cea55268&ipo=images";
    this.description = "This is the california Red woods"
    this.link = "hax.psu.edu"
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .cardlist {
        display: flex;
        width: 1200px;
      }

      .card {
        background-color: black;
        display: block;
        padding: 8px;
        margin: 8px;
        width: 400px;
        height: 400px;
        border-radius: 20px;
      }
      .hax {
        background-color: blue;
      }
      p {
        color: white;
        text-align: center;
      }
      h1 {
        color: white;
        text-align: center;
      }
      img {
        width: 300px;
        height: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .card-button {
        padding: 10px;
        color: black;
        border-radius: 100px;
        border-color: green;
        border-width: 10px;
        font-size: 16px;
        font-weight: bold;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <h1>${this.title}</h1>
      <img src="${this.img}"></img>
      <!-- put this in your render method where you had details -->
      <details id='5' ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
      <button class="card-button"><a href="${this.link}">Click Me</a></button>
    </div> 
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: {type: String},
      description: {type: String},
      link: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

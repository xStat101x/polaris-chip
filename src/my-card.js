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
      .card {
        background-color: black;
        display: block;
        width: 400px;
        height: auto;
        padding: 8px;
        margin: 8px;
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
        display: block;
        width: 300px;
        aspect-ratio: 16 / 9 auto;
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
      details summary {
        color: white;
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
        color: white;
      }
    
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        color: white;
      }
      .desc {
        color: white;
        text-align: left;
        font-size: 20px;
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
          ${this.description}
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

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'variant'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.label = 'Click me';
    this.variant = 'primary'; // Example for style variant (primary/secondary)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') this.label = newValue;
    if (name === 'variant') this.variant = newValue;
    this.render();
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('button')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('button-click', { bubbles: true }));
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 0.5em 1em;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        button.primary {
          background-color: #007bff;
          color: white;
        }
        button.secondary {
          background-color: #6c757d;
          color: white;
        }
      </style>
      <button class="${this.variant}">${this.label}</button>
    `;
  }
}

customElements.define('c-button', Button);

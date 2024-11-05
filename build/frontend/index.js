var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let something = 0;
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.number1 = Math.floor(Math.random() * 10);
        this.number2 = Math.floor(Math.random() * 10);
        this.currentValue = 0;
        this.score = 0;
    }
    render() {
        return html `
     <p>Score ${this.score}</p>
      <p>${this.number1} + ${this.number2}</p>
      <form @submit="${this.handleSubmit}"> 
        <p>Submit Your Answer Here <input .value=${this.currentValue} @input=${this.handleChange}> </input></p>
        <button type="submit">Submit your answer here</button>
      </form>
    `;
    }
    getSum() {
        return this.number1 + this.number2;
    }
    handleChange(event) {
        const target = event.target;
        this.currentValue = Number(target.value);
        console.log(this.currentValue);
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.currentValue === this.getSum()) {
            this.score++;
            this.number1 = Math.floor(Math.random() * 10);
            this.number2 = Math.floor(Math.random() * 10);
        }
        else {
            this.score--;
        }
    }
};
__decorate([
    property({ type: Number })
], MyElement.prototype, "number1", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "number2", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "currentValue", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "score", void 0);
MyElement = __decorate([
    customElement("my-element")
], MyElement);
export { MyElement };

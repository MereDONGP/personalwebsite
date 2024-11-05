import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

let something : Number = 0
@customElement("my-element")
export class MyElement extends LitElement {
  @property({type: Number})
  number1 = Math.floor(Math.random() * 10)

  @property({type: Number})
  number2 = Math.floor(Math.random() * 10)

  @property({type: Number})
  currentValue = 0
  
  @property({type: Number})
  score = 0


  protected render(){
     return html `
     <p>Score ${this.score}</p>
      <p>${this.number1} + ${this.number2}</p>
      <form @submit="${this.handleSubmit}"> 
        <p>Submit Your Answer Here <input .value=${this.currentValue} @input=${this.handleChange}> </input></p>
        <button type="submit">Submit your answer here</button>
      </form>
    `
  }

  private getSum () : Number{
    return this.number1 + this.number2
  }

  private handleChange(event: Event){

    const target = event.target as HTMLInputElement
    this.currentValue = Number(target.value)
    console.log(this.currentValue)
  }

  private handleSubmit (event: Event) {
    event.preventDefault()
    if(this.currentValue === this.getSum()){
      this.score++
      this.number1 = Math.floor(Math.random() * 10)
      this.number2 = Math.floor(Math.random() * 10)
    }else{
      this.score--
    }
  }
}


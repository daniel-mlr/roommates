import React from 'react'
import ReactDOM from 'react-dom'

const userName = 'Daniel, tout simplement!'
console.log(userName)
const template =  (
  <div>
    <h1>{userName}</h1>
    <p>Ceci est un test, jsx fonctionne!</p>
  </div>
)
class OldSyntax {
  constructor() {
    this.name = 'Mike'
    // work around
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Bonjour, mon nom est encore ${this.name}`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())

// --------------

class NewSyntax {
  name ='Jane'
  getGreeting = () => {
    return `Sous nouvelle syntaxe, mon nom: ${this.name}`
  }
}
const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())

ReactDOM.render(template, document.getElementById('app'))


class CardNews extends HTMLElement{
  constructor(){
    super()//Chama as propriedades do HTMLElement

    const shadow = this.attachShadow({mode: 'open'}) //Invoca a shadow Dom
    shadow.appendChild(this.build()) //Chama a build do component
    shadow.appendChild(this.styles())//Chama os estilos da build do component
  }

  build(){
    const componentRoot = document.createElement('div')//Criação da div Card
    componentRoot.setAttribute('class','card')//Definindo sua classe
    
    const cardLeft = document.createElement('div')//Criação da div Card__left
    cardLeft.setAttribute('class','card__left')//Definindo sua classe

    const author = document.createElement('span')
    author.textContent = "By " +  (this.getAttribute('author') || "Anonymous")
    
    const linkTitle = document.createElement('a')
    linkTitle.href = this.getAttribute('link-url')
    linkTitle.textContent = this.getAttribute('title')
    
    const newsDescription = document.createElement('p')
    newsDescription.textContent = this.getAttribute('description')

    cardLeft.appendChild(author)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsDescription)

    const cardRight = document.createElement('div')//Criação da div Card__right
    cardRight.setAttribute('class','card__right')//Definindo sua classe

    const newsImage = document.createElement('img')
    newsImage.src = this.getAttribute('photo') || 'assets/img/foto-default.jpg'
    newsImage.alt = 'Darth Vader'

    cardRight.appendChild(newsImage)

    //Definindo as duas div de cada lado do card como filhas do Card pai
    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles(){
    const style = document.createElement('style')

    style.textContent = ``
  }
}

customElements.define('card-news', CardNews)
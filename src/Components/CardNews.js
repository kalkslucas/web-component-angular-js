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

    style.textContent = `
    .card {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      -webkit-box-shadow: -1px 0px 54px 6px rgba(0,0,0,0.75);
      -moz-box-shadow: -1px 0px 54px 6px rgba(0,0,0,0.75);
      box-shadow: -1px 0px 54px 6px rgba(0,0,0,0.75);
      margin-bottom: 15px;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left span {
      font-weight: 400;
    }
    
    .card__left a {
      margin-top: 10px;
      font-size: 20px;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    
    .card__left p {
      color: grey;
    }

    .card__right img {
      height: 100%;
    }
    `

    return style
  }
}

customElements.define('card-news', CardNews)
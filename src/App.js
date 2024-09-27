import React, { Component } from 'react';
import './App.css';

const machine = [
  {
    quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde'
  },
  {
    quote: 'That it will never come again is what makes life so sweet.',
    author: 'Emily Dickinson'
  },
  {
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot'
  },
  {
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'Pain is inevitable. Suffering is optional.',
    author: 'Haruki Murakami'
  },
  {
    quote: "All the world's a stage, and all the men and women merely players.",
    author: 'William Shakespeare'
  },
  {
    quote: 'Be kind, for everyone you meet is fighting a hard battle.',
    author: 'Plato'
  },
  {
    quote: 'Unable are the loved to die for love is immortality.',
    author: 'Emily Dickinson'
  },
  {
    quote: 'Let me live, love, and say it well in good sentences.',
    author: 'Sylvia Plath'
  },
  {
    quote: "Don't let your happiness depend on something you may lose.",
    author: 'C.S. Lewis'
  },
  {
    quote: "We are all broken, that's how the light gets in.",
    author: 'Ernest Hemingway'
  },
  {
    quote: 'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.',
    author: 'Voltaire'
  },
  {
    quote: 'Life is tough my darling, but so are you.',
    author: ' Stephanie Bennett Henry'
  },
  {
    quote: 'Self-awareness and self-love matter. Who we are is how we lead.',
    author: 'Brene Brown'
  },
  {
    quote: 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.',
    author: 'Stephen King'
  },
  {
    quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good",
    author: 'William Faulkner'
  },
  {
    quote: 'As a writer, you should not judge, you should understand.',
    author: 'Ernest Hemingway'
  }
]

const colorValue = () => {
  const randomBetween = (min, max) => min + (Math.floor(Math.random() * (max - min + 1)))
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}
// console.log(colorValue());



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: Math.floor(Math.random() * machine.length),
      color: colorValue()
    } 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyPress = this.keyPress.bind(this);
    
  }

  keyPress = (event) => {
    if(event.keyCode === 13) {
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    this.setState({
      quoteIndex: Math.floor(Math.random() * machine.length),
      color: colorValue()
    })
    console.log(this.state.color);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keyPress)
  }

  render() {
    const { quoteIndex, color } = this.state
    // const quoteStyle = { color: color, backgroundColor: color}
    return(
      <div className="App" style={{display: 'flex', backgroundColor: color, height: '100vh'}}>
        <div className='container' id='quote-box' style={{ color: color, backgroundColor: 'white', width: '40%', margin: 'auto'}}>
          <div>
            <h1 id='text' style={{ color: color}}><i class="fa-solid fa-quote-left"></i>  {machine[quoteIndex].quote}</h1>
            <p className='author' id='author'>
              -{machine[quoteIndex].author}
            </p>
          </div>
          <div className='quote-container'>
            <div className='tweet-quote'>
              <a id='tweet-quote' style={{backgroundColor: color}} href='#'><i class="fa-brands fa-x-twitter"></i></a>
              <a id='tweet-quote' style={{backgroundColor: color}} href='#'><i class="fa-brands fa-tumblr"></i></a>
            </div>
            <div className='new-quote'>
              <button 
                id='new-quote'
                onClick={this.handleSubmit}
                style={{ color: 'white', backgroundColor: color}}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default App;


import React from 'react'
import afghanHoundImg from './img/afghan-hound.jpg'

// React.createElement(
//   'div',
//   {
//     className: 'container',
//   },
//   getGreeting(),
//   React.createElement('img', {
//     src: dog.img,
//     alt: 'afghan hound',
//     width: '300',
//   })
// )

const App = () => {
  const dog = {
    name: 'Bingo',
    breed: 'Afghan Hound',
    img: afghanHoundImg,
  }

  const formatDog = (dog) =>
    `Woof woof, my name is ${dog.name} & my breed is an ${dog.breed}`

  const getGreeting = (dog) => {
    if (dog) {
      return <h1>{formatDog(dog)}</h1>
    }
    return <h1>Uh...who are you?</h1>
  }

  return (
    <div className='main-container'>
      {getGreeting()}
      <img src={dog.img} alt='afghan hound' width='300' />
    </div>
  )
}

export default App

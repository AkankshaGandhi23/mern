import React from 'react'

const Home = () => {

  const siteTitle = 'My Website Name';

  const num1 =10;
  const num2 = 20;
  
  const addNums = (a, b) => {
    return a+b;
  }

  return (                                        
    <div>
      <h4 className='my-btn'>{num1 * num2}</h4>
      {siteTitle}
      <p>{addNums(45 ,67  )}</p>

      <input type = "text"/>
      <h1 style = { {color : 'blue' , fontSize : 20 } }>my next.js app</h1>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi velit, similique repellat quod iste nobis eligendi animi doloribus fuga.</p>
    </div>
  )
}

export default Home


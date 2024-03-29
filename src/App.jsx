
import React, { useState } from 'react';
import './App.css'


//Pseudo-Code:

// 1. A colors array initially set to 2 colorPicker boxes. (Range of this array = 2-5) (useState)
//2.  Adding a color to our array on button Click (handleAddColor) - before adding check for Max_len (...  to add new element)
//3. Remove a color on button Click (handleRemoveColor)
//4. Update a colors array element (updateColor method)
//5. Generate color in the div, in a linear gradient style, based on elements in the colors Array 

const MAX_LEN = 5;
const MIN_LEN = 2;


function App() {
  //initialize our arrray with 2 defualt colors, and this will be a State Variable as we will re-render the div, based on 
  //elements in this array

  const [colors, setColors] = useState(['#FF0000', '#FF0000'])
  

  //Event Handlers

  const handleAddColor = ()=>{
    if(colors.length < MAX_LEN){
      setColors([...colors, '#FF0000'])
    }
  }

  const handleRemoveColor = ()=>{
    if(colors.length > MIN_LEN){
      setColors(colors.slice(0,-1))
    }
  }
  

  //Update function -> Updates a particular element in the colors array based on newColor selected from the pallete
  //logic - create a copy of current array, update the new color at specified index & then finally update the state
  
  const updateColor= (color, index)=>{
    let newColors = [...colors]
    newColors[index]=color;
    setColors(newColors)
  }


  //Apply the gradient styling to the div
  const applyGradientStyle = ()=>{
    return {
      background: `linear-gradient(to bottom, ${colors.join(', ')})`, 
      height: '300px', 
      width: '100%'
    };
  }
  let CPStyle = {marginTop: '300px'}
  return (
    <>
    <button onClick={handleAddColor} disabled={colors.length >= MAX_LEN}>Add Color</button>
    <button onClick={handleRemoveColor} disabled={colors.length <= MIN_LEN}>Remove Color</button>
    
    <div style={applyGradientStyle()}>
      
      {colors.map((color, index)=> (
          <input  key={index} type='color' value={color} onChange={(e)=> updateColor(e.target.value, index)} style={CPStyle} />
      ))
      }
    
    

    </div>
   
    </>
  )
}

export default App

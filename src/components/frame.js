import React from 'react'

const Frame = ({ children }) => {
  return (   
    <div>     
      <h1>Liste du Bureau G.A.M et Membres</h1>
      <h3>Nombre: 38</h3>
      { children }
    </div>
    
  )
}

export default Frame
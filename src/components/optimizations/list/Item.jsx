import React from 'react'

const Item = React.memo(function Item({item, handleToggle}){
    console.log("Rendering Item", item.id);
    
  return (
    <input type='checkbox' checked={item.checked} onChange={(e) => handleToggle(e, item.id)}/>
  )
})

export default Item
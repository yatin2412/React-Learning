import React, {useState} from 'react'

const UnOptimizedList = () => {
    const [items, setItems] = useState(
        Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        checked: false
        }))
    );
    const handleChange = (e, id) => {
        const checked = e.target.checked
        setItems(prev => prev.map(item => item.id === id? {...item, checked: checked}: item))
    }
  return (
    <div>
        <ul>
            {items.map(item => <li key={item.id}>
                <input 
                    type='checkbox'
                    checked={item.checked}
                    onChange={(e) => handleChange(e, item.id)}
                />
                {console.log("Item re rendered", item.id)}
            </li>)}
        </ul>
    </div>
  )
}

export default UnOptimizedList
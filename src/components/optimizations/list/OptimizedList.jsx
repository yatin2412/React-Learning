import React, {useCallback, useState} from 'react'
import Item from './Item';

const OptimizedList = () => {
    const [items, setItems] = useState(
        Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        checked: false
        }))
    );
    const handleToggle = useCallback((e, id) => {
        const checked = e.target.checked
        setItems(prev => prev.map(item => item.id === id? {...item, checked}: item))
    }, [])
  return (
    <div>
        {items.map(item => <div key={item.id}>
            <Item item={item} handleToggle={handleToggle}/>
        </div>)}
    </div>
  )
}

export default OptimizedList
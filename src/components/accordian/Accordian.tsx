import React, { useState } from "react"

type Item = {
  id: number
  title: string
  content: string
}

const data: Item[] = [
  { id: 1, title: "What is React?", content: "React is a library..." },
  { id: 2, title: "What is Hook?", content: "Hooks are functions..." },
  { id: 3, title: "What is TS?", content: "TypeScript adds types..." }
]

export const Accordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", marginBottom: "8px" }}>
          
          <div
            onClick={() => handleToggle(item.id)}
            style={{ padding: "10px", cursor: "pointer", background: "#eee" }}
          >
            {item.title}
          </div>

          {activeId === item.id && (
            <div style={{ padding: "10px" }}>
              {item.content}
            </div>
          )}

        </div>
      ))}
    </div>
  )
}

export default Accordion
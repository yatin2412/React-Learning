import React, {useState} from "react";

type Accordion = {
    id: number,
    title: string,
    content: string
}

const data: Accordion[] = [
  { id: 1, title: "What is React?", content: "React is a library..." },
  { id: 2, title: "What is Hook?", content: "Hooks are functions..." },
  { id: 3, title: "What is TS?", content: "TypeScript adds types..." }
]

const MultipleAccordian = () => {
    const [activeIds, setActiveIds] = useState<number[]>([])

    const handleClick = (id: number) => {
        setActiveIds(prev => prev.includes(id)? prev.filter(ids => ids !== id) : [...prev, id])
    }

    return(
        data.map(item => <div key={item.id}>
            <div onClick={() => handleClick(item.id)} style={{padding: "12px", border:"2px solid black", cursor: "pointer"}}>
                {item.title}
            </div>
            {activeIds.includes(item.id)? <div>
                {item.content}
            </div>: ""}
        </div>)
    )
}

export default MultipleAccordian
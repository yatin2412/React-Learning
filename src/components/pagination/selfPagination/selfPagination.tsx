import React,{useState} from 'react'

const SelfPagination = () => {
    const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const currentItems = data.slice(startIndex, endIndex)
    return (
        <div>
            {currentItems.map(item => <p>{item}</p>)}
            {Array.from({length: totalPages}, (_, i) => <button key={i} onClick={() => setCurrentPage(i+1)}>
                {i+1}
            </button>)}
        </div>
    )
}

export default SelfPagination
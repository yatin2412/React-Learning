import React, {useEffect, useState} from 'react'
import ProgressBar from './ProgressBar'

const Useprogress = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setProgress(prev => prev<100? prev+10: prev)
        }, 2000)
    }, [])
  return (
    <div>
      Progress: {progress}
      <ProgressBar progress={progress}/>
    </div>
  )
}

export default Useprogress
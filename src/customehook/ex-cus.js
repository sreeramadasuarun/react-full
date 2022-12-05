import { useEffect } from 'react'

const useAll = (count) => {
    useEffect(() => {
        document.title = `count:${count}`
    }, [count])
}

export default useAll;
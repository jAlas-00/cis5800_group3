import { useRef, useEffect } from 'react'

  //loading spinners
function useMounted() {
    const mounted = useRef(false)

    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
    }
  }, [])
  
    return mounted
}

export default useMounted

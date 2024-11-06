import {useEffect,useState,useDeferredValue,useRef} from 'react'

const useHandleScroll = () => {

    // const isFirstRender = useRef(true);

    const[scrolled,setScrolled] = useState(false);
    const deferredScrolled = useDeferredValue(scrolled);

    useEffect(()=> {

        // if(isFirstRender.current) {
        //     isFirstRender.current = false;
        //     console.log('header first render');
        //     return;
        // }

        // console.log('use effect invoked');

        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
            // console.log('handleScroll invoked');
          };
          window.addEventListener('scroll', handleScroll);

    return () => {
        // console.log("cleanup function invoked")
      window.removeEventListener('scroll', handleScroll);
    };
    })

  return deferredScrolled
}

export default useHandleScroll
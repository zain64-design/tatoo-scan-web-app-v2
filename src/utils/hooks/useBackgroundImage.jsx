import { useEffect} from 'react';

const useBackgroundImage = (selector,data) => {
  
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const img = element.getAttribute('data-bg-image');
      if (img) {
        // element.classList.add('bg-image');
        element.style.backgroundImage = `url(${img})`;
      }
    });
  }, [selector,data]);
  // useEffect(() => {
  //   const elements = document.querySelectorAll(selector);
  //   if (elements.length === 0) {
  //     console.log('No elements found with selector:', selector);
  //   } else {
  //     elements.forEach((element) => {
  //       const img = element.getAttribute('data-bg-image');
  //       console.log('Element:', element, 'Image:', img); // Log element and the image
  //       if (img) {
  //         console.log('backgroundImage styles');
  //         element.style.backgroundImage = `url(${img})`;
  //       }
  //     });
  //   }
  // }, [selector, data]);
};

export default useBackgroundImage;
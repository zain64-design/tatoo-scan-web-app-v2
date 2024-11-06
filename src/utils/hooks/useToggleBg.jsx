import { useState } from 'react';

const useToggleBg = () => {

    const [isToggled, setIsToggled] = useState(false);


    const handleToggleClick = () => {
        setIsToggled(prev => !prev); 
    };

  return ([isToggled,handleToggleClick]);
}

export default useToggleBg
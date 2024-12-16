import { useState } from 'react';

function FavsHeart(){
    const [activeHearts, setActiveHearts] = useState(false);

  
    const handleHearts = () => {
        if(!activeHearts){
            setActiveHearts(true)
        }else{
            setActiveHearts(false)
        }
    }
    return (

        <>
             <i
                        className={`bi ${
                            activeHearts
                            ? 'bi-heart-fill text-danger'
                            : 'bi-heart-fill text-light'
                        }`}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleHearts()}
                    ></i>
        </>
    )
}


export default FavsHeart;
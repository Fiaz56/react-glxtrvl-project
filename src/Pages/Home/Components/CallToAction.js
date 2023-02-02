import React, { useState } from 'react';
import Modal from './Modal';

const CallToAction = () => {

    const [modal, setModal] = useState(false);
    const handleClick = () => {
        setModal(!modal)
    }
  return (
    <>
    <div className='callToAction'>
        <h2>Hurry Up Limited Seats Available!</h2>
        <button onClick={handleClick}>Know More</button>
    </div>
    {
        modal && <Modal handleClick={handleClick}/>
    }
    </>
  )                                                                
}

export default CallToAction;
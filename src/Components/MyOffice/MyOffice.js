import React, { useState } from 'react';
import "./MyOffice.css"
import Modal from './modal/Modal';

const MyOffice = () => {
  const[modalActive, setModalActive] = useState(true)
  return (
    <div className='Main'>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      {/* Else */}
        <div className='pages'><button onClick={() => setModalActive(true)}>Зарегестрироватся </button></div>
        <div className='User-info'>
          <img src='https://citaty.info/files/no_avatar.png' height={"200px"} width={"200px"} alt='Avatarka'></img>
          
          <div className='User-name'>
            <p>Name</p>
            <p>Surname</p>
          </div>
        </div>





    </div>
  );
};

export default MyOffice;
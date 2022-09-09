import React, { useState } from 'react';
import "./MyOffice.css"
import Modal from './modal/Modal';
import { useSelector } from 'react-redux';

const MyOffice = () => {
  const [modalActive, setModalActive] = useState(true)
  const name = useSelector(state => state.authData.name)
  const surname = useSelector(state => state.authData.surname)
  return (
    <div className='Main'>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      {/* Else */}
      <div className='pages'><button onClick={() => setModalActive(true)}>Зарегестрироватся </button></div>
      <div className='User-info'>
        <img src='https://citaty.info/files/no_avatar.png' height={"200px"} width={"200px"} alt='Avatarka'></img>

        <div className='User-name'>
          <p>{name}</p>
          <p>{surname}</p>
        </div>
      </div>





    </div>
  );
};

export default MyOffice;
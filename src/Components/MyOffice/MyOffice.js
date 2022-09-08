import React, { useState } from 'react';
import classes from "./MyOffice.module.css"
import Modal from './modal/Modal';

const MyOffice = () => {
  const[modalActive, setModalActive] = useState(true)
  return (
    <div className={classes.main}>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      {/* Else */}
        <div className={classes.pages}><button onClick={() => setModalActive(true)}>Зарегестрироватся </button></div>
        <div className={classes.Userinfo}>
          <img src='https://citaty.info/files/no_avatar.png' height={"200px"} width={"200px"} alt='Avatarka'></img>
          
          <div className={classes.UserName}>
            <p>Name</p>
            <p>Surname</p>
          </div>
        </div>





    </div>
  );
};

export default MyOffice;
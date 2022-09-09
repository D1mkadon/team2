import React, { useState } from 'react';

import classes from "./MyOffice.module.css"
import { useSelector } from 'react-redux';
import Modal from "./modal/Modal";

const MyOffice = () => {
  const [modalActive, setModalActive] = useState(true)
  const name = useSelector(state => state.authData.name)
  const surname = useSelector(state => state.authData.surname)
  return (
    <div className={classes.main}>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      {/* Else */}
      <div className={classes.pages}><button onClick={() => setModalActive(true)}>Зарегестрироватся </button></div>
      <div className={classes.Userinfo}>
        <img src='https://citaty.info/files/no_avatar.png' height={"200px"} width={"200px"} alt='Avatarka'></img>

        <div className={classes.UserName}>
          <p>{name}</p>
          <p>{surname}</p>
        </div>
      </div>





    </div>
  );
};

export default MyOffice;
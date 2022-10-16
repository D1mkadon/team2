import React, { useState } from 'react';

import classes from "./MyOffice.module.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from "./modal/Modal"
import ImageUpload from './ImageUpload/imageUpload';
import { setMainName, setMainSurname,  setIsLogin } from '../reducers/authDataReducer'
const MyOffice = () => {
  const [modalImage, setModalImage] = useState(false)
  const name = useSelector(state => state.authData.name)
  const surname = useSelector(state => state.authData.surname)
  // const email = useSelector(state => state.authData.email)
  const islogin = useSelector(state => state.authData.islogin)
  const imageUrl = useSelector(state => state.imageUrl.imageUrl)
  const dispatch = useDispatch()
  function setQuit(){
    dispatch(setMainName(""));
    dispatch(setMainSurname(""));
    dispatch(setIsLogin(false));
  }
  const [modalActive, setModalActive] = useState(!islogin)
  return (
    <div className={classes.main}>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      
      <ImageUpload activeImage={modalImage} setModalImage={setModalImage}></ImageUpload>
      {/* <ImageUpload active={modalImage} setActive={setModalImage}></ImageUpload> */}
      
      {/* Else */}
      <div>
        <div className={classes.divsPosition}>
        <img className={classes.imgAvatarka} src={imageUrl} height={"200px"} width={"200px"} alt='Avatarka'></img>
        <div className='pages'><button className={classes.buttonRedistrationAvatarka} onClick={()=> setModalImage(true)}>Загрузить аватар</button></div>
          <div><button className={classes.buttonRedistration} onClick={() => {setModalActive(!islogin); setQuit()}}>{!islogin ? "Зарегестрироватся" : "Выйти"}</button></div>
          
          
        </div>
            
            
            <div className='User-info'>
            
      </div>
      

        <div className={classes.UserName}>
          <p>{name}</p>
          <p>{surname}</p>
          {/* <p>{email}</p> */}
        </div>
      </div>





    </div>
  );
};

export default MyOffice;
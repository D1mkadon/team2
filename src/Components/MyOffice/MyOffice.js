import React, { useState } from 'react';
import "./MyOffice.css"
import Modal from './modal/Modal';
import { useSelector } from 'react-redux';
import ImageUpload from './ImageUpload/imageUpload';

const MyOffice = () => {
  const [modalActive, setModalActive] = useState(true)
  const [modalImage, setModalImage] = useState(false)
  const name = useSelector(state => state.authData.name)
  const surname = useSelector(state => state.authData.surname)
  const imageUrl = useSelector(state => state.imageUrl.imageUrl)
  return (
    <div className='Main'>
      {/* Modal_Window */}
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      <ImageUpload activeImage={modalImage} setModalImage={setModalImage}></ImageUpload>
      {/* <ImageUpload active={modalImage} setActive={setModalImage}></ImageUpload> */}

      {/* Else */}
      <div className='pages'><button onClick={() => setModalActive(true)}>Зарегестрироватся </button></div>
      <div className='pages'><button onClick={()=> setModalImage(true)}>Загрузить аватар</button></div>
      <div className='User-info'>
        <img src={imageUrl} height={"200px"} width={"200px"} alt='Avatarka'></img>

        <div className='User-name'>
          <p>{name}</p>
          <p>{surname}</p>
        </div>
      </div>





    </div>
  );
};

export default MyOffice;
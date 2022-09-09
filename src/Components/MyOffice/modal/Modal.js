import React, { useEffect, useState } from 'react';
import "./Modal.css"
import "../styles.css"
import { useDispatch } from 'react-redux';
import { setMainName, setMainSurname } from '../../reducers/authDataReducer';
const Modal = ({ active, setActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя неможет быть пустым");
  const [surnameError, setSurnameError] = useState("Фамилия не может быть пустая");

  const dispatch = useDispatch()

  const onBlurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'password':
        setPasswordDirty(true);
        break;

      case 'name':
        setNameDirty(true);
        break;

      case 'surname':
        setSurnameDirty(true);
        break;
    };
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
    } else {
      setEmailError('');
    };
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 12) {
      setPasswordError('Пароль должен быть длиннее 4 и меньше 12');
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      };
    } else {
      setPasswordError('')
    };
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
    if (e.target.value.length < 0) {
      setNameError('Фамилия не может быть пустая');
      if (!e.target.value) {
        setSurnameError('Фамилия не может быть пустая')
      };
    } else {
      setSurnameError('')
    };
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 0) {
      setNameError('Имя неможет быть пустым');
      if (!e.target.value) {
        setNameError('Имя неможет быть пустым')
      };
    } else {
      setNameError('')
    };
  };
  const preventHandler = (e) => {
    e.preventDefault()
  }
  function setNameAndSurname(name1, surname1) {
    dispatch(setMainName(name1));
    dispatch(setMainSurname(surname1));
  }


  useEffect(() => {
    if (emailError || passwordError || nameError || surnameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [emailError, passwordError, nameError, surnameError]);
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
        <form onClick={(e) => preventHandler(e)} >
          <h1 className="test">Регистрация</h1>
          {(emailDirty && emailError) && <div className="red">{emailError}</div>}
          <input value={email} onChange={(e) => emailHandler(e)} onBlur={(e) => onBlurHandler(e)} name='email' type="text" placeholder='Введите свой email' />

          {(passwordDirty && passwordError) && <div className="red">{passwordError}</div>}
          <input value={password} onChange={(e) => passwordHandler(e)} onBlur={(e) => onBlurHandler(e)} name='password' type="password" placeholder='Введите свой пароль' />

          {(nameDirty && nameError) && <div className="red">{nameError}</div>}
          <input value={name} onChange={(e) => nameHandler(e)} onBlur={(e) => onBlurHandler(e)} name='name' type="text" placeholder='Введите свое имя' />

          {(surnameDirty && surnameError) && <div className="red">{surnameError}</div>}
          <input value={surname} onChange={(e) => surnameHandler(e)} onBlur={(e) => onBlurHandler(e)} name='surname' type="text" placeholder='Введите свою фамилию' />

          <button onClick={() => setNameAndSurname(name, surname)} className="submit" disabled={!formValid} type='submit'>Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
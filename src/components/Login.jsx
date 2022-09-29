import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slice/userName.slice";  //este esta en el useName debemos imprtar para que me funcione el dispach
const UserInput = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(""); //para controlar el input
  
    const navigate = useNavigate();
  
    const dispatchUserName = () => { //importamos la accion del slice
      dispatch(changeName(userName)); //Aqui se usa el dispatch y el import del change luego le agregamos la const de useName
      navigate("/pokedex"); //cuando ejecute el botton me lleve a la podex donde se muestra el mensajotp
    };

  
    return (
        <div className='backGround-login'>
          <div className='img-text'>
            <h1>Hello Trainer</h1>
            <img src='https://www.pngplay.com/wp-content/uploads/11/Scraggy-Pokemon-No-Background-Clip-Art.png' alt='img'></img>
          </div>
          <div>
            <h2>Give me your name to start</h2>
            <div className='btn-input-login'>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className='btn-login' onClick={dispatchUserName}><span className='btn-send' class="material-symbols-outlined">double_arrow</span>
            </button>
            </div>
          </div>
        </div>
    );
};

export default UserInput;
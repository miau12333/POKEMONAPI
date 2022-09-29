import { configureStore } from '@reduxjs/toolkit';
import userNameSlice from './slice/userName.slice';
//el impor va SIN LLAVES 
export default configureStore({
  reducer: {
    userName: userNameSlice //Puede ser cualquier nombre antes de los puntitios pero debe ser coherente
	}
})
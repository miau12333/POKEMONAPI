import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const name = useSelector(state => state.userName) //ponemos la condición donde especifique que queremos hacer publico y privado
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(name !== ""){ //si la var name es diferente a un "" vacio me deje pasar
        return <Outlet />
    } else {  //si no lo es que me deje en login
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;
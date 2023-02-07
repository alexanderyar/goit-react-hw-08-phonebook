import { lazy } from "react";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "redux/auth/authSelectors";
import { refreshUserThunkOperation } from "redux/auth/authOperations";
import { RestrictedRoute } from "./ResctrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));




export const App = () => {

    const dispatch = useDispatch();
  
    // checking if we are refreshing User at the moment
   const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
     dispatch(refreshUserThunkOperation())
   }, [dispatch])
   

  return isRefreshing? ('refreshing current user')
    : (
       <>
           <Toaster />
             <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts"  />} />
         
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts"  />} />
          
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
        </Route>
      </Routes>
       </>
 
    
  );
};

// далі зробити логАутthunk, перевірити всі chains "інтерфейс - діспатч - операція (апі) - редюсер "
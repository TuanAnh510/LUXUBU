import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import React, { useEffect } from 'react'
import { loadUser } from '../redux/action/auth';
import { toast } from 'react-toastify';

function Privateroute({ children }) {

  const dispatch = useDispatch()
 
  dispatch(loadUser());

  const { isauth } = useSelector((store) => store.login);

  
  if (!isauth) {

    return toast.warning("Bạn cần đăng nhập trước"), (<Navigate to='/login'></Navigate>)
  }

  return children
}

export default Privateroute
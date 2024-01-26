import { React,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../redux/slices/userSlice';

const Login = () => {
    const {isAuth ,userList} = useSelector(state => state.user)
      console.log("isAuth", isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{console.log(data);
      dispatch(signin(data))
    }
    console.log("errors", errors);

      useEffect(() => {
        if(isAuth) navigate('/')
      }, [isAuth])
  return (
    <div className='formRegister'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email", {required: true, max: 20, min: 10, maxLength: 30})} /><br/>
        <p>{errors.email && "email is not valid"}</p>
        <input type="password" placeholder="password" {...register("password", {required: true, max: 20, min: 6, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} /><br/>
        <p>{errors.password && "password is not valid"}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login

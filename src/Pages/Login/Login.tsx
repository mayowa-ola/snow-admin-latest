import './Login.scss'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import  Logoimg from '../../assets/images/snowafricaimg.jpg'



const Login = () => {
  return (
    <div className="body">
      <div className="wrapper">
        
      <form action="">
      <div className="logo">
          <img src={Logoimg} alt="" />
        </div>
      
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <PersonIcon className='icon'/>
      </div>
      <div className="input-box">
        <input type="password" placeholder='Password' required />
        <LockIcon className='icon'/>
      </div>
      <div className="remember">
        <label htmlFor=""><input type="checkbox" />Remember me</label>
        <a href="">Forgot Password ?</a>
      </div>
      <button className='btn' type='submit' >Sign in</button>
    </form>
   </div>
    </div>
   
  )
}

export default Login
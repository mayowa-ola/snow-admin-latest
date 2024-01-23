import './Navbar.scss'
import Userimg from'../../assets/images/avater-img.jpg'
import LogoImg from '../../assets/images/snowafricaimg.jpg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={LogoImg} alt="" />

        </div>
        <div className="icons">
            <SearchOutlinedIcon/>
            <div className="notification">
                <NotificationsNoneOutlinedIcon/>
                <span>1</span>
            </div>
            <div className="user">
                <img src={Userimg} alt="" />
                <span>ruth</span>
            </div>
            <SettingsOutlinedIcon/>

        </div>
    </div>
  )
}

export default Navbar
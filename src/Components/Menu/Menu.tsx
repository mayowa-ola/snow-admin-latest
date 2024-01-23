import './Menu.scss'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';



const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className='title'>MAIN</span>
        <Link to='/' className='listItem'>
        <DashboardIcon/>
        <span className="listItemTitle">Dashboard</span>

        </Link>
      </div>
      <div className="item">
        <span className='title'>LIST</span>
        <Link to='/allusers' className='listItem'>
        <GroupIcon/>
        <span className="listItemTitle">All users</span>
        </Link>
        <Link to='/artist' className='listItem'>
        <AssignmentIndIcon/>
        <span className="listItemTitle">Artist</span>
        </Link>
        <Link to='/curators' className='listItem'>
        <LocationOnIcon/>
        <span className="listItemTitle">Curators</span>
        </Link>
        <Link to='/products' className='listItem'>
        <InventoryIcon/>
        <span className="listItemTitle">Products</span>
        </Link>
        <Link to='/transaction' className='listItem'>
        <ListAltOutlinedIcon/>
        <span className="listItemTitle">Transaction</span>
        </Link>
      </div>
      <div className="item bottom">
        <span className='title'>USER</span>
        <Link to='/login' className='listItem'>
        <AccountCircleOutlinedIcon/>
        <span className="ListItem listItemTitle">Log Out</span>

        </Link>
        
      </div>

    </div>
  )
}

export default Menu
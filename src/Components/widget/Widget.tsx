import './Widget.scss'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Widget = ({ type }) => {

    let data;

    switch(type) {
        case "transaction":
          data={
            title: "TRANSACTION",
            icon: <LeaderboardOutlinedIcon className='icon' 
            style={{
              color: "white",
              backgroundColor: "rgb(245, 54, 92)"
            }}
            />
          };
          break;
          case "users":
          data={
            title: "USERS",
            icon: <PermIdentityOutlinedIcon className='icon' style={{
              color:"white",
              backgroundColor:"rgb(251, 99, 64)"
              
            }} />
          };
          break;
          case "artworks":
          data={
            title: "ARTWORK",
            icon: <ShoppingCartOutlinedIcon className='icon' style={{
              color: "white",
              backgroundColor: "rgb(255, 214, 0)"
            }}
            
            
            />,
          };
          break;
        default:
          break;
      }
    


  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className="counter">200</span>
        </div>
        <div className="right">
        {data?.icon}
        </div>
    </div>
  )
}

export default Widget
import moment from 'moment';
import css from './Layout.module.css';
import { BiSearch } from 'react-icons/bi';
import Sidebar from '../Sidebar/Sidebar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const Layout = () => {

   const { pathname } = useLocation()
  return (
    <div className={css.container}>
      <Sidebar/>


      {/* making the dashboard as default route */}
      {pathname ==="/" && <Navigate to="/dashboard"/>}


      <div className={css.dashboard}>
      <div className={css.topBaseGradients}>
    <div className='gradient-red'></div>
    <div  className='gradient-orange'></div>
    <div className='gradient-blue'></div>
    <div className={css.header}>
        <span>{moment().format("dddd, D MMM YYYY")}</span>

        {/* <div className={css.searchBar}>
        <BiSearch size={20}/>
        <input type="text" placeholder='Search' />
        </div> */}
        

        <div className={css.profile}>
            <img src="./iitdelhi.png" alt="profile-img" />
            <img src="./aiimsdelhi.png" alt="profile-img" />

             {/* <div className={css.details}>
                <span>Manas Sohgaura</span>
                <span>manassohgaura@gmail.com</span>
            </div>  */}
            
        </div>
        
    </div>
    <div className={css.content}>
                <Outlet/>
            </div>
    </div>
    </div>
    </div>
  );
};

export default Layout


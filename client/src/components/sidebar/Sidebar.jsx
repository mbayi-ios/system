import React from 'react'
import "./sidebar.scss"

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> MAIN </p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title"> LIST </p>
            <li>
              <StoreIcon className="icon" />
                <span>Products</span>
            </li>
          
            <li>
              <LocalShippingIcon  className="icon"/>
              <span>Delivery</span>
            </li>
            <li>
              <PaymentIcon  className="icon"/>
              <span>Orders</span>
            </li>
            <p className="title"> USEFUL </p>
            <li>
              <AssessmentIcon className="icon" />
              <span>Stats</span>
            </li>
          
            <li>
              <NotificationsIcon  className="icon"/>
              <span>Notification</span>
            </li>

            <p className="title"> SERVICE </p>
            <li>
              <SettingsSystemDaydreamIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className="icon" />
              <span>Logs</span>
            </li>
            
            <p className="title">USER</p>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          
            <li>  
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
            <li> 
              < LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
    
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      
    </div>
  )
}

export default Sidebar
 
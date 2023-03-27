import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import React from 'react'

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100
    const percentage = 20   

    switch (type) {
        case "user":
            data = {
                title: "USER",
                isMoney: false, 
                link: "See all users",
                icon: < PersonIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}} />,
            };
            break;

            case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false, 
                    link: "See all Orders",
                    icon: < ShoppingCartIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}} />,
                };
                break;

                case "balance":
                    data = {
                        title: "BALANCE",
                        isMoney: true, 
                        link: "See Details",
                        icon: < MonetizationOnIcon className="icon"  style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>,
                    };
                    break;

                case "earning":
                    data = {
                        title: "EARNING",
                        isMoney: true, 
                        link: "View net Earnings",
                        icon: < AccountBalanceWalletIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}} />,
                    };
                    break;
                  
            default:
                break;
    }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">See All Users </span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {percentage} %
        </div>
        {data.icon}

      </div>
    </div>
  )
}

export default Widget

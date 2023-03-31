import React from 'react'
import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
      <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compres" alt="" className='itemImage' />
               <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+245 716 402525</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Elton st. 234 Garden Yd. NewYork</span>
                </div>
               </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={ 3 / 1 }  title= "User Spending (last 6 Months) "/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Laterst Transactions</h1>
          <TableList />
          </div>
      </div>
    </div>
  )
}

export default Single

import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import TableList from '../../components/table/TableList'
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type = "earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart  aspect={ 2 / 1 }  title="spendings for the Last Six Months" />
        </div>
        <div className="listContainer">
          <h1 className="listTitle">Laterst Transactions</h1>
          <TableList />
        </div>
        </div>
    </div>
  )
}

export default Home

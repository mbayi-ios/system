import React from 'react'
import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, linearGradient } from 'recharts';


const Chart = () => {

    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800},
        { name: "April", Total: 1600},
        {name: "May", Total: 900},
        { name: "June", Total: 1700 }
    ]
  return (
    <div className='chart'>
        <div className="title">Last 6 Months (Revenue)</div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

import React from 'react'
import Cards from '../components/Cards/Cards'
import Table from '../components/Table/Table'
import '../components/styles/Dashboard.css'

function Dashboard (){
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
        
        
        


    </div>
  )
}
export default Dashboard;
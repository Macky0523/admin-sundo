import React, {useState,useEffect} from 'react';
import { CSVLink } from 'react-csv';
const Reports = () => {
    const [bookingdata, setbookingdata]= useState([]); 
    useEffect( ()=>{
       const getbookingdata= async ()=>{
         const userreq= await fetch("http://localhost:8080/sundoadmin/booking.php/");
         const userres= await userreq.json();
         console.log(userres);
         setbookingdata(userres);
       }
   getbookingdata();
    },[]);
    
    const [customerdata, setcustomerdata]= useState([]); 
    useEffect( ()=>{
       const getcustomerdata= async ()=>{
         const userreq= await fetch("http://localhost:8080/sundoadmin/connect.php/");
         const userres= await userreq.json();
         console.log(userres);
         setcustomerdata(userres);
       }
   getcustomerdata();
    },[]);

    const [Unpaiddata, setUnpaiddata]= useState([]); 
    useEffect( ()=>{
       const getUnpaiddata= async ()=>{
         const userreq= await fetch("http://localhost:8080/sundoadmin/unpaid.php/");
         const userres= await userreq.json();
         console.log(userres);
         setUnpaiddata(userres);
       }
    getUnpaiddata();
    },[]);

    return (
        <div>
            <h1>Reports page</h1>
            <CSVLink  data={ bookingdata} filename="Booking Report"  className="btn btn-success mb-3">Export Booking Data</CSVLink>  
            <CSVLink  data={ customerdata} filename="Customer Report"  className="btn btn-success mb-3">Export Customer Data</CSVLink>
            <CSVLink  data={ Unpaiddata} filename="Unpaid Bookings Report"  className="btn btn-success mb-3">Export Unpaid Booking Data</CSVLink>
        </div>
    );
};

export default Reports;
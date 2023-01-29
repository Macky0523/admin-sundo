import React from 'react';
import Table from 'react-bootstrap/Table';
import '../Table/Table.css'
class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customer: []};
        this.headers = [
            { key: 'bid', label: 'ID'},
            { key: 'driver', label: 'Driver' },
            { key: 'customer', label: 'Customer' },
            { key: 'Vehicletype', label: 'Vehicle Type' },
            { key: 'pu', label: 'Pick Up' },
            { key: 'df', label: 'Drop Off' },
            { key: 'date', label: 'Date Booked' },
            { key: 'amount', label: 'Amount' },
            { key: 'share', label: 'Company Share' },

        ];
        this.state = { checkedBoxes: [] };
        this.deleteEmployee = this.deleteEmployees.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
     
    deleteEmployees = (event) => {
        event.preventDefault();
        if(window.confirm('Are you sure, want to delete the selected Driver?')) {
            alert(this.state.checkedBoxes + " Succesfully Deleted");
        }
    }
     
    toggleCheckbox = (e, item) => {      
        if(e.target.checked) {
            let arr = this.state.checkedBoxes;
            arr.push(item.id);
             
            this.setState = { checkedBoxes: arr};
        } else {            
            let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);
             
            this.setState = {
                checkedBoxes: items
            }
        }       
        console.log(this.state.checkedBoxes);
    }
     
    componentDidMount() {
        fetch('http://localhost:8080/sundoadmin/booking.php/').then(response => {
            console.log(response);
            return response.json();
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                cusomer_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const customerFound = this.state.cusomer_rs && this.state.cusomer_rs.length;
        if(customerFound) {
            return (
                <><><h3 className="Ctitle">Recent Bookings</h3></><Table className='CTable' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {this.headers.map(function (h) {
                                return (
                                    <th key={h.key}>{h.label}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cusomer_rs.map(function (item, index) {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox" className="selectsingle" value="{item.bid}" checked={this.state.checkedBoxes.find((p) => p.bid === item.bid)} onChange={(e) => this.toggleCheckbox(e, item)} />
                                        {item.bid}
                                    </td>
                                    <td>{item.driver}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.Vehicletype}</td>
                                    <td>{item.pu}</td>
                                    <td>{item.df}</td>
                                    <td>{item.date}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.share}</td>
                                </tr>
                            );
                        }.bind(this))}
                    </tbody>
                </Table></>
                
            )
        } else {
            return (
                <div id="container">
                    No product found
                </div>
            )
        }
    }
}
export default Booking;
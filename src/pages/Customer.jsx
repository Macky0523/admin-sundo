import { textAlign } from '@mui/system';
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../components/styles/Customer.css'
class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customer: []};
        this.headers = [
            { key: 'id', label: 'ID'},
            { key: 'fname', label: 'Firt Name' },
            { key: 'lname', label: 'Last Name' },
            { key: 'Email', label: 'Email' },
            { key: 'address', label: 'Address' },
            { key: 'date_created', label: 'Date Created' },
            { key: 'Contact', label: 'Contact' },
            { key: 'driver', label: 'Driver' },
        ];
        this.state = { checkedBoxes: [] };
        this.deleteEmployee = this.deleteEmployees.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }
     
    deleteEmployees = (event) => {
        event.preventDefault();
        if(window.confirm('Are you sure, want to delete the selected employee?')) {
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
        fetch('http://localhost:8080/sundoadmin/connect.php/').then(response => {
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
            <><><h1 className="Ctitle" >Customer</h1></><><div id="msg"></div><button type="button" className="btn btn-danger" onClick={this.deleteEmployees}>Remove</button><Table className='CTable' striped bordered hover variant="dark">
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
                                    <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.userid === item.id)} onChange={(e) => this.toggleCheckbox(e, item)} />
                                        {item.id}
                                    </td>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.date_created}</td>
                                    <td>{item.Contact}</td>
                                    <td>{item.driver}</td>
                                </tr>
                            );
                        }.bind(this))}
                    </tbody>
                </Table></></>
                
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
export default Customer;
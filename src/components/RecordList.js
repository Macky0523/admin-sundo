import React, {Component} from 'react';

class RecordList extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.userid}
                </td>
                <td>
                    {this.props.obj.fname}
                </td>
                <td>
                    {this.props.obj.lname}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.date_created}
                </td>
                <td>
                    {this.props.obj.Contact}
                    
                </td>
                <td>
                    {this.props.obj.driver}
                </td>
            </tr>

        );
    }
}
export default RecordList;
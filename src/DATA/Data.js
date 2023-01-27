// Sidebar imports
import React from 'react'

import {
  UilClipboardAlt,
  UilMoneyWithdrawal,
  UilUsdSquare,
} from "@iconscout/react-unicons";

class Unpaid extends React.Component {
  constructor(props) {
      super(props);
      this.state = {customer: []};
      this.headers = [
          { key: '$result', label:'TOTAL'},

]}
componentDidMount() {
  fetch('http://localhost:8080/sundoadmin/Totalupaid.php/').then(response => {
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
}

export const CardsData =[
  {
    title: "Bookings",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "517",
    png: UilClipboardAlt,
    series: [
      {
        name: "Booking",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "10",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Unpaid Bookings ",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "5.70",
    png: UilUsdSquare,
    series: [
      {
        name: "Unpaid  Bookings",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
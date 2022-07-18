import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
import { NavLink as Link, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function Commission() {
  const jwt =JSON.parse(localStorage.getItem('jwt'));
  const amount=JSON.parse(localStorage.getItem('amount'));
  console.log(jwt)
  console.log(amount)
  fetch("http://192.168.1.27:8080/api/accounts/commission", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('amount', JSON.stringify(response['amount']));
      const amount = localStorage.getItem('amount')
        console.log(amount)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
   
  return (
   <Section> 
       <div className="logo">
    
       
    
    </div>
   <div className="analytic">
   
    <h2>Your Commission</h2> 
    <h2>{amount}</h2> <br />
     <div className="content">
     
 

     </div>
     
   </div>

  
 


   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  .analytic h2{
    text-align: center;
  }
  .analytic {
    ${cardStyle};

    hight: 40px;
    display: inline-block;
    border: 4px solid #ffc107;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    border-radius: 30px;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      
    }
}

@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .analytic {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      flex-direction: row-reverse;
    }
  }
}`;
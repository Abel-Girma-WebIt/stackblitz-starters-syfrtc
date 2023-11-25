import React from 'react';


export default function ContactMe(){


  let [data, setData]=React.useState({firstName: "", lastName:"", email:"", phone:"", comment:""})



  function change(e){


    setData(preData=>{
    
      return{
    
    ...preData, [e.target.name]:e.target.value
    
    }
    
    
    })
    
    }

return(


  <div id="form_data">

  <h1>Contact Me</h1>

  <label className="form_label" htmlFor="">First Name : </label>   <input onChange={change}  className="customer_Data" name="firstName"  type="text"/><br/><br/>
  <label className="form_label" htmlFor="">Last Name : </label>    <input onChange={change}  className="customer_Data"  name="lastName" type="text"/><br/><br/>
  <label className="form_label" htmlFor="">Email Name : </label>   <input onChange={change}  className="customer_Data"  name="email"  type="text"/><br/><br/>
  <label className="form_label" htmlFor="">Phone Number:</label> <input onChange={change}   className="customer_Data" name="phone"  type="phone"/><br/><br/>
  <label className="form_label" htmlFor="">Comment : </label>      <textarea onChange={change} className=""   name="comment"  type="text"/><br/><br/>
  <button id="submit_button">Submit</button>


</div>










);

}
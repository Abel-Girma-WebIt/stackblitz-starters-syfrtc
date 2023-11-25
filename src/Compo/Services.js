import React from 'react';

function Services() {


const [show, setShow] = React.useState(false);


function change(){

setShow(preShow=>!preShow)

}








  return (
    <div id="Services_sec">
      <h1 id="serv-h-one">Services</h1>

      <div id="serv_list">

      <div className="services">Web Deisgn</div>

      <div className="services">UI/UX Design</div>

      <div className="services">E-Commerce Implementation</div>

      <div className="services">ERP Devlopement</div>



      {show && <div className="services">IT Support</div>}
      
      {show && <div className="services">Testing</div>}
      {show && <div className="services">Mobile App Development</div>}
      {show && <div className="services">Backend Devlopment</div>}


      <button onClick={change} id="more_service">{show ? "Show less...":"Show more..."}</button>

  



      </div>

      
    </div>
  );
}

export default Services;

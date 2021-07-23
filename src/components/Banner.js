import React, { useState, useEffect } from 'react';

import { NotificationManager } from 'react-notifications';

import "../styles/Banner.scss";

const Banner = () => {
  const [state, setState] = React.useState({firstname:'',lastname:'',phoneNo:'', email: "", gender: "" , dob:"",birthplace:"",birthour:"",message:""})
  const handleChange = (e) => {
      const { id, value } = e.target
      //console.log(e.target.value);
      setState(prevState => ({
        
          ...prevState,
          [id]: value
      }))
  }

  const handleClickLogin = async(e) => {
    e.preventDefault();
    let data = { firstname: state.firstname, phoneNo: state.phoneNo,email: state.email,gender:state.gender,dob:state.dob,birthour:state.birthour,birthplace:state.birthplace,message:state.message }
    if(data){
      console.log(data);
        let contact = true;//await GetVendorDetails.getCreaterecomandation(data);
        if(contact){
            NotificationManager.success("Thank you so much we will contact soon","Success")
            setTimeout(
                () => window.location.reload(), 
                3000
              );
        }
    }        
    
}
  return (
    <div class="container-fluid banner py-5">
      <div class="row">
        <div class="col-lg-4 banner-colum-1 text-white py-5 ms-5">
          <p className="gemstone">Gemstones </p>
          <h3>New Collection</h3>
          <hr class="horz-line" />
          <hr class="horz-line" />
          <p className="gemstone-text">
            Gemstones that attracts luck <br /> and success
          </p>
          <div>
            <button type="button" class="btn btn-outline-success">
              view collection
            </button>
          </div>
        </div>
        <div class="col-lg-4 mx-auto card-bg">
        
   
          <div class="card1">
            <div class="card-body">
              
              <p className="services-heading1 text-center">GET FREE CONSULTATION</p>

              <form>
  <div class="row mb-2">
  <div class="col-sm-6">
      <input type="Name" class="form-control" id="firstname" placeholder="First Name *" onChange={handleChange}/>
    </div>
    <div class="col-sm-6">
      <input type="Name" class="form-control" id="lastname" placeholder="Last Name *" onChange={handleChange}/>
    </div>
  </div>
  <div class="row mb-2">
  <div class="col-sm-6">
      <input type="Name" class="form-control" id="email" placeholder="Email *" onChange={handleChange}/>
    </div>
  <div class="col-sm-6">
      <input type="Name" class="form-control" id="phoneNo" placeholder="Mobile No. *" onChange={handleChange}/>
    </div>
   
  </div>
  <div class="row mb-2">
  <div class="col-sm-6">
      <input type="Name" class="form-control" id="gender" placeholder="Gender *" onChange={handleChange}/>
    </div>
  <div class="col-sm-6">
  <input type="Name" class="form-control" id="birthplace" placeholder="Birth Place *" onChange={handleChange}/>
      
    </div>
   
  </div>
  
  <div class="row mb-2">
  <div class="col-sm-5">
  <label class="label1">Date Of Birth</label>
    </div>
  <div class="col-sm-7">
  <input type="date" class="form-control" id="dob" placeholder="Date Of Birth *"  onChange={handleChange}/>
    </div>
  
  </div>
  <div class="row mb-2">
  <div class="col-sm-5">
    <label class="label1">Birth Time</label>
      
    </div>
  <div class="col-sm-7">
      <input type="time" class="form-control" id="birthour" placeholder="Birth second *" onChange={handleChange}/>
    </div>
    
  </div>

 
  <div class="input-group" style={{marginTop:'10px'}}>
  <div class="col-sm-12">
  <textarea class="form-control" aria-label="With textarea" placeholder="Concern *"  id="message" onChange={handleChange}></textarea>
  </div>
</div>
<div className="text-center py-3">
<button type="button" class="btn btn-secondary" onClick={handleClickLogin} >Submit</button>
</div>
  
</form>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Banner;

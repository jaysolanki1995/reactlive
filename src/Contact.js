import React,{useState} from 'react';


const Contact =()=>{
            const[data,setData] =useState({
                firstname:'',
                email:'',
                phone:'',
                message:'',
            });

            const inputEvent=(event)=>{
                const {value,name} = event.target;

                setData((prevData) =>{
                    return{
                    ...prevData,
                    [name]:value,}
                })
            }
            const submitEvent =(e) =>{
                    e.preventDefault();
                    alert(`${data.firstname} Mail me ${data.email} contact on  ${data.phone} message for you ${data.message}`)
            }

    return (
      <>
        <div className="my-5">
        <h1 className="text-center"> Contact</h1>  
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                     <form onSubmit={submitEvent}>
                        <div class="mb-3">
                            <label 
                              for="exampleFormControlInput1" 
                              class="form-label">
                                  FirstName</label>
                            <input 
                                 type="text" 
                                 class="form-control"
                                 value={data.firstname}
                                 name='firstname'
                                 onChange={inputEvent} 
                                 id="exampleFormControlInput1" 
                                 placeholder="Enter you Name"/>
                            </div>
                            <div class="mb-3">
                            <label 
                            for="exampleFormControlTextarea1" 
                            class="form-label">Email Address
                            </label>
                            <input 
                                 type="email" 
                                 class="form-control" 
                                 value={data.email}
                                 name='email'
                                 onChange={inputEvent}
                                 id="exampleFormControlInput1" 
                                 placeholder="Enter you e-mail"/>
                            </div>
                            <div class="mb-3">
                            <label 
                              for="exampleFormControlInput1" 
                              class="form-label">
                                  Phone</label>
                            <input 
                                 type="number" 
                                 onChange={inputEvent}
                                 class="form-control"
                                 value={data.phone}
                                 name='phone' 
                                 id="exampleFormControlInput1" 
                                 placeholder="Enter you Number"/>
                            </div>
                            <div class="mb-3">
                            <label 
                              for="exampleFormControlInput1" 
                              class="form-label">
                                  Message</label>
                            <textarea 
                                 type="number"
                                 value={data.message}
                                 name='message' 
                                 class="form-control" 
                                 onChange={inputEvent}
                                 placeholder="Enter you Message"/>
                            </div>
                          <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>                     
                     </form>

                </div>
            </div>

        </div>
      </>
    )
  } 
  
  export default Contact;
import React from "react";
export default function Contact({input}) {

    return (

        <form className="row g-3 container-contact">
            <h1>Contact Us</h1>
            <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className={`${input} form-control`} id="fname"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className={`${input} form-control`} id="lname"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className={`${input} form-control`} id="inputEmail4"/>
            </div>
            <label className="form-label" htmlfor="msg">Message</label>
            <textarea className={`${input} form-control`} id="msg" row="5"></textarea>
            <div className="col-12">
                <div className="form-check">
                    <input required className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Yes, this information is correct
                        </label>
                </div>
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
            
        </form>

    );

}
import React from "react";
import Email from "components/Email";
import Phone from "components/Phone";

const Customer = (props) => {
    const {id, avatar, firstName,lastName, job} = props.data;
    return (
            <div className="card m-1" style={{width:"30%"}}>
                <img src={avatar} alt={id} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p className="card-text">{job}</p>
                    <Phone data={props.data}/>
                    <Email data={props.data}/>
                </div>
            </div>
    );
}
export default Customer;
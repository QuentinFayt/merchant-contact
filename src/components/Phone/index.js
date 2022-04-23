import React from "react";

const Phone = (props)=>{
    const {phone} = props.data;
    return (<a className="btn btn-primary m-1"  href={`callto:${phone}`}>Appeler</a>)
}

export default Phone;
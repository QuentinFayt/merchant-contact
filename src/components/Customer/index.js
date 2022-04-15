import React from "react";

const Customer = (props) => {
    const {firstName,lastName} = props.data;
    return (<li>{firstName} {lastName}</li>);
}
export default Customer;
import React from "react";

const Email = (props) => {
    const {firstName,lastName} = props.data;
    return (<a className="btn btn-primary m-1"  href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`}>Envoyer un message</a>);
}
export default Email;
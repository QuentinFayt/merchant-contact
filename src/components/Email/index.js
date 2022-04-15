import React from "react";

const Email = (props) => {
    const {firstName,lastName} = props.data;
    return (<a href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`}>Envoyer un message</a>);
}
export default Email;
import React from "react";
import Faker from "@faker-js/faker";

const Customers = () => {
    const customerList = Array.from({length:100},()=>({
        id: Faker.random.uuid(),
        firstName : Faker.name.firstName(),
        lastName : Faker.name.lastName()
    }));
    return (<p>Hello! Je m'appelle {customerList[0].firstName} {customerList[0].lastName} </p>);
};

export default Customers;
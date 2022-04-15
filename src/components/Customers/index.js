import React from "react";
import Faker from "@faker-js/faker";
import Customer from "components/Customer";

const Customers = () => {
    const customerList = Array.from({length:100},()=>({
        id: Faker.random.uuid(),
        firstName : Faker.name.firstName(),
        lastName : Faker.name.lastName()
    }));
    return (
        <ul>
            {customerList.map((customerData)=>(
                <Customer data={customerData} key={customerData.id}/>
            ))}
        </ul>
    );
};

export default Customers;
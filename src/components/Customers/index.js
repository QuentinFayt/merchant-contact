import React from "react";
import Faker from "@faker-js/faker";
import Customer from "components/Customer";

const Customers = () => {
    const customerList = Array.from({length:100},()=>({
        id: Faker.datatype.uuid(),
        firstName : Faker.name.firstName(),
        lastName : Faker.name.lastName(),
        phone : Faker.phone.phoneNumber('049#.###.###'),
        avatar : Faker.image.avatar(),
        job : Faker.name.jobTitle()
    }));
    return (
        <div className="d-inline-flex flex-wrap justify-content-center">
            {customerList.map((customerData)=>(
                    <Customer data={customerData} key={customerData.id}/>
            ))}
        </div>
    );
};

export default Customers;
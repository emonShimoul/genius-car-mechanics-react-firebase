import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

// https://ibb.co/86YVwj3
// https://ibb.co/jkPH3J4
// https://ibb.co/f0s1cc9
// https://ibb.co/G2x6pn3
// https://ibb.co/mRyJcvN
// https://ibb.co/PQHQbKW

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    return (
        <div className="service-container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
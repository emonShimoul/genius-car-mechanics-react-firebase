import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img style={{width: 500, height:300}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;
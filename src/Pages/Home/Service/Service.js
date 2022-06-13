import React from 'react';

const Service = ({service}) => {
    // const {service} = props;
    const {name, price, description, img} = service;
    return (
        <div>
            <img style={{width: 400, height:250}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;
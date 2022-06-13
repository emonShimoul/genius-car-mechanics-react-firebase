import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://i.ibb.co/Z2bjr65/mechanic-1.jpg",
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: "https://i.ibb.co/25FZm6w/mechanic-2.jpg",
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: "https://i.ibb.co/fQMr5cz/mechanic-3.jpg",
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: "https://i.ibb.co/2KSv1XH/mechanic-4.jpg",
        name: 'Andrew Washington',
        expertize: '-Driving Expert-'
    },
    {
        img: "https://i.ibb.co/XWCZp2K/mechanic-5.jpg",
        name: 'Tom Hardle',
        expertize: '-Repairing Expert-'
    },
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
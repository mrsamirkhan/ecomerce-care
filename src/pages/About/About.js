import React from 'react';
import pic from '../../assets/images/contactus.jpg';

const About = () => {
    return (
        <div className='container'>
            <div className='grid lg:grid-cols-2 auto-rows-fr my-5'>
                <div className='mx-5'>
                    <img className='rounded-lg' src={pic} />
                </div>
                <div className='mx-5 lg:mt-28 '>
                    <h1 className='text-4xl uppercase font-bold  my-3'>hi family!</h1>
                    <p className='text-sm w-3/4'>we are welocoming you to the e-commerce-care shop.<br />This is very helpfull e-shop.<b />
                        we started it in december on 2022.<b /> this is a trusted e-shop which is othorised by goverment. </p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/images/contactus.jpg';
import { HiChevronDoubleRight } from "react-icons/hi";

const About = () => {
    return (
        <div className='container'>
            <h1 className='uppercase text-4xl text-center my-10'>About us !</h1>
            <div className='grid lg:grid-cols-2 auto-rows-fr my-3'>
                <div className='mx-5'>
                    <img className='rounded-lg ' src={pic} />
                </div>
                <div className='mx-5 lg:mt-28 '>
                    <h1 className='text-4xl uppercase font-bold  my-3'>hi family!</h1>
                    <p className='text-sm w-3/4'>we are welocoming you to the e-commerce-care shop.<br />This is very helpfull e-shop.<b />
                        we started it in december on 2022.<b /> this is a trusted e-shop which is othorised by goverment. </p>
                </div>
            </div>
            <div className='my-5 text-end o-unerline '> 
                <Link  className="text-white uppercase py-3 px-3  rounded-lg bg-gray-600" to='/' > return to home <HiChevronDoubleRight className='inline-block  mb-0.5 '/> </Link>
            </div>
        </div>
    );
};

export default About;
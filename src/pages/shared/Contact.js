import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
        <div className="hero h-4/5">
            <div className="hero-content flex-col lg:flex-row-reverse py-36">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold uppercase">contact Us!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. 
                     In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline uppercase">send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
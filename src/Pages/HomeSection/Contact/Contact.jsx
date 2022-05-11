import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact my-28 text-center'>
            <div className='pt-10'>
            <h4 className='text-primary font-bold text-xl'>Contact Us</h4>
            <h1 className='text-white text-4xl'>Stay connected with us</h1>
            </div>
            <div>
            <form className='lg:max-w-lg mt-10 px-4 mx-auto'>
                <div class="mb-6">
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                </div>
                <div class="mb-6">
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Subject' required/>
                </div>
                <div class="mb-6">
                    <textarea type="textarea" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 h-36 dark:focus:border-blue-500" placeholder='Your message' required/>
                </div>
                
                <div className='text-center'>
                <button type="submit" class="text-white btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;
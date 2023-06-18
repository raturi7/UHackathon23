import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container pt-5 text-white flex flex-row'>
            <div className='form '>
                <h1>Get In Touch</h1>
                <form className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter your name' />
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter your email' />
                        <label htmlFor='subject'>Subject</label>
                        <input type='text' name='subject' className='form-control' placeholder='Enter your subject' />
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' className='form-control' rows='5' placeholder='Enter your message'></textarea>
                        </div>
                        </form>




            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Contact
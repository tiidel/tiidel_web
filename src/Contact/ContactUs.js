import React, { useState } from 'react'
import './Contact.css'
import { EmailJSResponseStatus } from '@emailjs/browser'
import { HiArrowRight } from 'react-icons/hi2'

const ContactUs = () => {
    const [subject, setSubject] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('')
    const [acceptNewsLetter, setAcceptNewsLetter] = useState(false)
    const [acceptPrivacy, setAcceptPrivacy] = useState(false)


    const data = {
        "subject": subject,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "phone": phone,
        "country": country,
        "message": message,
        "accept_news_letter": acceptNewsLetter,
        "accept_privacy": acceptPrivacy
    }

    const submitForm = async(e) => {
        e.preventDefault()

        console.log(data);
        
    }
  return (
    <div className='contact_us_n'>
        <div className='gt-1'>
            <h1 className='contact_us_title_main'>Take the brighter path.</h1>
            <p className='contact_us_text_main'>We will be in touch as soon as possible.</p>

            <form onSubmit={submitForm} className='general_contact_form_n'>
                <div className='contact_g_n'>
                    <select value={subject} onChange={e => setSubject(e.target.value)}>
                        <option value="">Choose a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Report a bug">Report a bug</option>
                    </select>
                </div>
                <div className='contact_us_flex'>
                    <div className='contact_g_n'>
                        <input type='text' value={first_name} onChange={e=> setFirst_name(e.target.value)} placeholder='First Name' />
                    </div>
                    <div className='contact_g_n'>
                        <input type='text' value={last_name} onChange={e=> setLast_name(e.target.value)} placeholder='Last Name' />
                    </div>
                </div>
                <div className='contact_us_flex'>
                    <div className='contact_g_n'>
                        <input type='email' value={email} onChange={e=> setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className='contact_g_n'>
                        <input type='text' value={phone} onChange={e=> setPhone(e.target.value)} placeholder='Phone Number' />
                    </div>
                </div>
                <div className='contact_g_n'>
                    <input type='text' value={country} onChange={e=> setCountry(e.target.value)} placeholder='Country' />
                </div>
                <div className='contact_g_n message_field'>
                    <textarea value={message} onChange={e=> setMessage(e.target.value)} placeholder='Message' />
                </div>
                <div className='check_box_messages'>
                    <input value={acceptNewsLetter} onChange={e=> setAcceptNewsLetter(e.target.checked)} type='checkbox' id='news_letter' />
                    <label htmlFor='news_letter'>I would like to sign up to receive <span className='bold'>Rank</span> news and insights.</label>
                </div>
                <div className='check_box_messages'>
                    <input value={acceptPrivacy} onChange={e=> setAcceptPrivacy(e.target.checked)} type='checkbox' id='privacy_policy_contact_n'  />
                    <label htmlFor='privacy_policy_contact_n'>By submitting this form, you agree to our <a href='/privacy-policy'>Privacy Policy</a></label>
                </div>

                <button type='submit' className='btn submit_contact_n_g'>
                    Submit
                    <span className='icon'><HiArrowRight /></span>
                </button>
            </form>

            <div className='call_us_n'>
                <h2 className='contact_us_title bold'>Call us</h2>
                <a href='tell:+236620590187' className='contact_us_text_n'>+237 620 59 01 87</a>
            </div>

            <div className='contact_our_social_media_n'>
                <div className='location_contact_n'>
                    <h2 className='contact_us_title'>Our Headquaters</h2>
                    <p className='contact_us_text_n'>Bamenda, Cameroon</p>
                </div>
                <div className='social_media_contact_n'>
                    <h2 className='contact_us_title'>Our social media</h2>
                    <a target='_blank' href='https://www.linkedin.com/company/tiidel/' className='contact_us_text_n'>
                        LinkedIn
                    </a>
                    <a target='_blank' href='https://www.youtube.com/@rising_tide' className='contact_us_text_n'>
                        YouTube
                    </a>
                    <a target='_blank' href='https://www.x.com/kdaprov' className='contact_us_text_n'>
                        Twitter
                    </a>
                    <a target='_blank' href='https://www.fb.com/tiidel' className='contact_us_text_n'>
                        Facebook
                    </a>
                </div>
            </div>
        </div>
        <div className='gt-2'>
            <div className='our_logo_contact_n'>
                <h1>Tiidel</h1>
            </div>
        </div>

    </div>
  )
}

export default ContactUs
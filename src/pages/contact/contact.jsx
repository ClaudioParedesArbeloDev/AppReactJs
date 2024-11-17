import './contact.css';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name="name" placeholder="Your name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name="email" placeholder="Your email" />
            <label htmlFor="message">Message:</label>
            <textarea id='message' name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </div>
    )
}

export default Contact;
import './index.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <p>Ready to take up your space on the web? Drop me a message</p>

            <div className='contactForm'>
                <form>
                   <input type='text' name='name' placeholder='Name' required />
                   <br />
                   <input type='email' name='email' placeholder='Email' required />
                   <br />
                   <input type='Subject' name='subject' placeholder='Subject' required />
                   <br />
                   <textarea placeholder='Message' name='message' required></textarea>
                   <br />
                   <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact
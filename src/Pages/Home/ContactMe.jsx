export default function ContactMe(){
  
    return(
        <section id="contact" className="contact--section">
            <div>
                <p className="sub--title"> Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
   

            <form action="https://formspree.io/f/mdojqvjo" method="POST" className="contact--form--container" >
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                    <span className="text-md">First Name</span>    
                   <input type="text" className="contact--input text-md" name="first-name" id="first-name" required></input>
                    </label>

                    <label htmlFor="last-name" className="contact--label">
                    <span className="text-md">Last Name</span>    
                   <input type="text" className="contact--input text-md" name="last-name" id="last-name" required></input>
                    </label>

                    <label htmlFor="email" className="contact--label">
                    <span className="text-md">Email</span>    
                   <input type="email" className="contact--input text-md" name="email" id="email" required></input>
                    </label>

                    <label htmlFor="phone-number" className="contact--label">
                    <span className="text-md">Phone-number</span>    
                   <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required></input>
                    </label>
                    </div>


                    <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>    
                   <textarea className="contact--input text-md" id="message" name="message" rows="8" maxLength="500" placeholder="Type your message..." />
                    </label>

   
                    <div> 
                        <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
                    </div>
               
            </form>
 
        </section>
    )
}
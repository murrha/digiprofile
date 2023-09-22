const Contact = () => {
    return ( <section id="contact">

    <a href="https://www.linkedin.com/in/marja-katrina/" target="_blank">LinkedIn URL</a>
    
    <form className="contact-form" method="post">
        <h3 id="contact-me">Contact Me</h3>
        
        <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control"/>
        </div>
        
        <div className="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea name="message" rows="5" className="form-control"></textarea>
        </div>
        
        <button className="btn btn-primary">Submit</button>
    </form>
</section> );
}
 
export default Contact;
import  React from "react";

const Contact2 = () => {
    return(
        <>
             <section id="contact" className="py-5">
    <div className="container">
      <h2>Contact Us</h2>
      <p>Have any questions or suggestions? Feel free to reach out to us.</p>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your Name"/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Your Email"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="5" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
        </>
    )
}

export default Contact2;
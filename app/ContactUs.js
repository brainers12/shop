
export default ContactUs;
const ContactUs = () => {
    return (
      <div className="containe
      r">
        <h1 className="title">Contact Us</h1>
        <p className="description">
          Need assistance? You can reach us by calling or emailing your shopping queries using the contact information provided below or you can fill out the given form and we will reach out to you in decent time.
        </p>
        <p className="email">Email: shopandsend@gmail.com</p>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Enter E-mail address or mobile number</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" className="form-control" rows="5" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
  );
};
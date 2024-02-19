const Contact = () => {
  return (
    <div className="contact-section">
      <h1>
        <span className="hred">&lt;</span>Contact Me
        <span className="hred">/&gt;</span>
      </h1>
      <p className="contact-quote">
        Feel free to Contact me by submitting the form below and ,<br />I will
        get back to you as soon as possible
      </p>

      <div className="contact-sec">
        <div className="form-bg">
          <form action="/" className="Contact-form" method="POST">
            <input type="text" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Subject" />
            <textarea
              type="text"
              placeholder="Write Your Message"
              id="message-block"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-img">
            <img src="/assets/code-img-unscreen.gif" alt="" srcset="" />
          </div>
      </div>
    </div>
  );
};
export default Contact;

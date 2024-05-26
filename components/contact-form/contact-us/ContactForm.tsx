import styles from "./contactForm.module.scss"; // Importing the CSS file

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/assets/site-images/contactFormImage.svg" alt="Example" />
      </div>
      <div className={styles.formContainer}>
        <h1>
          Let’s Start Building <br /> Idea Of The Future
        </h1>
        <form>
          <div className={styles.formRow}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className={styles.textareaRow}>
            <input
              type="message"
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
        </form>
        <div className={styles.footer}>
          <button className={styles.customButton} type="submit">
            Start a project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

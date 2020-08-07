import "../styles/contact-form.scss";

export default function ContactForm() {
    return (
        <div className="contact-container">
            <form
                class="c-form c-form--styles"
                name="contact"
                action="/success"
                method="POST"
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label htmlFor="yourname">Your Name:</label> <br />
                    <input type="text" name="name" id="yourname" />
                </p>

                <p>
                    <label htmlFor="youremail">Your Email:</label> <br />
                    <input type="email" name="email" id="youremail" />
                </p>

                <p>
                    <label htmlFor="yourmessage">Message:</label> <br />
                    <textarea name="message" id="yourmessage"></textarea>
                </p>
                <p>
                    <button class="btn btn--styles" type="submit">
                        Send
                    </button>
                </p>
            </form>
        </div>
    );
}

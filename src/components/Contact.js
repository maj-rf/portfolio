export default function Contact() {
  return (
    <section>
      <h2>Contact Me:</h2>
      <form>
        <label htmlFor="subject">Subject</label>
        <input type="text" placeholder="Setup an Interview?" id="subject" />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa maiores quis odit? Enim, quas?"
          id="message"
        />
      </form>
    </section>
  );
}

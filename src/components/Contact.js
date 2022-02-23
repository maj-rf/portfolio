import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1rem;
`;

export default function Contact() {
  return (
    <StyledSection>
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
    </StyledSection>
  );
}

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        I am ready to be part of technology driven organization
        <br className='sm:block hidden' />
        Am I an interesting candidate? Please write to me at {" "}
        <a 
          href="mailto:vignesh.mahalingam@outlook.de" 
          className="email-link"
        >
          vignesh.mahalingam@outlook.de
        </a>
      </p>
    </section>
  );
};

export default CTA;
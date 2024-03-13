import BryceHadl from '../assets/Bryce_Hadl.png';

function About() {
  return (
<section id="about">
  <div className="column-1">
    <h1 className="about-heading">About Me:</h1>
    <p className="about-text">
    Experienced full-stack developer with a unique background in welding robotics programming. Check out my latest projects!
    </p>
  </div>
  <div className="column-2">
    <div className="about-image">
      <img id="BryceHadl" src={BryceHadl} alt="image of me here" />
    </div>
  </div>
</section>
  )
}
export default About;

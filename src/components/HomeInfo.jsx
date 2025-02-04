import { Link } from "react-router-dom";

import { arrow, indiaflagicon, imagethi, g1 } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Vignesh Mahalingam</span>
        👋
        <br />
        Experienced Engineer in Autonomous Trucks development, AI, MLOps, DataOps
      </h1>
    );

    if (currentStage === 2) {
      return (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
          I have a
          <br />
          <span className="font-semibold mx-2 text-white">
            Master's in Engineering - International Automotive Engineering from Technische Hochschule Ingolstadt
            <span className="inline-flex items-center ml-2">
              <img
                src={imagethi}
                alt="flag"
                className="w-8 h-8 object-contain mr-2"
              />
            </span>
          </span>
          <br />
          
          <br />
          <span className="font-semibold mx-2 text-white">
            Bachelor's in Technology - Mechanical Engineering from
            <span className="inline-flex items-center ml-2">
              India
              <img
                src={indiaflagicon}
                alt="flag"
                className="w-8 h-5 object-contain ml-2"
              />
            </span>
          </span>
        </h1>
      );
    }
    

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;

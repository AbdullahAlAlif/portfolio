import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';


const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  // Removed clientsData and clientsHeading since brands section is deleted

  return (
	<AboutMeContext.Provider value={{ aboutMe, setAboutMe }}>
	  {children}
	</AboutMeContext.Provider>
  );
};

export default AboutMeContext;

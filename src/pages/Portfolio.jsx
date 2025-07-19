import { useState } from 'react';
import AppBanner from '../components/shared/AppBanner';
import AppHeader from '../components/shared/AppHeader';
import { motion } from 'framer-motion';
import AppFooter from '../components/shared/AppFooter';
import AboutMeBio from '../components/about/AboutMeBio';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import { ProjectsProvider } from '../context/ProjectsContext';
import { AboutMeProvider } from '../context/AboutMeContext';
import Button from '../components/reusable/Button';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
        <AppHeader />
      <div className="container mx-auto pt-24 ">
        {/* Hero Section */}
        <section id="hero">
          <AppBanner />
        </section>

      {/* About Me Section */}
      <AboutMeProvider>
        <section id="about" className="my-10">
          <AboutMeBio />
        </section>
      </AboutMeProvider>

    {/* Projects Section */}
    <ProjectsProvider>
        <section id="projects" className="my-10">
            <ProjectsGrid showAll={showAll} />
            <div className="mt-8 flex justify-center">
                {!showAll ? (
                    <button
                        className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                        onClick={() => setShowAll(true)}
                    >
                        <Button title="More Projects" />
                    </button>
                ) : (
                    <button
                        className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-gray-500 hover:bg-gray-600 focus:ring-1 focus:ring-gray-900 text-white text-lg sm:text-xl duration-300"
                        onClick={() => setShowAll(false)}
                    >
                        <Button title="Hide Projects" />
                    </button>
                )}
            </div>
        </section>
    </ProjectsProvider>
      <section id="contact" className="my-10 flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10">
        <ContactForm />
        <ContactDetails />
      </section>

        {/* Footer Section */}  
        <div className="text-center py-5">
            <AppFooter />
        </div>
    </div>
    </>
  );
};

export default Portfolio;

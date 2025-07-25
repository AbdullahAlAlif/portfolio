import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logoDark from '../../images/logo-light.png';
import logoLight from '../../images/logo-dark.png';
import { motion } from 'framer-motion';


const AppHeader = () => {
const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}


	// Scroll to section by id
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
			setShowMenu(false); // Close menu on mobile after click
		}
	};

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<a href="#hero" onClick={() => scrollToSection('hero')}>
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-36"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-36"
									alt="Light Logo"
								/>
							)}
						</a>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<button
						onClick={() => scrollToSection('projects')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 bg-transparent"
						aria-label="Projects"
					>
						Projects
					</button>
					<button
						onClick={() => scrollToSection('about')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark bg-transparent"
						aria-label="About Me"
					>
						About Me
					</button>
					<button
						onClick={() => scrollToSection('contact')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark bg-transparent"
						aria-label="Contact"
					>
						Contact
					</button>
	{/* Hire Me modal removed as requested */}
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<button
						onClick={() => scrollToSection('projects')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 bg-transparent"
						aria-label="Projects"
					>
						Projects
					</button>
					<button
						onClick={() => scrollToSection('about')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 bg-transparent"
						aria-label="About Me"
					>
						About Me
					</button>
					<button
						onClick={() => scrollToSection('contact')}
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 bg-transparent"
						aria-label="Contact"
					>
						Contact
					</button>
				</div>

				{/* Theme switcher large screen */}
				<div
					onClick={() => setTheme(activeTheme)}
					aria-label="Theme Switcher"
					className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
				>
					{activeTheme === 'dark' ? (
						<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
					) : (
						<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
					)}
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;

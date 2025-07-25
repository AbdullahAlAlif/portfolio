import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, github }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			whileHover={{ scale: 1.08 }}
		>			
				<a
				href={github}
				target="_blank"
				rel="noopener noreferrer"
				className="block transform transition-transform duration-300 hover:scale-105"
				>
				<div className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
					</div>
					<div className="text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
					</div>
				</div>
				</a>

		
		</motion.div>
	);
};

export default ProjectSingle;

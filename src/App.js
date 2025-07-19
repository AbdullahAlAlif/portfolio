
import Portfolio from './pages/Portfolio';
import { AnimatePresence } from 'framer-motion';
import './css/App.css';



import { BrowserRouter as Router } from 'react-router-dom';

function App() {
return (
	<AnimatePresence>
		<Router>
			<>
				<div className="w-full bg-secondary-light dark:bg-primary-dark transition duration-300">
					<Portfolio />
				</div>
			</>
		</Router>
	</AnimatePresence>
);
}

export default App;

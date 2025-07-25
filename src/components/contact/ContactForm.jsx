import React, { useRef, useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const formRef = useRef(null);
	const [subject, setSubject] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		
		// Send with first template
		emailjs
			.sendForm(
				'service_s0y3wdh',
				'template_no2hvyp',
				formRef.current,
				'u-mhBB3EF1iUOiCSZ'
			)
			.then(
				(result) => {
					// Send with second template after first succeeds
					emailjs
						.sendForm(
							'service_s0y3wdh',
							'template_1c8jbgg',
							formRef.current,
							'u-mhBB3EF1iUOiCSZ'
						)
						.then(
							() => {
								alert('Message sent!');
								formRef.current.reset();
								setSubject('');
							},
							() => {
								alert('Failed to send message with second template.');
							}
						);
				},
				(error) => {
					alert('Failed to send message.');
				}
			);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					ref={formRef}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					{/* Hidden input for title, set to subject */}
					<input type="hidden" name="title" value={subject} />
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;

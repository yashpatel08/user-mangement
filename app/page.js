'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [feedback, setFeedback] = useState({
    message: '',
    from_name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_xitsyxk",
        "template_kz4u1qb",
        e.target,
        "SsPDxBPGWiWRatgMj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();

    setFeedback({
      message: '',
      from_name: ''
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">User Management System</h1>
        <p className="text-lg text-gray-700">Welcome to the User Management System. This website allows you to manage users efficiently. You can perform various operations such as creating, searching, updating, and deleting user information.</p>
      </header>

      <nav className="mt-8 bg-blue-400 p-4 rounded-lg border border-1">
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <li><a href="/create" className="text-white hover:text-gray-200">Create User</a></li>
          <li><a href="/search" className="text-white hover:text-gray-200">Search User</a></li>
          <li><a href="/update" className="text-white hover:text-gray-200">Update User</a></li>
          <li><a href="/delete" className="text-white hover:text-gray-200">Delete User</a></li>
          <li><a href="/display" className="text-white hover:text-gray-200">Display All Users</a></li>
        </ul>
      </nav>

      <div className="mt-8 border border-1 rounded-md w-66">
        <h3 className="text-xl font-semibold mb-4 mx-2 mt-4">Feedback</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mx-5">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={feedback.from_name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4 px-5">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              rows="4"
              required
            ></textarea>
          </div>
          <div className='flex flex-col justify-center items-center '>
          <button type="submit" className="bg-blue text-white py-2 px-4  rounded-md hover:bg-blue-600 mb-3" disabled={isSubmitting} >{isSubmitting ? 'Sending...' : 'Submit Feedback'}</button>
          <p className="mx-30">{stateMessage && <span>{stateMessage}</span>}</p>
          </div>
        </form>
      </div>

      <footer className="mt-8 text-center py-4">
        <p className="text-gray-600">Developed by Yash Patel</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yashpatel08" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:opacity-70 transition-colors duration-100">GitHub</a>
          <a href="https://www.linkedin.com/in/yash-patel-ab2740225/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:opacity-70 transition-colors duration-100">LinkedIn</a>
          <a href="https://twitter.com/Yashpatel0808" target="_blank" rel="noopener noreferrer" className="text-gray-600 hhover:opacity-70 transition-colors duration-100">Twitter</a>
          <a href="https://yashpatel-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:opacity-70 transition-colors duration-100">Website</a>
        </div>
      </footer>
    </main>
  );
}

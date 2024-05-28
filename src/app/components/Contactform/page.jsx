'use client'
import React, { useState, useEffect } from 'react';
import { Client, Databases, ID } from 'appwrite';

const Contactform = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null); // New state for success status

  // Log environment variables to verify they are loaded correctly
  useEffect(() => {
    console.log("Appwrite Endpoint:", process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
    console.log("Appwrite Project ID:", process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
  }, []);

  // Initialize Appwrite
  const client = new Client();

  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // cloud endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // project id

  const databases = new Databases(client);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Form data
    const data = {
      email,
      content,
    };

    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // Replace with your actual database ID
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID, // Replace with your actual collection ID
        ID.unique(), // Generate a unique ID for the document
        data
      );
      setIsSuccess(true);
      setMessage('Your message has been sent successfully!');
      setEmail('');
      setContent('');
    } catch (error) {
      setIsSuccess(false);
      setMessage('Failed to send your message. Please try again.');
      console.error('Error Details:', error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg font-poppins-thin mx-auto mt-10 bg-gray-800 p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-300">Email</label>
          <input
            type="email"
            className="mt-2 block w-full px-4 py-3 rounded-lg border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-300">Message</label>
          <textarea
            className="mt-2 block w-full px-4 py-3 rounded-lg border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-lg font-semibold rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {message && (
        <p className={`mt-6 text-lg font-bold ${isSuccess ? 'text-green-500' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Contactform;

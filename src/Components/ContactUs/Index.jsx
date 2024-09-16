import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('contactForm', JSON.stringify(formData));
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="text-center mb-8">
                <img src="logo-url" alt="3Z Bio Logo" className="mx-auto mb-4" style={{ width: '100px' }} />
                <h2 className="text-3xl font-bold mb-2">Contact US</h2>
                <p className="text-gray-600">
                    At 3Z Bio, we are dedicated to providing innovative medical solutions to enhance your health and well-being. Reach out to us for any inquiries.
                </p>
                <p className="mt-4 font-medium">Address: 607 Autumn St, Suite B303, Karachi</p>
            </div>

            <div className="bg-white max-w-2xl mx-auto p-8 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold text-center mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            onChange={handleChange} 
                            placeholder="Your Name" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={handleChange} 
                            placeholder="Your Email" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input 
                            type="text" 
                            name="phone" 
                            onChange={handleChange} 
                            placeholder="Your Phone Number" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea 
                            name="message" 
                            onChange={handleChange} 
                            placeholder="Your Message" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                            rows="4" 
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Send Message
                    </button>
                </form>
                {submitted && (
                    <div className="mt-4 p-4 border border-green-500 text-green-500 rounded-lg">
                        Thank you for your message. It has been sent.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactUs;

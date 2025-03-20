import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-20 container mx-auto p-4">
      <h1 className="text-4xl font-bold text-floraPink mb-8 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <button className="w-full bg-floraPink text-white px-6 py-3 rounded hover:bg-floraPink/80">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
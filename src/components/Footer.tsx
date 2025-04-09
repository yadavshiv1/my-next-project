import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-10 pb-6">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div>
          <h2 className="text-2xl font-bold">MyRestaurant</h2>
          <p className="text-sm text-gray-300 mt-2">Delicious food, unforgettable memories.</p>
        </div>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Book Table
        </button>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-600" />

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#menu" className="hover:text-yellow-400">Our Menu</a>
          <a href="#reserve" className="hover:text-yellow-400">Reserve</a>
          <a href="#reviews" className="hover:text-yellow-400">Review</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        <div className="flex gap-4 justify-start md:justify-end text-xl">
          <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-400"><FaMapMarkerAlt /></a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-300">
        <div>
          <h4 className="font-semibold text-white mb-1">Address</h4>
          <p>123 Flavor Street, Foodie City, FC 400001</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Timings</h4>
          <p>Mon–Sun: 11:00 AM – 11:00 PM</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Contact No.</h4>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Email</h4>
          <p>info@myrestaurant.com</p>
        </div>
      </div>
    </footer>
  );
}
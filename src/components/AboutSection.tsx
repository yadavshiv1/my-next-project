
interface AboutSectionProps {
    name: string;
  }

  
export default function AboutSection({ name }: AboutSectionProps) {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Restaurant</h2>
            <p className="text-gray-600 mb-4">
              Welcome to <span className="font-semibold text-yellow-600">MyRestaurant</span> – where passion meets flavor! Nestled in the heart of the city, we bring you handcrafted dishes inspired by global tastes and local traditions.
            </p>
            <p className="text-gray-600 mb-4">
              Our chefs carefully curate every meal using the freshest ingredients and timeless recipes. Whether you're here for a cozy dinner, a casual lunch, or a celebration, we promise unforgettable experiences.
            </p>
            <p className="text-gray-600 mb-4">
              📍 <span className="font-medium text-gray-800">Location:</span> 123 Flavor Street, Foodie City, FC 400001  
            </p>
            <p className="text-gray-600 mb-4">
              🕒 <span className="font-medium text-gray-800">Open Hours:</span> 11 AM - 11 PM (Mon - Sun)
            </p>
            <p className="text-gray-600">
              Come for the food, stay for the vibes. We can’t wait to serve you!
            </p>
          </div>
            <div className="w-full">
            <img
              src="/about/restaurant.jpg"
              alt="Our Restaurant"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        {name=="about"?(
            <div>
                Helooo
            </div>
        ):""}
      </section>
    );
  }
  

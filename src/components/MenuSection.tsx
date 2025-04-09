"use client";

interface AboutSectionProps {
    name: string;
  }

const menuItems = [
  { name: "Margherita Pizza", image: "/unnamed (1).jpg", shape: "circle" },
  { name: "Creamy Pasta", image: "/menu/pasta.jpg", shape: "box" },
  { name: "Veg Burger", image: "/unnamed (2).jpg", shape: "square" },
  { name: "Sushi Platter", image: "/unnamed (1).jpg", shape: "circle" },
  { name: "Paneer Tikka", image: "/unnamed (3).jpg", shape: "box" },
  { name: "Chocolate Dessert", image: "/unnamed (1).jpg", shape: "square" },
];

export default function MenuSection({ name }: AboutSectionProps) {
  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full";
      case "box":
        return "rounded-xl";
      default:
        return "rounded-md";
    }
  };

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Special Menu</h2>

        <div className="space-y-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-white shadow-lg p-4 rounded-lg text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-40 h-40 object-cover mx-auto mb-4 ${getShapeClass(item.shape)}`}
                  />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
                {menuItems[index + 1] && (
                  <div className="bg-white shadow-lg p-4 rounded-lg text-center">
                    <img
                      src={menuItems[index + 1].image}
                      alt={menuItems[index + 1].name}
                      className={`w-40 h-40 object-cover mx-auto mb-4 ${getShapeClass(menuItems[index + 1].shape)}`}
                    />
                    <p className="text-lg font-semibold">{menuItems[index + 1].name}</p>
                  </div>
                )}
              </div>
              {menuItems[index + 2] && (
                <div className="flex-1 bg-white shadow-lg p-4 rounded-lg text-center">
                  <img
                    src={menuItems[index + 2].image}
                    alt={menuItems[index + 2].name}
                    className={`w-52 h-52 object-cover mx-auto mb-4 ${getShapeClass(menuItems[index + 2].shape)}`}
                  />
                  <p className="text-xl font-semibold">{menuItems[index + 2].name}</p>
                </div>
              )}
            </div>
          )).filter((_, i) => i % 3 === 0)}
        </div>
      </div>
      <div className="flex justify-center py-4">
      <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Click For More
        </button>
      </div>
      {name=="menu"?(
            <div>
                Helooo
            </div>
        ):""}
    </section>
  );
}
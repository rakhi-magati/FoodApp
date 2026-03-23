export const categories = ["All", "Chicken Items", "Mutton Items", "Paneer Items", "Veg Items", "Fast Food"];

const safePrice = (price) => Number(price) || 0;

export const foodItems = [
  // Chicken Items
  { id: 1, name: "Chicken Biryani", price: safePrice(12.99), rating: 4.8, category: "Chicken Items", description: "Authentic dum biryani with tender chicken pieces.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80" },
  { id: 2, name: "Chicken Curry", price: safePrice(10.99), rating: 4.6, category: "Chicken Items", description: "Rich and spicy traditional chicken curry.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80" },
  { id: 3, name: "Chicken Fry", price: safePrice(9.99), rating: 4.7, category: "Chicken Items", description: "Crispy and spicy deep-fried chicken.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6e3?w=800&q=80" },

  // Mutton Items
  { id: 4, name: "Mutton Biryani", price: safePrice(15.99), rating: 4.9, category: "Mutton Items", description: "Richly flavored rice with slow-cooked mutton.", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80" },
  { id: 5, name: "Mutton Curry", price: safePrice(13.99), rating: 4.8, category: "Mutton Items", description: "Spicy and succulent mutton curry.", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80" },

  // Paneer Items
  { id: 6, name: "Paneer Butter Masala", price: safePrice(11.99), rating: 4.7, category: "Paneer Items", description: "Soft paneer cubes in a creamy tomato gravy.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc3?w=800&q=80" },
  { id: 7, name: "Kadai Paneer", price: safePrice(10.99), rating: 4.6, category: "Paneer Items", description: "Paneer cooked with bell peppers and ground spices.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80" },

  // Veg Items
  { id: 8, name: "Veg Biryani", price: safePrice(9.99), rating: 4.5, category: "Veg Items", description: "Aromatic rice dish with mixed vegetables.", image: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?w=800&q=80" },
  { id: 9, name: "Fried Rice", price: safePrice(8.99), rating: 4.4, category: "Veg Items", description: "Wok-tossed rice with fresh seasonal veg.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80" },
  { id: 10, name: "Noodles", price: safePrice(7.99), rating: 4.3, category: "Veg Items", description: "Hakka style spicy and tangy noodles.", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80" },

  // Fast Food
  { id: 11, name: "Pizza", price: safePrice(14.99), rating: 4.8, category: "Fast Food", description: "Wood-fired supreme pizza with extra cheese.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
  { id: 12, name: "Burger", price: safePrice(8.99), rating: 4.6, category: "Fast Food", description: "Classic juicy burger with crispy fries.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" },
  { id: 13, name: "Sandwich", price: safePrice(6.99), rating: 4.4, category: "Fast Food", description: "Grilled club sandwich with fresh veggies.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80" }
];

localStorage.clear(); // Clear localStorage on module load
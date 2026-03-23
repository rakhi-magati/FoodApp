import { useState, useEffect } from "react";
import Hero from "../Component/Hero";
import CategoryFilter from "../Component/CategoryFilter";
import FoodCard from "../Component/FoodCard";
import Services from "./Services";
import Contact from "./Contact";
import SupportChat from "../Component/SupportChat";
import ScrollTop from "../Component/ScrollTop";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortType, setSortType] = useState("");

  // 🔁 Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchText]);

  // 🔥 Smart Price
  const getSmartPrice = (category) => {
    const basePrices = {
      Chicken: 180,
      Beef: 220,
      Seafood: 250,
      Vegetarian: 120,
      Dessert: 90,
      Pasta: 160
    };
    const base = basePrices[category] || 150;
    return parseFloat((base + Math.random() * 50).toFixed(0));
  };

  // ✅ Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();

        const meals = data.meals || [];
        const formatted = meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions.slice(0, 80),
          image: meal.strMealThumb,
          category: meal.strCategory,
          price: getSmartPrice(meal.strCategory)
        }));

        setAllItems(formatted);
        setItems(formatted);

        const uniqueCategories = ["All", ...new Set(formatted.map(i => i.category))];
        setCategories(uniqueCategories);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔍 Filter + Sort (Same as Menu)
  useEffect(() => {
    if (!allItems.length) return;

    let filtered = [...allItems];

    if (debouncedSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (activeCategory !== "All") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (sortType === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setItems(filtered);
  }, [debouncedSearch, activeCategory, sortType, allItems]);

  const handleReset = () => {
    setSearchText("");
    setActiveCategory("All");
    setSortType("");
  };

  return (
    <div className="home-page">
      <Hero />

      <div className="container section">

        {/* 🔍 SAME FILTER UI */}
        <div  style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "20px"
        }}>
          <input
            className="finput"
            type="text"
            placeholder="Search food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select className="sortf" value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Price ↑</option>
            <option value="high">Price ↓</option>
          </select>

          <button className="ftbtn" onClick={handleReset}>Reset</button>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 📊 Count */}
        {!loading && (
          <p style={{ marginTop: "10px", color: "gray" }}>
            Showing {items.length} items
          </p>
        )}

        {/* 🔄 Loader */}
        {loading ? (
          <div className="text-center p-5">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <div className="row g-4 mt-2">
            {items.map(item => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <FoodCard item={item} />
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center p-5">
                <h3>No items found 😢</h3>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Extra Sections */}
      <Services />
      <Contact />
      <SupportChat />
      <ScrollTop />
    </div>
  );
};

export default Home;
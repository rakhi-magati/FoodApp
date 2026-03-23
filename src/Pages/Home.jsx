import { useState, useEffect } from "react";
import Hero from "../Component/Hero";
import CategoryFilter from "../Component/CategoryFilter";
import FoodCard from "../Component/FoodCard";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        if (data.meals) {
          const formattedMeals = data.meals.map(meal => ({
            id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            image: meal.strMealThumb,
            rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0 rating
            price: `$${(Math.floor(Math.random() * 20) + 5).toFixed(2)}`,
            description: meal.strInstructions.substring(0, 50) + "..."
          }));

          setMeals(formattedMeals);

          const uniqueCategories = ["All", ...new Set(formattedMeals.map(m => m.category))];
          setCategories(uniqueCategories);
        } else {
          setMeals([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const displayedMeals = activeCategory === "All"
    ? meals
    : meals.filter(meal => meal.category === activeCategory);

  return (
    <div className="home-page">
      <Hero />

      <div className="container section">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>Explore Our <span style={{ color: "var(--primary)" }}>Menu</span></h2>


          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
        {loading && (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}>
              <span className="visually-hidden">Loading Menu...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            Oops! Error loading the menu: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4 page-enter">
            {displayedMeals.map(item => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={item.id}>

                <div style={{ width: '100%' }}>
                  <FoodCard item={item} />
                </div>
              </div>
            ))}
            {displayedMeals.length === 0 && (
              <div className="col-12 text-center text-muted p-5">
                <h4>No items found in this category.</h4>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {/* <About /> */}
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

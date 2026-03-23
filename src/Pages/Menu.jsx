import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "../Component/CategoryFilter";
import FoodCard from "../Component/FoodCard";
import { FaDollarSign, FaStar, FaShoppingCart } from "react-icons/fa";

const Menu = () => {
    const [searchParams] = useSearchParams();
    const searchCategory = searchParams.get("category");
    const searchQueryParam = searchParams.get("search");

    const [activeCategory, setActiveCategory] = useState(searchCategory || "All");
    const [loading, setLoading] = useState(true);

    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const [searchText, setSearchText] = useState(searchQueryParam || "");
    const [debouncedSearch, setDebouncedSearch] = useState(searchText);
    const [sortType, setSortType] = useState("");

    // 🔥 Debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchText);
        }, 400);

        return () => clearTimeout(timer);
    }, [searchText]);

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
                    price: `$${(Math.floor(Math.random() * 20) + 5).toFixed(2)}`
                }));

                setAllItems(formatted);
                setItems(formatted);

                const uniqueCategories = ["All", ...new Set(formatted.map(i => i.category))];
                setCategories(uniqueCategories);

            } catch (err) {
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
        <div className="container section">
            <div style={{
                width: "100%",
                height: "300px",
                backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {/* Overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    borderRadius: "20px",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)"
                }}></div>

                {/* Text */}
                <div style={{
                    position: "relative",
                    color: "#fff",
                    textAlign: "center"
                }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
                        Delicious Food 🍕
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>
                        Taste the best dishes from around the world
                    </p>
                </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "2.5rem" }}>
                    Our <span style={{ color: "var(--primary)" }}>Menu</span>
                </h2>
                <p style={{ color: "var(--text-muted)" }}>
                    Discover delicious meals curated for you 🍽️
                </p>
            </div>

            <div style={{
                position: "sticky",
                top: "0",
                zIndex: 10,
                borderRadius: "10px",
                background: "#fff",
                padding: "15px 0",
                borderBottom: "1px solid #eee"
            }}>
                <div className="filter" style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "15px"
                }}>

                    <input
                        type="text"
                        placeholder="Search food..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            width: "220px"
                        }}
                    />

                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        style={{
                            padding: "10px",
                            borderRadius: "8px"
                        }}
                    >
                        <option value="">Sort</option>
                        <option value="low">Price ↑</option>
                        <option value="high">Price ↓</option>
                    </select>

                    <button
                        onClick={handleReset}
                        style={{
                            padding: "10px 15px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#eee",
                            cursor: "pointer"
                        }}
                    >
                        Reset
                    </button>
                </div>

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
            </div>

            {/* 📊 Result */}
            {!loading && (
                <p style={{ marginTop: "15px", color: "gray" }}>
                    Showing {items.length} items
                </p>
            )}

            {/* 🔄 Loader */}
            {loading ? (
                <div style={{ textAlign: "center", padding: "100px" }}>
                    <div className="spinner"></div>
                </div>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: "20px",
                        marginTop: "20px"
                    }}
                >
                    {items.map(item => (
                        <FoodCard key={item.id} item={item} />
                    ))}

                    {items.length === 0 && (
                        <div style={{
                            gridColumn: "1 / -1",
                            textAlign: "center",
                            padding: "50px"
                        }}>
                            <h3>No items found 😢</h3>
                            <p>Try different filters</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Menu;
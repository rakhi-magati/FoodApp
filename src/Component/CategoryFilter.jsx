const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {categories.map(cat => (
        <button 
          key={cat}
          className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4`}
          style={activeCategory !== cat ? { borderColor: 'var(--primary)', color: 'var(--primary)', background: 'transparent' } : {}}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

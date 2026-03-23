import React from 'react'

export default function About() {
  return (
    <div className="page-enter container section" style={{ minHeight: '100vh' }}>

      {/* HERO / ABOUT */}
      <div className="glass" style={{
        display: 'flex',
        gap: '40px',
        padding: '40px',
        maxWidth: '1100px',
        margin: '0 auto',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
            alt="Food"
            style={{
              width: '100%',
              borderRadius: '20px',
              maxHeight: '450px',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2.8rem' }}>
            Welcome to <span style={{ color: 'var(--primary)' }}>CraveBite</span>
          </h2>

          <p style={{ marginTop: '15px', lineHeight: '1.7' }}>
            CraveBite is your go-to destination for delicious, hygienic, and
            high-quality food. We blend tradition with modern taste to create
            unforgettable dining experiences.
          </p>

          <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
            Whether you're craving spicy biryani, juicy burgers, or healthy meals,
            we've got something special for you 🍽️
          </p>
        </div>
      </div>

      {/* FOOD GALLERY */}
      <div style={{ marginTop: '70px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Our Delicious Moments 🍴
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>

          {[
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
            "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
            "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="food"
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '15px'
              }}
            />
          ))}
        </div>
      </div>

      {/* CHEF SECTION */}
      <div className="glass" style={{
        marginTop: '70px',
        padding: '40px',
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>

        <img
          src="https://www.shutterstock.com/image-vector/cute-chef-girl-mascot-logo-600nw-2572732163.jpg"
          alt="chef"
          style={{
            width: '250px',
            borderRadius: '20px'
          }}
        />

        <div>
          <h3 style={{ color: 'var(--primary)' }}>Meet Our Master Chef 👨‍🍳</h3>
          <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
            Our chef brings years of experience and passion to every dish.
            From traditional recipes to modern fusion, every plate is crafted
            with perfection.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            "Cooking is not just a skill — it's an art of spreading happiness."
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ marginTop: '70px', textAlign: 'center' }}>
        <h2>Why Choose Us?</h2>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          {[
            "Fresh Ingredients 🌿",
            "Quick Delivery 🚀",
            "Affordable Prices 💰",
            "Top Quality Taste ⭐"
          ].map((item, i) => (
            <div key={i} className="glass" style={{
              padding: '15px 25px',
              borderRadius: '15px'
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div style={{ marginTop: '70px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Customer Reviews ❤️
        </h2>

        <div style={{
          display: 'flex',
          gap: '25px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>

          {[
            {
              name: "Ravi",
              text: "Amazing taste! Biryani is next level 🔥",
              img: "https://randomuser.me/api/portraits/men/11.jpg",
              rating: 5
            },
            {
              name: "Sneha",
              text: "Loved the ambience and food quality 😍",
              img: "https://randomuser.me/api/portraits/women/22.jpg",
              rating: 4
            },
            {
              name: "Arjun",
              text: "Best place for food lovers. Affordable too!",
              img: "https://randomuser.me/api/portraits/men/33.jpg",
              rating: 5
            },
            {
              name: "Ramya",
              text: "We ordered for a family dinner and everyone loved it! Will order again.",
              img: "https://randomuser.me/api/portraits/women/55.jpg",
              rating: 5
            },
            {
              name: "Arjun",
              text: "Best place for family doing time spent ",
              img: "https://randomuser.me/api/portraits/men/66.jpg",
              rating: 5
            },
            {
              name: "Ravalika",
              text: " i hope you guys are also enjoying for this place when you visit ",
              img: "https://randomuser.me/api/portraits/women/77.jpg"
              ,
              rating: 5
            }
            , {
              name: "sathish",
              text: "must tasting food and clean place for rich kids ",
              img: "https://randomuser.me/api/portraits/men/88.jpg",
              rating: 5
            },
            {
              name: "Harshtha",
              text: "Best place for food lovers. Affordable too!",
             img: "https://randomuser.me/api/portraits/women/99.jpg",
              rating: 5
            }
          ].map((r, i) => (
            <div key={i} className="glass" style={{
              padding: '25px',
              borderRadius: '20px',
              maxWidth: '260px',
              textAlign: 'center'
            }}>

              {/* Profile Image */}
              <img
                src={r.img}
                alt={r.name}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '10px'
                }}
              />

              {/* Name */}
              <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>
                {r.name}
              </h4>

              {/* Stars */}
              <div style={{ marginBottom: '10px', color: '#FFD700' }}>
                {"⭐".repeat(r.rating)}
              </div>

              {/* Review */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}>
                "{r.text}"
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* FOOTER QUOTE */}
      <div style={{
        marginTop: '80px',
        textAlign: 'center',
        padding: '30px',
        fontSize: '1.2rem',
        color: 'var(--primary)'
      }}>
        "Good food = Good mood 😋"
      </div>

    </div>
  )
}
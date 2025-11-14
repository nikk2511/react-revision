import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
      className = "res-logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMmhIpWCme1elHFfjYyQEBOrZmKTwVPrAc0wY6vQg5GK5EH1NTYDRbd0&s"
      alt="res-logo"/>
      <h3>
        Nikhil Foods
      </h3>
      <h5>Biryani, North Indian, Asian </h5>
      <h5>4.5 Stars</h5>

    </div>
  )
}


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard />

        </div> 
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className="LogoContainer">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

export default AppLayout;


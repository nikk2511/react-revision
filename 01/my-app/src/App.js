import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>
        Nikhil Foods
      </h3>

    </div>
  )
}


const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
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


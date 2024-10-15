import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-casino">
      <h1 className="text-center mb-4">About LithiumElectro</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="graphic">LithiumElectro Graphic</div>
          <p>
            LithiumElectro is at the forefront of online gaming, offering a unique blend of cutting-edge technology and classic casino excitement. Our platform is designed to provide an immersive and secure gaming experience for players around the world.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Features</h2>
          <ul className="list-group">
            <li className="list-group-item">State-of-the-art games</li>
            <li className="list-group-item">24/7 Customer support</li>
            <li className="list-group-item">Secure transactions</li>
            <li className="list-group-item">Regular promotions and bonuses</li>
            <li className="list-group-item">Mobile-friendly platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
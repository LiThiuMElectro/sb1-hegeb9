import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container py-5">
        <h1 className="text-center mb-5">Welcome to LithiumElectro</h1>
        <div className="row mb-5">
          <div className="col-md-6">
            <h2>About LithiumElectro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
              interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
              consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
            </p>
          </div>
          <div className="col-md-6">
            <h2>About Stream</h2>
            <p>
              Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc
              euismod nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
              consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
            </p>
          </div>
        </div>
        {/* Add more content here for infinite scroll effect */}
      </div>
    </div>
  );
};

export default Home;
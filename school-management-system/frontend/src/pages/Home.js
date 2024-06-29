import React from 'react';
import MainLayout from '../components/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="text-center mt-5">
        <h1>Welcome to the School Management System!</h1>
        <p>Your one-stop solution for managing all school-related activities.</p>
      </div>
    </MainLayout>
  );
};

export default Home;

import React from 'react';
import MainLayout from '../components/MainLayout';

const Dashboard = ({ role }) => {
  return (
    <MainLayout>
      <div className="text-center mt-5">
        <h1>{role} Dashboard</h1>
        <p>Welcome to your dashboard. Here you can manage your activities.</p>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

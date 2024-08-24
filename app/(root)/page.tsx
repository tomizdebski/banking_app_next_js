import HeaderBox from "@/components/HeaderBox";
import RightSIdebar from "@/components/RightSIdebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {

  const loggedIn = { firstName: 'Tomas', lastName: 'Garcia', email:'contact@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Acces and manage your account"
          
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.00}
          />
        </header>
        
      </div>
        <RightSIdebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.50},{ currentBalance: 150.50}]}/>
    </section>
  );
};

export default Home;

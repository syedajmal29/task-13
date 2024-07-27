import React from 'react';
import './App.css';

const plans = [
  {
    title: "FREE",
    price: "$0/month",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    disabledFeatures: [4, 5, 6, 7]
  },
  {
    title: "PLUS",
    price: "$9/month",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    disabledFeatures: [7]
  },
  {
    title: "PRO",
    price: "$49/month",
    features: [
      "Unlimited Users",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Unlimited Free Subdomains",
      "Monthly Status Reports",
    ],
    disabledFeatures: []
  }
];

const Card = ({ title, price, features, disabledFeatures }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>{price}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={disabledFeatures.includes(index) ? "disabled" : ""}>
            {feature}
          </li>
        ))}
      </ul>
      <button className="button">BUTTON</button>
    </div>
  );
};
const App = () => {
    return (
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            disabledFeatures={plan.disabledFeatures}
          />
        ))}
      </div>
    );
  };
  
  export default App;
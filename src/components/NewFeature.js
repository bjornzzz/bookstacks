import { useState, useEffect } from 'react';
import '../style/NewFeature.css';

function NewFeature() {
  const [text, setText] = useState('New books coming in!');
  const ads = ['Discover your new favorite book!', 'Get lost in a great story today!', 'Find your next page-turner!', 'Explore our latest releases!'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * ads.length);
      setText(ads[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-container">
      <p className="feature-text">{text}</p>
    </div>
  );
}

export default NewFeature;

import React from 'react';
import fluteImage from '../images/Flute.jpg';
import drumsImage from '../images/Drums.jpg';
import violenImage from '../images/Violin.jpg'
import clarinetImage from '../images/Clarinet.jpg';
// Sample item data with images and descriptions
const items = [
  {
    name: 'Drums Set',
    description: 'This is a pre-owned Drumset with the price of R1500',
    image: drumsImage , 
  },
  {
    name: 'Violin',
    description: 'A pre-owned Violin with a price of R3000',
    image: violenImage, 
  },
  {
    name: 'Clarinet',
    description: 'A pre-owned Clarinet with a brand new mouth piece sold for R1500',
    image: clarinetImage,
   },
  {
    name: 'Flute',
    description: 'A pre-owned Flute with a brand new mouth piece sold for R1500',
    image: fluteImage , 
  },
];

const HomePage = ({ onLikeItem }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to TuneDeck where we provide a wide range of instruments that are affordable and obtainable!</p>
      <div className="widgets">
        {items.map((item, index) => (
          <div key={index} className="widget">
            <img src={item.image} alt={item.name} className="widget-image"  width={100} height={100} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => onLikeItem(item.name)}>Like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import './stockorder.css';
import ItemCard from './itemcard';
import { Link } from 'react-router-dom';

interface Item {
    name: string;
    photoUrl: string;
}

const items: Item[] = [
  { name: 'Anker nano 65W', photoUrl: './src/assets/ankernano65w.jpeg' },
  { name: 'Power Flow 3 Cable', photoUrl: './src/assets/powerflow3.jpeg' },
  // Add more items here...
];

function Stockorder() {
  return (
    <div className="stock-order-container">
      <h1>Stock Order Page</h1>
      <div className="items-container">
        {items.map((item, index) => (
          <ItemCard key={index} name={item.name} photoUrl={item.photoUrl} />
        ))}
      </div>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Stockorder;

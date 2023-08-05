import './devicementainence.css';
import { Link } from 'react-router-dom';

function Devicementainence() {
  return (
    <div className="device-mentainence-container">
      <h1>Device Mentainence Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Devicementainence;

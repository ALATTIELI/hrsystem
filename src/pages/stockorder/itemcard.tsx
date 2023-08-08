import { Link } from 'react-router-dom';

interface ItemCardProps {
  id: string;
  name: string;
  photoUrl: string;
}

function ItemCard({ id, name, photoUrl }: ItemCardProps) {
  return (
    <Link to={`/product/${id}`} className="item-card">
      <img src={photoUrl} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
}

export default ItemCard;

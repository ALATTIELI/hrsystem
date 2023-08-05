import { useNavigate } from "react-router-dom";

interface Item {
  id: string;
  name: string;
  photoUrl: string;
}

function ItemCard({ id, name, photoUrl }: Item) {
  const navigate = useNavigate()
  const onClick_func = (id: string) => {
    navigate(`/product/${id}`)
  };
  return (
    <div
      className="item-card"
      onClick={() => {
        onClick_func(id);
      }}
    >
      <div className="image-container">
        <img src={photoUrl} alt={name} />
      </div>
      <div className="name-container">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default ItemCard;

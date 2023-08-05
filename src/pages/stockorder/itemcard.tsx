interface Item {
  name: string;
  photoUrl: string;
}

function ItemCard({ name, photoUrl }: Item) {
  return (
    <div className="item-card">
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

const ItemList = (items) => {
  return (
    <div>
      {items.items.map((i) => (
        <div
          key={i.card.info.id}
          className="m-2 p-2 border-pink-200 border-b-2 text-left"
        >
          <div className="py-3">
            <span>{i.card.info.name}</span>
            <span> ₹ {i.card.info.price / 100}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

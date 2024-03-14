import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (items) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleClick = (i) => {
    dispatch(addItem({ i }));
    console.log(i);
  };
  // items = { name: "maida", price: 3000 };
  return (
    <div>
      {items.items.map((i) => (
        <div
          key={i.card.info.id}
          className="m-2 p-2 border-[#DED0B6] border-b-2 text-left flex flex-wrap"
        >
          <div className="py-3 w-10/12 font-semibold">
            <span>{i.card.info.name} - </span>
            <span> ₹{i.card.info.price / 100}</span>
          </div>
          {/* <img src={CDN_URL + i.card.info}></img> */}
          <button
            onClick={() => {
              handleClick(i);
            }}
            className="w-2/12 px-3 py-3 border border-[#b0a694] flex justify-center items-center rounded-lg shadow-md"
          >
            ADD ➕
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

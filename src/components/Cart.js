import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (i) => {
    dispatch(removeItem(i));
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="font-extrabold py-20 text-3xl">Your Cart</h1>
        {cartItems.length ? (
          <>
            <button
              className="px-6 p-4 bg-green-100 m-2 rounded-lg text-green-95 font-semibold"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <div className="w-6/12 p-3 mx-auto shadow-lg my-5 rounded-lg font-bold">
              <div>
                {cartItems?.map((i) => (
                  <div
                    key={i.i.card.info.id}
                    className="m-2 p-2 border-[#DED0B6] border-b-2 text-left flex flex-wrap"
                  >
                    <div className="py-3 w-10/12 font-semibold">
                      <span>{i.i.card.info.name} - </span>
                      <span> ₹{i.i.card.info.price / 100}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleRemoveItem(i);
                      }}
                      className="w-2/12 px-3 py-3 border border-[#b0a694] flex justify-center items-center rounded-lg shadow-md"
                    >
                      Remove ➖
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h3 className="items-center p-4 font-semibold border border-[#b0a694]">
            {" "}
            Your cart is empty!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Cart;

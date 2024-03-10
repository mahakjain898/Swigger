import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(data.data);
  return (
    <div>
      <div className="w-6/12 p-3 mx-auto shadow-lg bg-[#EEE7DA] my-5 rounded-lg">
        <div
          className="ml-2 text-xl flex justify-between opacity-80"
          onClick={handleClick}
        >
          {data?.title} ({data?.itemCards?.length})
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
  s;
};

export default RestaurantCategory;

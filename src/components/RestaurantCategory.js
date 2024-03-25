import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(data);
  return (
    <div>
      <div className="w-6/12 p-3 mx-auto shadow-lg bg-[#f7f2e7] my-5 rounded-lg">
        <div className="flex justify-between" onClick={handleClick}>
          <div className="ml-2 text-xl flex justify-between opacity-80 font-semibold hover:cursor-pointer">
            {data?.title} ({data?.itemCards?.length})
          </div>
          <div>⇩</div>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
  s;
};

export default RestaurantCategory;

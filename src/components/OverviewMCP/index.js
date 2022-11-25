const Index = ({ item }) => {
  return (
    <>
      <div className="w-full aspect-57/34 flex border ">
        <div className="flex-none w-9/19">
          <img className="w-full h-full" src={item.Image} />
        </div>
        <div className="flex-none w-10/19 flex align-middle">
          <div className=" w-4/5 m-auto text-justify font-sans">
            <p className="font-semibold">ID: {item.Id}</p>
            <div className="h-2"></div>
            <p className="font-semibold">Name: {item.Name}</p>
            <div className="h-2"></div>
            <p className="font-semibold">Address: {item.Address}</p>
            <div className="h-2"></div>
            <p className="font-semibold">Capacity status: {item.Status}</p>
            <div className="h-2"></div>
            <p className="font-medium text-gray-400">{item.Des}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

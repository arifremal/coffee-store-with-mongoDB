const CoffeCard = ({ coffee }) => {
  const { name, quantity, details, category, taste, supplier, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
      <div className="flex justify-between w-full">
      <div>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{details}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4 ">
            <button className="btn btn-active">View</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CoffeCard;

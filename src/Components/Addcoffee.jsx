import Swal from "sweetalert2";

const Addcoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      details,
      category,
      taste,
      supplier,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold ">add coffeee</h1>

      <form onSubmit={handleAddCoffee}>
        {/* name quantity */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">quantity</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* su;pplier teaste */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">supplier</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="supplier"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">taste</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* cat details */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">details</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photo url */}
        <div className=" ">
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                placeholder="category"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input type="submit" value="Add Coffee" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default Addcoffee;

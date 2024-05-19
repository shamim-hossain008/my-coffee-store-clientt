import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // Send data to the server
    fetch(
      "https://my-coffee-store-server-kj6dglhun-shamims-projects-88fb060a.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div>
      <div className="min-h-screen text-center">
        <div className="card-body  items-center">
          <div className="shrink-0 bg-red-50 p-24 rounded-xl  shadow-2xl ">
            <h3 className="text-3xl text-extrabold text-pretty pb-3">
              Add New Coffee
            </h3>
            <p>
              The "Add New Coffee" functionality serves to enrich the coffee
              database or menu by enabling users, such as administrators, coffee
              shop owners, or authorized personnel, to add details of new coffee
              products to the existing collection.
            </p>
            <form onSubmit={handleAddCoffee}>
              {/* form maine and quantity row */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Coffee Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form supplier row */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Supplier Name </span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form category and details row */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form photo URL row */}
              <div className="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

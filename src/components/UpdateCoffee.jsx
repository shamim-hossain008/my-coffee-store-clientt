import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // Send data to the server
    fetch(
      `https://my-coffee-store-server-kj6dglhun-shamims-projects-88fb060a.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="min-h-screen text-center">
      <div className="card-body  items-center">
        <div className="shrink-0 bg-red-50 p-24 rounded-xl  shadow-2xl ">
          <h3 className="text-3xl text-extrabold text-pretty pb-3">
            Update Coffee :{name}
          </h3>
          <p>
            The "Add New Coffee" functionality serves to enrich the coffee
            database or menu by enabling users, such as administrators, coffee
            shop owners, or authorized personnel, to add details of new coffee
            products to the existing collection.
          </p>
          <form onSubmit={handleUpdateCoffee}>
            {/* form maine and quantity row */}
            <div className="md:flex gap-2 ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;

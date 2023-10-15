import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`https://coffee-store-server-nu8sh2bp7-anikdev100-gmailcom.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert('coffee added successfully')
                }
            })
    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-center text-6xl font-extrabold mt-8 mb-8">Update a coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-5 justify-center items-center mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <span>Coffee Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Coffee name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Coffee Quantity</span>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={quantity}
                                    placeholder="Quantity"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form supplier and taste row */}
                    <div className="md:flex gap-5 justify-center items-center mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <span>Supplier</span>
                                <input
                                    type="text"
                                    name="supplier"
                                    defaultValue={supplier}
                                    placeholder="Supplier"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <span>Taste</span>
                                <input
                                    type="text"
                                    name="taste"
                                    defaultValue={taste}
                                    placeholder="Taste"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form category and details row */}
                    <div className="md:flex gap-5 justify-center items-center mb-8">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <span>Category</span>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={category}
                                    placeholder="Category"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Details</span>
                                <input
                                    type="text"
                                    name="details"
                                    defaultValue={details}
                                    placeholder="Details"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form photo url row */}
                    <div className="md:flex gap-5 justify-center items-center mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <span>Photo</span>
                                <input
                                    type="text"
                                    name="photo"
                                    defaultValue={photo}
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <input type="submit" value="Update Coffee" className="btn btn-neutral btn-block font-bold text-white" />




                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;
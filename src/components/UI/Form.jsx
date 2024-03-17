import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Form = ({onSendData,onCancel}) => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        company: "",
        type: "",
        startDate: "",
        endDate: "",
        detail: "",
    });
    const submitHandler = (event) => {
        event.preventDefault();

        setFormData({
            name: "",
            position: "",
            company: "",
            type: "",
            startDate: "",
            endDate: "",
            detail: "",
        });
        onSendData(formData);
        onCancel()
    };
    const ChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <form className="w-full z-50" onSubmit={submitHandler}>
            <div className="mb-1">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={ChangeHandler}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="mb-1">
                <label
                    htmlFor="position"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Position
                </label>
                <input
                    type="text"
                    id="position"
                    onChange={ChangeHandler}
                    name="position"
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="company"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    onChange={ChangeHandler}
                    name="company"
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="mb-1">
                <label
                    htmlFor="type"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Type
                </label>
                <select
                    id="type"
                    name="type"
                    onChange={ChangeHandler}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">---Choose Any Option---</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Freelance">Freelance</option>
                </select>
            </div>

            <div className="flex justify-between gap-1">
                <div className="mb-1 w-1/2">
                    <label
                        htmlFor="startDate"
                        className="block text-gray-700 w-70 font-semibold mb-2"
                    >
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        onChange={ChangeHandler}
                        name="startDate"
                        className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-1 w-1/2">
                    <label
                        htmlFor="endDate"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        End Date
                    </label>
                    <input
                        type="date"
                        onChange={ChangeHandler}
                        id="endDate"
                        name="endDate"
                        className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="mb-1">
                <label
                    htmlFor="description"
                    className="block text-gray-700 font-semibold mb-2"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="detail"
                    onChange={ChangeHandler}
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
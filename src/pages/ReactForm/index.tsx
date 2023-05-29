import { useState } from "react";

let counter = 0;

export default function ReactForm() {
  const [values, setValues] = useState({ firstName: "", lastName: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl font-semibold mb-10">React Hook Form Practice</h2>

      <p className="mb-10">
        Render: <span>{counter++}</span>
      </p>

      <form
        className="w-[450px] p-10 flex flex-col bg-[#f2f4f6] rounded-lg gap-8"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <div className="mb-1 flex text-sm">
            <span>First Name</span>
            <span className="text-[#e50000] ml-1">*</span>
          </div>

          <input
            name="firstName"
            className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <div className="mb-1 flex text-sm">
            <span>Last Name</span>
            <span className="text-[#e50000] ml-1">*</span>
          </div>
          <input
            name="lastName"
            className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          className="bg-[#00CCAA] text-white rounded-[6px] px-4 py-3"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

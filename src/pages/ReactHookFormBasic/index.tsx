import { useForm } from "react-hook-form";

let counter = 0;

export default function ReactHookFormBasic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl font-semibold mb-10">React Hook Form Practice</h2>

      <p className="mb-10">
        Render: <span>{counter++}</span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[450px] p-10 flex flex-col bg-[#f2f4f6] rounded-lg gap-8"
      >
        <label className="flex flex-col">
          <div className="mb-1 flex text-sm">
            <span>First Name</span>
            <span className="text-[#e50000] ml-1">*</span>
          </div>

          <input
            {...register("firstName", { required: true })}
            className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
          />

          {errors.firstName && (
            <span className="text-[#e50000] ml-1 text-sm">
              x This field is required
            </span>
          )}
        </label>
        <label className="flex flex-col">
          <div className="mb-1 flex text-sm">
            <span>Last Name</span>
            <span className="text-[#e50000] ml-1">*</span>
          </div>
          <input
            {...register("lastName", { required: true })}
            className="px-4 py-2 border border-[#eaecee] rounded-[6px] focus:border-[#535961]"
          />
          {errors.lastName && (
            <span className="text-[#e50000] ml-1 text-sm">
              x This field is required
            </span>
          )}
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

const FillableInput = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="py-2 px-4 w-full rounded-md border-2 bg-gray-50 focus:border-red-500 outline-none"
    />
  );
};

export default FillableInput;

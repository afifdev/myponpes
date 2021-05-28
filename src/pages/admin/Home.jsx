const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        <p className="text-red-500">Fast Access - Transactions</p>
        <p className="font-medium text-2xl flex-grow">Transactions</p>
        <button className="px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-offset-2 focus:ring-red-500 text-white outline-none focus:outline-none">
          Create New Transaction
        </button>
      </div>
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        <p className="text-red-500">Fast Access - Santri</p>
        <p className="font-medium text-2xl flex-grow">Santri</p>
        <button className="px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-offset-2 focus:ring-red-500 text-white outline-none focus:outline-none">
          Register Santri
        </button>
      </div>
      <div className="row-span-3 flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        <p className="text-red-500">Fast Access - Santri</p>
        <p className="font-medium text-2xl">Search Santri</p>
        <form className="flex-grow w-full">
          <div className="flex justify-between">
            <input
              type="text"
              name="search_santri"
              className="py-1 px-2 rounded-md w-full mr-2 outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="py-1 px-2 rounded-md bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-offset-2 focus:ring-red-500 text-white outline-none focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
        ipsum nam quasi, nisi quas voluptatibus iure repudiandae rerum nostrum
        aliquid perspiciatis amet, ab explicabo obcaecati, laborum vero dicta
        dignissimos.
      </div>
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
        ipsum nam quasi, nisi quas voluptatibus iure repudiandae rerum nostrum
        aliquid perspiciatis amet, ab explicabo obcaecati, laborum vero dicta
        dignissimos.
      </div>
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
        ipsum nam quasi, nisi quas voluptatibus iure repudiandae rerum nostrum
        aliquid perspiciatis amet, ab explicabo obcaecati, laborum vero dicta
        dignissimos.
      </div>
      <div className="flex flex-col justify-between items-start bg-gray-200 rounded-lg p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
        ipsum nam quasi, nisi quas voluptatibus iure repudiandae rerum nostrum
        aliquid perspiciatis amet, ab explicabo obcaecati, laborum vero dicta
        dignissimos.
      </div>
    </div>
  );
};

export default Home;

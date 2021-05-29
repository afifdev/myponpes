import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { PrimaryLinkButton, FillableInput } from "../../components/atomics";

const AdminHome = () => {
  const [santris, setSantri] = useState(null);
  const [username, setUsername] = useState("");
  const { user } = useContext(UserContext);

  const searchSantri = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`admin/user?username=${username}`, config);
    setSantri(data.data);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 sm:grid-rows-6">
      <div className="flex flex-col justify-between rounded sm:rounded-lg p-2 sm:p-4 bg-gray-50 border-2">
        <div className="flex flex-col">
          <p className="text-red-500">Fast Access - Transactions</p>
          <p className="text-xl sm:text-2xl font-medium">Transactions</p>
        </div>
        <div className="flex-grow">
          <PrimaryLinkButton to="/transactions/create">
            New transaction
          </PrimaryLinkButton>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded sm:rounded-lg p-2 sm:p-4 bg-gray-50 border-2">
        <div className="flex flex-col">
          <p className="text-red-500">Fast Access - Santri</p>
          <p className="text-xl sm:text-2xl font-medium">Santri</p>
        </div>
        <div className="flex-grow">
          <PrimaryLinkButton to="/santri/create">New Santri</PrimaryLinkButton>
        </div>
      </div>
      <div className="sm:row-span-6 flex flex-col justify-between rounded sm:rounded-lg p-2 sm:p-4 bg-gray-50 border-2 h-8xl mb-2">
        <div className="flex flex-col overflow-y-auto pr-2">
          <p className="text-red-500">Fast Access - Transactions</p>
          <p className="text-xl sm:text-2xl font-medium">
            Incomplete transactions
          </p>
          <div className="flex justify-between items-center p-2 bg-gray-300 rounded sm:rounded-md my-1">
            <div>
              <p className="text-gray-400">02 Juli 2002</p>
              <p className="text-lg sm:text-xl font-medium">
                Pembayaran pondok putra
              </p>
              <p>Rp 500000</p>
            </div>
            <PrimaryLinkButton to="/transactions/18245">
              View detail
            </PrimaryLinkButton>
          </div>
        </div>
      </div>
      <div className="sm:row-span-5 lg:col-span-2 bg-gray-50 border-2 p-2 sm:p-4 rounded sm:rounded-lg mb-2"></div>
    </div>
  );
};

export default AdminHome;

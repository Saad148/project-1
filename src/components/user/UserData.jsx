import { useState } from "react";
import { Eye } from "lucide-react";
import Modal from "../Modal";
import UserDetails from "./UserDetails";

const UserData = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr className=" font-[poppins] text-sm border  hover:bg-gray-400 even:bg-gray-200 border-gray-300 ">
        <td className="pl-2 py-4">{user.firstName}</td>
        <td>{user.lastName}</td>
        <td className="pl-10">{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.company.name}</td>
        <td className="cursor-pointer flex flex-row border rounded-lg text-lg mt-1.5 justify-center items-center py-1.5 bg-blue-500 text-white">
          <button onClick={() => setOpen(true)} className="cursor-pointer px-1">
            View
          </button>
          <Eye />
        </td>
      </tr>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <>
          <UserDetails user={user} />
        </>
      </Modal>
    </>
  );
};

export default UserData;

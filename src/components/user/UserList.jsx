import UserData from "./UserData";
import Loading from "../Loading";
import FetchError from "../FetchError";

const UserList = ({ users, isLoading, fetchError }) => {
  return (
    <table className="text-left border border-gray-400 container mx-auto">
      <thead className="bg-gray-300">
        <tr className="text-base font-[poppins]">
          <th className="pl-2 p-1">First Name</th>
          <th>Last Name</th>
          <th className="pl-10">Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      {isLoading && <Loading />}
      {fetchError && <FetchError />}
      {!isLoading && !fetchError && (
        <tbody className="border">
          {users.map((user) => (
            <UserData key={user.id} isLoading={isLoading} user={user} />
          ))}
        </tbody>
      )}
    </table>
  );
};

export default UserList;

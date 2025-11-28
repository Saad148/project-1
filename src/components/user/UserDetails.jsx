const UserDetails = ({ user }) => {
  return (
    <>
      <p className="font-bold font-[poppins] text-2xl">User Details</p>
      <hr className="border-gray-300" />
      <div className="font-[poppins] font-medium text-lg overflow-auto flex flex-wrap flex-col pt-3">
        <p>
          <strong>First Name: </strong>
          {user.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {user.lastName}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
        <p className="pb-5">
          <strong>Phone: </strong>
          {user.phone}
        </p>
      </div>
      <hr className="border-gray-300" />
      <p className="font-bold font-[poppins] text-2xl py-2">Company Details</p>
      <div className="font-[poppins] font-medium text-lg overflow-auto flex flex-wrap flex-col pt-1">
        <p>
          <strong>Name: </strong>
          {user.company.name}
        </p>
        <p>
          <strong>Address: </strong>
          {user.company.address.address}
        </p>
        <p>
          <strong>Department: </strong>
          {user.company.department}
        </p>
        <p className="pb-5">
          <strong>Title: </strong>
          {user.company.title}
        </p>
      </div>
    </>
  );
};

export default UserDetails;

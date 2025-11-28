const SearchItems = ({ isLoading, users, input, handleChange }) => {
  return (
    <>
      {users.length === 0 && !isLoading && (
        <p className="fixed top-[50%] left-[45%]">Nothing to display</p>
      )}

      <form
        className=" container text-center mx-auto py-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="border border-gray-300 py-2.5 pl-2 bg-gray-200 rounded-[10px] w-full"
          type="text"
          placeholder="Search Here"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default SearchItems;

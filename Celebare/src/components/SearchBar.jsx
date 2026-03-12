function SearchBar({ search, onSearch }) {
  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={onSearch}
        className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default SearchBar;

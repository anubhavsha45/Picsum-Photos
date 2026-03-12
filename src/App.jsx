import { useState, useMemo, useCallback } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import PhotoGrid from "./components/PhotoGrid";
import SearchBar from "./components/SearchBar";
import { useFavorites } from "./context/favoritesReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const { favorites, dispatch } = useFavorites();

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold">Photo Gallery</h1>
        <p className="text-gray-500">Browse photos from Picsum</p>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <SearchBar search={search} onSearch={handleSearch} />

        <PhotoGrid
          photos={filteredPhotos}
          favorites={favorites}
          dispatch={dispatch}
        />
      </main>
    </div>
  );
}

export default App;

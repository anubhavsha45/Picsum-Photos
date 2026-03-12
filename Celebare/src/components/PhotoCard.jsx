function PhotoCard({ photo, favorites, dispatch }) {
  const isFavorite = favorites.some((fav) => fav.id === photo.id);

  function toggleFavorite() {
    dispatch({ type: "TOGGLE_FAVORITE", payload: photo });
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100">
      <div className="relative">
        <img
          src={`https://picsum.photos/id/${photo.id}/400/260`}
          alt={photo.author}
          loading="lazy"
          className="w-full h-52 object-cover"
        />

        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase">Photographer</p>
        <p className="text-sm font-semibold">{photo.author}</p>
      </div>
    </div>
  );
}

export default PhotoCard;

import PhotoCard from "./PhotoCard";

function PhotoGrid({ photos, favorites, dispatch }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favorites={favorites}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;

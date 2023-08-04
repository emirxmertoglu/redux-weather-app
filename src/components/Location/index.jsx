import { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);
  console.log("🚀 ~ file: index.jsx:5 ~ Location ~ location:", location);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      console.log({ location });
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter a city name"
        onChange={handleChange}
        className="flex-1"
      />

      <button type="submit">🔍</button>
    </form>
  );
};

export default Location;

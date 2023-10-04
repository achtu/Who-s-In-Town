import React, { useState } from "react";
import ArtistCard from "../components/ArtistCard";
import SearchEngine from "../components/SearchEngine";
export default function Home() {
  const [artistName, setArtistName] = useState({
    name: undefined,
  });

  const app_id = "123";
  async function fetchArtistData() {
    const baseUrl = "https://rest.bandsintown.com";

    const url = `${baseUrl}/artists/${artistName}?app_id=${encodeURIComponent(
      app_id
    )}`;

    try {
      const response = await fetch(url);
      const artistData = await response.json();

      setArtistName({
        name: artistData.name,
        img: artistData.image_url,
      });
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchArtistData();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchEngine
        artistName={artistName}
        handleSubmit={handleSubmit}
        setArtistName={setArtistName}
      />

      {artistName.name ? (
        <ArtistCard img={artistName.img} name={artistName.name} />
      ) : (
        <p>Start searching</p>
      )}
    </div>
  );
}

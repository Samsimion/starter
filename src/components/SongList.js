import React from "react";
import SongCard from "./SongCard";
import styles from "./SongList.module.css";

function SongList({ songs }) {
  return (
    <div className={styles.songList}>
      {songs.length > 0 ? (
        songs.map((song) => <SongCard key={song.trackId} song={song} />)
      ) : (
        <p>No songs found. Try searching above 🎵</p>
      )}
    </div>
  );
}

export default SongList;
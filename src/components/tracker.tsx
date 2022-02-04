import { useState, KeyboardEvent } from "react";

import './styles.css'

export interface TrackerProps {
  id: string
  title: string
  thumbnailUrl: string
  handleEditTitle: (title: string, id: string) => void
}

export const Tracker = ({ id, title, thumbnailUrl, handleEditTitle }: TrackerProps) => {
  const [idEdit, setIdEdit] = useState(false);


  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setIdEdit(!idEdit)
    }
  }

  return (
    <div>
      {idEdit ? (
        <input
          value={title}
          onChange={(event) => handleEditTitle(event.target.value, id)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <h2>{title}</h2>
      )}
      
      <img src={thumbnailUrl} alt={title} onClick={() => setIdEdit(!idEdit)} />
    </div>
  );
};
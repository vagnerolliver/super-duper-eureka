import { useEffect, useState } from "react";


import { Tracker } from "../components/tracker";

export interface TrackerTypes {
  id: string
  title: string
  thumbnailUrl: string 
}

export function PageTracker() {
  const [track, setTrack] = useState<TrackerTypes[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6')
      .then(response => response.json())
      .then((data) => setTrack(data))
      .catch((error) => console.log(error))
  }, []);

  function onHandleEditTitle(title: string, id: string) {
    const trackList = track.map((trackItem) => {
      if (trackItem.id === id) {
        trackItem.title = title
      }

      return trackItem
    })

    setTrack(trackList)      
  }

  return (
    <div className="App">
      {track.map((item) => (
        <Tracker
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
          handleEditTitle={onHandleEditTitle}
        />
      ))}
    </div>
  );
}
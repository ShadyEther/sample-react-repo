
import React from 'react'

interface TrackProps {
    track: Track;
  }

 const LibraryItemComponent: React.FC<TrackProps> = ({ track }) => {
  return (
    <div>{track.name}</div>
  )
}

export default LibraryItemComponent
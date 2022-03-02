import React, { useState, useEffect } from 'react';
import { getItem } from '@/hooks/storage';
import VideoList from '../VideoList';

const StoredVideoTab = () => {
  const [storedVideo, setStoredVideo] = useState([]);

  
	useEffect(() => {
		if (getItem("videos")) {
      setStoredVideo(getItem("videos"));
			}
		return;
  }, []);


  return (
    <>
    <VideoList props={storedVideo} />
  </>
  );
}

export default StoredVideoTab;

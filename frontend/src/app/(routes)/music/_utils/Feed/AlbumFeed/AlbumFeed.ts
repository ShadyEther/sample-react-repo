import axiosInstance from "../../axiosInstance";





export const getAlbumFeed=async ()=>{
  const options = {
    method: 'GET',
    url: '/albums/',
    params: {
      client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID,
      // imagesize: '200',
      limit:'5'

    },
  };
    var albumFeed=[]
    try{
        const response = await axiosInstance.request(options) // Adjust the endpoint as needed      
        // albumFeed=response.data
        // console.log(response.data.results)
        albumFeed=response.data.results
        return albumFeed
      }
      catch(error){
        console.error('Error fetching data', error);
        
      }
      // console.log(albumFeed)
      // return albumFeed
      
}

export const getAlbumFeedByOffset=async (offset: any)=>{
  const options = {
    method: 'GET',
    url: '/albums/',
    params: {
      client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID,
      // imagesize: '200',
      // limit:'5',
      offset:offset,

    },
  };
    var albumFeed=[]
    try{
        const response = await axiosInstance.request(options) // Adjust the endpoint as needed      
        // albumFeed=response.data
        // console.log(response.data.results)
        albumFeed=response.data.results
        return albumFeed
      }
      catch(error){
        console.error('Error fetching data', error);
        
      }
      // console.log(albumFeed)
      // return albumFeed
      
}

export const getAlbumTracks=async (trackid: any)=>{
  const options = {
    method: 'GET',
    url: '/albums/tracks',
    params: {
      client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID,
      id:trackid,
      imagesize: '600',
      limit:'5'

    },
  };
    var albumFeedTracks=[]
    try{
        const response = await axiosInstance.request(options) // Adjust the endpoint as needed      
        albumFeedTracks=response.data.results
        return albumFeedTracks
      }
      catch(error){
        console.error('Error fetching data', error);
        
      }
      // console.log(albumFeed)
      // return albumFeedTracks
      
}




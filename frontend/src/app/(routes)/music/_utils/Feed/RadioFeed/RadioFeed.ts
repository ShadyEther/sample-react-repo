import axiosInstance from "../../axiosInstance";





export const getRadioFeed=async ()=>{
  const options = {
    method: 'GET',
    url: '/radios/',
    params: {
      client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID,
      // imagesize: '200',
      limit:'5'

    },
  };
    var radiofeed=[]
    try{
        const response = await axiosInstance.request(options) // Adjust the endpoint as needed      
        // radiofeed=response.data
        // console.log(response.data.results)
        radiofeed=response.data.results
        return radiofeed
      }
      catch(error){
        console.error('Error fetching data', error);
        
      }
      // console.log(radiofeed)
      return radiofeed
      
}

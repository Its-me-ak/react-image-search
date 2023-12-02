import axios from "axios";

const searchImages = async (term) =>{
 const response =  await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID vTmuDDy6PVzQPwMcUss6kwqP9ufPCvc_htEB1QTjxMk'
        },

        params:{
            query: term,
        }
    });


    return response.data.results;
};

export default searchImages;
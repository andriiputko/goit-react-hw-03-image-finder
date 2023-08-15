import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = "38811560-071be7e6435471d68e05f9ea6";

export async function getPhotos(searchQuery, page) {
    const response = await axios.get(
      `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  };





// export const h = async () => {
//     // const params = new URLSearchParams ({
//     //     q: searchQuery,
//     //     page,
//     //     per_page
//     // })
//     const responce = await fetch(`${BASE_URL}/?key=${KEY}&q=nature}`)
//     if (!responce.ok) {
//         throw new Error("Something went wrong")
//     }
//     return responce.json;
    
// };


// // id, searchQuery, page, per_page, webformatURL, largeImageURL
import axios from 'axios';

const myKey = '38579369-eeb8272d66c6603b69812822b';

export const fetchPixabay = async () => {
  return await fetch(`https://pixabay.com/api/?q=dog&page=3&per_page=12&key=${myKey}&image_type=photo&orientation=horizontal`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

export const fetchPixabayAxios = async () => {
    return await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`);
};
export default function fetchPixabay() {
  const myKey = '38579369-eeb8272d66c6603b69812822b';
  return fetch(`https://pixabay.com/api/?q=cat&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

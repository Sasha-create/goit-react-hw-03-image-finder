import axios from "axios";

const fetchImages = ({ currentPage = 1, searchQuery = "", pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=21313028-b99aca8e3911f90d2c8e33bee&image_type=photo&orientation=horizontal`
    )
    .then((response) => response.data.hits);
};

export default fetchImages;

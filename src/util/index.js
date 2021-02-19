import axios from 'axios';
const getData = ({ searchText, page = 1, url = undefined }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url ?? `https://rickandmortyapi.com/api/character/?name=${searchText}&page=${page}`,
    })
      .then(function (response) {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(e => {
        console.error(e);
        resolve([]);
      });
  });
};

export { getData };

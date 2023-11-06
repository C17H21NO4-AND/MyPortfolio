import helloSectionsData from './helloSections.json';

export function getHelloSectionsContent() {
  // return axios.get("/url")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (helloSectionsData) {
        resolve(helloSectionsData)
      } else {
        reject("data does not exist")
      }
    }, 300)
  });
}

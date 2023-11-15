import helloSectionsData from "./helloSections.json";
import footerInformation from "./footerInformation.json";

export function getHelloSectionsContent() {
  // return axios.get("/url")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (helloSectionsData) {
        resolve(helloSectionsData);
      } else {
        reject("data does not exist");
      }
    }, 300);
  });
}

export async function getFooterContent() {
  // try {
  //   const response = await fetch("https://informationFooter.json");
  //   const data = await response.json();
  //   console.log(data)
  //   return data;
  // } catch (error) {
  //   throw new Error("Failed to fetch footer content");
  // }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (footerInformation) {
        resolve(footerInformation);
      } else {
        reject("data does not exist");
      }
    }, 300);
  });
}

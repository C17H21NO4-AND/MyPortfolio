import helloSectionsData from "./helloSections.json";
import footerInformation from "./footerInformation.json";
import api from "./base";
import { useQuery } from "graphql-hooks";

/*
  CRUD (create, read, update, delete)
  get - зчитати
  post - створити
  put - оновити
  delete - усунення
  options - запит доступних методів

  [protocol]://   [domain] / [path] 
  Path:

  GET: [path]/project
  GET: [path]/project/[:id]
  GET: https://example.com/user
  GET: https://example.com/user/uuid1
  GET: https://example.com/project
*/

const HOMEPAGE_QUERY = `{
    allHellosections {
      id
      classname
      _status
      _firstPublishedAt
      buttontext
      description
      title
    }
    _allHellosectionsMeta {
      count
    }
  }`;

const PROLECT_QUERY = `
  query MyQuery {
    allProjects(orderBy: _createdAt_ASC){
      id
      image {
        alt
        url
      }
    }
  }`;
export function useProjectsContent() {
  const { loading, error, data } = useQuery(PROLECT_QUERY);
  return { data: data?.allProjects ?? [], loading, error };
}

export function useHelloSectionsContent() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  return {
    data: data?.allHellosections ?? [],
    loading,
    error,
  };
  // return api.post("/path");

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (helloSectionsData) {
  //       resolve(helloSectionsData);
  //     } else {
  //       reject("data does not exist");
  //     }
  //   }, 300);
  // });
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

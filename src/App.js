import { useState, useEffect } from "react";
import "./App.css";
import HelloSection from "./components/HelloSection";
import { getHelloSectionsContent } from "./services/api";
import SocialContent from "./components/SocialContent/SocialContent";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from './components/Footer'


function App() {
  const [helloSections, setHelloSections] = useState([]);
  const helloSections1 = helloSections.slice(0, 2);
  const helloSections2 = helloSections.slice(2);
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    async function fetch() {
      try {
        const data = await getHelloSectionsContent();
        setHelloSections(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>Is loading...</div>
      </div>
    );
  }

  return (
    <div className="App text-fuchsia-100">
      <div className="topBar bg-black h-20 md:h-14 sm:h-10 flex items-center justify-center fixed w-full">
        <img className="border-2 border-blue-500 w-10 h-10 bg-blue-100 my-auto" />
      </div>

      {helloSections1.map(
        ({ id, buttonText, description, text, className }) => (
          <HelloSection
            key={id}
            className={className}
            title={text}
            description={description}
            buttonText={buttonText}
          />
        )
      )}

        <MyProjects/>
      {helloSections2.map(
        ({ id, buttonText, description, text, className }) => (
          <HelloSection
            key={id}
            className={className}
            title={text}
            description={description}
            buttonText={buttonText}
          />
        )
      )}
        <SocialContent/>

        
     <Footer />

        

      {/* <HelloSection data={"asdasdad "} />
        <HelloSection data={"iuqwrhw "} /> */}
    </div>
  );
}

export default App;

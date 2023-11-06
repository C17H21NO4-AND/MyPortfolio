import { useState, useEffect } from "react";
import "./App.css";
import HelloSection from "./components/HelloSection";
import { getHelloSectionsContent } from "./services/api";

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

      <div className="myProjects h-auto bg-white flex-col justify-start  items-center text-left"></div>

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

      <div className="socialContent h-3/6 bg-white text-slate-950">
        <div className="flex justify-center pt-10">Social network</div>
        <div className="flex justify-center  flex-row pt-24">
          <img className="w-10 h-10 bg-slate-500 border-2 border-gray-900 mx-7" />
          <img className="w-10 h-10 bg-slate-500 border-2 border-gray-900 mx-7" />
          <img className="w-10 h-10 bg-slate-500 border-2 border-gray-900 mx-7" />
          <img className="w-10 h-10 bg-slate-500 border-2 border-gray-900 mx-7" />
        </div>
      </div>
      <div className="iformationFuter h-screen bg-black flex-col justify-start  items-center text-slate-500">
        <div className="flex justify-start flex-row pt-[15%]">
          <div className="flex flex-col justify-start ml-[10%]">
            <div className="text-4xl mt-8 hover:text-slate-200">
              Information
            </div>
            <div className="text-4xl mt-4 hover:text-slate-200">
              Information
            </div>
            <div className="text-4xl mt-4 hover:text-slate-200">
              Information
            </div>
          </div>
          <div className="flex flex-col justify-start ml-[10%]">
            <div className="text-xl mt-4 hover:text-slate-200">Information</div>
            <div className="text-xl mt-4 hover:text-slate-200">Information</div>
            <div className="text-xl mt-4 hover:text-slate-200">Information</div>
            <div className="text-xl mt-4 hover:text-slate-200">Information</div>
            <div className="text-xl mt-4 hover:text-slate-200">Information</div>
          </div>
        </div>
      </div>

      {/* <HelloSection data={"asdasdad "} />
        <HelloSection data={"iuqwrhw "} /> */}
    </div>
  );
}

export default App;

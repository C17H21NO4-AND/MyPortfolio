import "./App.css";
function App() {
  return (
    <div className="App text-fuchsia-100">
      <div className="topBar bg-black w-full h-20 md:h-14 sm:h-10 flex justify-center fixed">
        <img className="border-2 border-blue-500 w-10 h-10 bg-blue-100 my-auto" />
      </div>

      <div className="HelloSection h-screen bg-green-950 flex-col text-left">
        <div className="textMainBlock h-full pt-72 pl-8 w-1/3">
          <div>
            <p>Defining Class since 1886</p>
          </div>
          <p>
            Highlighting a legacy of class-defining Mercedes-Benz cars that
            paved the way for the new Concept CLA Class.
          </p>
          <div>
            <button
              className="rounded-xl w-32 h-7 mt-5
            bg-slate-500 text-slate-300 hover:text-slate-900 active:bg-violet-700 "
            >
              Click Here !
            </button>
          </div>
        </div>
        <div className="iformationSection h-screen bg-yellow-700 flex-col justify-start  items-center text-left">
          <div className="textInformationSection h-full pt-72 pl-8 w-1/3">
            <p>Defining Class since 1886</p>
            <p>
              Highlighting a legacy of class-defining Mercedes-Benz cars that
              paved the way for the new Concept CLA Class.
            </p>
            <div>
              <button
                className="rounded-xl w-32 h-7 mt-5
            bg-slate-500 text-slate-300 hover:text-slate-900 active:bg-violet-700 "
              >
                Click Here !
              </button>
            </div>
          </div>
        </div>
        <div className="myProjects h-auto bg-white flex-col justify-start  items-center text-left"></div>
        <div className="aboutInfo h-screen bg-blue-950 flex-col justify-start  items-center text-left">
          <div className="textAboutBlock h-full pt-72 pl-8 w-1/3">
            <div>
              <p>Defining Class since 1886</p>
            </div>
            <p>
              Highlighting a legacy of class-defining Mercedes-Benz cars that
              paved the way for the new Concept CLA Class.
            </p>
            <div>
              <button
                className="rounded-xl w-32 h-7 mt-5
            bg-slate-500 text-slate-300 hover:text-slate-900 active:bg-violet-700 "
              >
                Click Here !
              </button>
            </div>
          </div>
        </div>
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
              <div className="text-xl mt-4 hover:text-slate-200">
                Information
              </div>
              <div className="text-xl mt-4 hover:text-slate-200">
                Information
              </div>
              <div className="text-xl mt-4 hover:text-slate-200">
                Information
              </div>
              <div className="text-xl mt-4 hover:text-slate-200">
                Information
              </div>
              <div className="text-xl mt-4 hover:text-slate-200">
                Information
              </div>
            </div>
          </div>
        </div>

        {/* <HelloSection data={"asdasdad "} />
        <HelloSection data={"iuqwrhw "} /> */}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import HelloSection from "./components/HelloSection";
import { useHelloSectionsContent } from "./services/api";
import SocialContent from "./components/SocialContent/SocialContent";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer";
import TopBar from "./components/topBar/topBar";

function App() {
  const { data, loading } = useHelloSectionsContent();

  const helloSections1 = data.slice(0, 2);
  const helloSections2 = data.slice(2);
  // console.log(data, loading, error)

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const data = await useHelloSectionsContent();
  //       setHelloSections(data);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       setIsLoading(false);
  //     }
  //   }

  //   fetch();

  // }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>Is loading...</div>
      </div>
    );
  }

  console.log(helloSections1);
  return (
    <div className="App text-fuchsia-100">
      <TopBar />

      {helloSections1.map(
        ({ id, buttontext, description, text, classname }) => (
          <HelloSection
            key={id}
            className={classname}
            title={text}
            description={description}
            buttonText={buttontext}
          />
        )
      )}

      <MyProjects />

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
      <SocialContent />

      <Footer />

      {/* <HelloSection data={"asdasdad "} />
        <HelloSection data={"iuqwrhw "} /> */}
    </div>
  );
}

export default App;

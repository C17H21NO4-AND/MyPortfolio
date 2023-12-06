import { useProjectsContent } from "../../services/api";

function MyProjects() {
  const { data, loading } = useProjectsContent();
  console.log(data);
  const [firstElement,secondElement,thirdElement,forthElement, ...rest] = data;

  console.log(firstElement?.url);
  console.log("rest", rest);
  return (
    <div className="myProjects bg-white flex-col justify-start items-center text-left p-8">
      <div className="grid grid-rows-3 grid-flow-col gap-16 p-20">
        <div className="row-start-1 row-span-2 bg-slate-600 h-80">
          <img
            className="h-full w-full"
            src={firstElement?.image.url}
            alt={firstElement?.image.alt}
          />
        </div>
        <div className="row-end-4 row-span-2 bg-slate-600 h-80"><img
            className="h-full w-full"
            src={secondElement?.image.url}
            alt={secondElement?.image.alt}
          /></div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-16 p-20">
        <div className="row-start-1 row-span-2 bg-slate-600 h-80"><img
            className="h-full w-full"
            src={thirdElement?.image.url}
            alt={thirdElement?.image.alt}
          /></div>
        <div className="row-end-4 row-span-2 bg-slate-600 h-80"><img
            className="h-full w-full"
            src={forthElement?.image.url}
            alt={forthElement?.image.alt}
          /></div>
      </div>
    </div>
  );
}
export default MyProjects;

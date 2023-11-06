import clsx from "clsx";

function HelloSection({ title, description, buttonText, className }) {
  return (
    <div
      className={clsx(
        "h-screen flex flex-col items-start justify-center p-8",
        className
      )}
    >
      <div className="w-1/3">
        <div>
          <p>{title}</p>
        </div>
        <p>{description}</p>
      </div>

      <button
        className="rounded-xl w-32 h-7 mt-5
    bg-slate-500 text-slate-300 hover:text-slate-900 active:bg-violet-700 "
      >
        {buttonText}
      </button>
    </div>
  );
}
export default HelloSection;

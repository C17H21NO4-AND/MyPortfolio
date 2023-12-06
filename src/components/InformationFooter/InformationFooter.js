const externalLinkProps = { target: "_blank", rel: "noreferrer" };
const internalLinkProps = {};

function InformationFooter({ sectionTitle, sectionLinks }) {
  return (
    <div className="InformationFooter text-slate-500">
      <div className="text-4xl hover:text-slate-200">{sectionTitle}</div>
      {sectionLinks.map(({ link, id, title, isExternal }) => (
        <div key={id} className="text-xl mt-2 hover:text-slate-200">
          <a href={link} {...(isExternal ? externalLinkProps : internalLinkProps)}>
            {title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default InformationFooter;

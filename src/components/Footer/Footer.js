import { useState, useEffect } from "react";
import InformationFooter from "../InformationFooter/InformationFooter";

import { getFooterContent } from "../../services/api";

function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const footerData = await getFooterContent();
        setFooterData(footerData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="bg-black color-white ">Loading...</div>;
  }
  return (
    <div className="bg-black color-white flex gap-5 p-14">
      {footerData.map(({ id, sectionTitle, sectionLinks }) => (
        <InformationFooter
          key={id}
          sectionTitle={sectionTitle}
          sectionLinks={sectionLinks}
        />
      ))}
    </div>
  );
}

export default Footer;

import { useEffect, useState } from "react";

function Demo() {
  // Alles wat hier staat wordt elke keer opnieuw gerenderd
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("neve-effect wordt getriggered ONMOUNT & UPDATE");
    return () => {
      console.log("neve-effect wordt getriggered on UNMOUNT");
    };
  }, [data]);

  return (
    <>
      <p>Content</p>
    </>
  );
}

export default Demo;

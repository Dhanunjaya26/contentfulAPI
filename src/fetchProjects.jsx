import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "y3k93ww3zgg1",
  environment: "master",
  accessToken: "2fT5c9j21u8RANncDAMaRURSzuIF-JcPofF6yJs6Ank",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, img, title, url };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};

export default useFetchProjects;

// client
//   .getEntries({ content_type: "projects" })
//   .then((response) => console.log(response));

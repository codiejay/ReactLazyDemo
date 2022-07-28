import React from "react";

const Sheeps = () => {
  const [imageURL, setImageURL] = React.useState();

  React.useEffect(() => {
    const fetchRequest = async () => {
      const arr = [];
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=sheep&client_id=a2c52360401a8d4b3543f5ef051e3f2637da2dff30442f7ff72ad891b59227cd`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      console.log("here");
      result.map((item) => {
        arr.push(item.urls.raw);
      });
      setImageURL(arr);
    };

    fetchRequest(imageURL);
  }, [imageURL]);

  return (
    <React.Fragment>
      <h4>Images of nice sheeps</h4>
      {imageURL?.map((item) => {
        return <img key={item} src={item} width="400px" height="400px" />;
      })}
    </React.Fragment>
  );
};

export default Sheeps;

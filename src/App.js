import React from "react";

import Header from "./components/Header/Header";
import Images from "./components/Images/Images";

import { getImage } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const imgData = useSelector((state) => state.images.imageList);

  React.useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  return (
    <>
      <Header />
      {imgData.length !== 0 ? <Images /> : null}
    </>
  );
}

export default App;

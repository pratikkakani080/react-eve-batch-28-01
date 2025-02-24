import React, { useContext } from "react";
import MyContext from "../../configurations/myContext";

function SubComp4(props) {
  // console.log("log from sub comp 4***", props);
  const compData = useContext(MyContext);
  console.log("comp 4 data**", compData);

  const var4 = "variable from sub comp 4";
  return <div onClick={() => compData.setData(compData.data + 1)}>sub comp 4</div>;
}

export default SubComp4;

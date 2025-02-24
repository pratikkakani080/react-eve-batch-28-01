import React, { useContext } from "react";
import MyContext from "../../configurations/myContext";

function SubComp3(props) {
  // console.log("log from sub comp 3***", props);
  const compData = useContext(MyContext);
  console.log("comp 3 Data **", compData);

  const var3 = "variable from sub comp 3";
  return <div>sub comp 3 {compData.data}</div>;
}

export default SubComp3;

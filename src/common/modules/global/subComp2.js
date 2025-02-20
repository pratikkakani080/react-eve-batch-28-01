import React from "react";
import SubComp4 from "./subComp4";

function SubComp2(props) {
  console.log("log from sub comp 2***", props);

  const var2 = "variable from sub comp 2";
  return (
    <div>
      sub comp 2 <SubComp4 />
    </div>
  );
}

export default SubComp2;

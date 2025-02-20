import React, { useEffect } from "react";
import SubComp3 from "./subComp3";

function SubComp1(props) {
  console.log("props from sub comp 1**", props);
  const var1 = "variable from sub comp 1";

  useEffect(() => {
    props.setStateuplftn(var1);
  }, []);
  return (
    <div>
      sub comp 1 <SubComp3 />
    </div>
  );
}

export default SubComp1;

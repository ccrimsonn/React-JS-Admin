import React from "react";
import { Redirect } from "react-router-dom";

class EditProfit extends React.Component {
  render() {
    if(global.perm) {
      return (
        <div>
          <p>This is Edit Profit Page</p>
        </div>
      );
    }else{
      return <Redirect to={"/pages"}/>
    }
  }
}

export default EditProfit;

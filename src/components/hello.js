import React from "react";
const Hello=() => {
    // return (
    //     <div>
    //         <h1>Hello paras</h1>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hello paras'))

}


export default Hello
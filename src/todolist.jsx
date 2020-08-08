import React, { useState } from "react";

function App() {
  const [gettext, updatetext] = useState("");
  const [current, update] = useState([]);
  function submit() {
    console.clear();
    console.log("submit clicked");
    // console.log(gettext);
    update((previousvalue) => {
      return [...previousvalue, gettext];
    });
    updatetext("");
  }

  function getvalue(event) {
    updatetext(event.target.value);
    // console.log(gettext);
  }

  function deleteitem(id) {
    console.log("you want to delete");
    var deleteindex = id.target.value;
    console.log(deleteindex);

    var newarr = current.filter((arreyitem, indexno) => {
      return indexno != deleteindex;
    });
    update(newarr);
  }

  return (
    <>
      <div className="maindiv">
        <h1 className="heading">TO DO LIST</h1>
        <input
          className="input_field"
          placeholder="Add a item"
          onChange={getvalue}
          value={gettext}
        />
        <button onClick={submit}>Add</button>
        <div>
          <ol>
            {current.map((data, index) => {
              return (
                <>
                  <div className="item">
                    <button
                      style={{}}
                      key={index}
                      value={index}
                      onClick={deleteitem}
                    >
                      X
                    </button>
                    <li
                      style={{
                        color: "white",
                        display: "block",
                        float: "right",
                      }}
                    >
                      {data}
                    </li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;

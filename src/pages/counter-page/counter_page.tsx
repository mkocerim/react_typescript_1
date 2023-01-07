import React, { useState } from "react";


function CounterPage(){

  const [counter, setCounter] = useState<number>(0);

    return(
<div>
<div className="row">
        <div className="col-4">
          <div className="d-grid gap-2">
            <button
              onClick={() => {
                setCounter(counter + 1)
                console.log(counter)
                setCounter(counter + 1)
                console.log(counter)

                setCounter(counter + 1)
                console.log(counter)

          


              }}
              type="button"
              className="btn btn-primary"
            >
              +
            </button>
          </div>
        </div>
        <div className="col-4">
          <h1 style={{ textAlign: "center" }}>{counter}</h1>
        </div>
        <div className="col-4">
          <div className="d-grid gap-2">
            <button
              onClick={() => {
                setCounter((prevState:number)=>{
                  return prevState-1
                })
                setCounter((prevState:number)=>{
                  return prevState-1

                })
                setCounter((prevState:number)=>{
                  return prevState-1

                })               

              }}
              type="button"
              className="btn btn-primary"
            >
              -
            </button>
          </div>
        </div>
      </div>
</div>


    )
}
export default CounterPage
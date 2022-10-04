import React from "react";
import { useSelector } from "react-redux";

export default function Qas({model}) {
  const qas = useSelector((state) => state.qas);
  let productQas = qas.filter((e)=> e.product === model)
  console.log(productQas, "aver")
  console.log(qas, "global")
  return (
    <div>
        
      {productQas.length?productQas.map((q)=>{
        if(q.answers){
            return(
                <div>
                    <p>{q.email}</p>
                    <p>{q.questions}</p>
                    <p>{q.answers}</p>
                </div>
            )
        }
      }):null}
    </div>
  );
}
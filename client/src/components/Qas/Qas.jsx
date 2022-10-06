import React from "react";
import { useSelector } from "react-redux";

export default function Qas({ model }) {
  const qas = useSelector((state) => state.qas);
  let productQas = qas.filter((e) => e.product === model)
  console.log(productQas, "aver")
  console.log(qas, "global")
  return (
    <div>

      {productQas.length ? productQas.map((q) => {
        if (q.answers) {
          return (
            <div>
              <table class="table">
                <tbody>
                  <tr class="table-primary">
                    
                    <td>{q.email}:  
                    {q.questions}</td>

                  </tr>
                  <tr class="table-danger">
                   
                    <td>Administrador: {q.answers}</td>

                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
      }) : null}
    </div>
  );
}
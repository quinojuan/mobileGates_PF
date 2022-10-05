import React from "react";
import { useSelector } from "react-redux";

export default function PhoneFeedbacks ({model}) {
  const feeds = useSelector((state) => state.allFeedbacks);
  let phoneFeedbacks = feeds.filter((e)=> e.product === model)
  
  return (
    <div>
      {phoneFeedbacks.length?phoneFeedbacks.map((f)=>{
            return(
                <div>
                    <p>{f.email}</p>
                    <p>{f.comment}</p>
                    <p>{f.points}</p>
                </div>
            )
      }):null}
    </div>
  );
}
import React from "react";
import { useParams } from "react-router-dom";

export default function FabSolo() {
  // looks at current page url and finds the param
  const { id } = useParams();

  return (
    <>
      <div>FabSolo</div>
      <iframe src={`https://sketchfab.com/models/${id}/embed`} />
    </>
  );
}

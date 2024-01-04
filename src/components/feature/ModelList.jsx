import React from "react";
import { Link } from "react-router-dom";

export default function ModelList({ sfData }) {
  return (
    <>
      {sfData && ( // truthy value, checking to see if you have data before rendering
        <div>
          {sfData.map((model, i) => (
            <div key={model.uid}>
              <Link to={`/fabLib/${model.uid}`}>
                <img
                  src={model.thumbnails.images[0].url}
                  alt={model.name}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

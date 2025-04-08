import React from "react";
import "./sass/promo.sass";

export default function Promo({ setShowBlockA, showBlockA }) {
  return (
    <>
      {showBlockA && (
        <div className="promo-mini">
          <p className="temp-annons">
            Welcome offer: 300฿ discount on your first booking!
          </p>
          <button className="close-btn" onClick={() => setShowBlockA(false)}>
            x
          </button>
        </div>
      )}
    </>
  );
}

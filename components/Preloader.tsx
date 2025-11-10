"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Durée de l'animation de fade out 600ms
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`preloader ${fadeOut ? "preloader-fade-out" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: "opacity 0.6s ease-out",
      }}
    >
      <div className="loader-container">
        <div className="flex items-center justify-center text-4xl font-erstoria text-[#0A0100]/60 mb-4">
          CHARGEMENT DU SITE...
        </div>
        <div className="text-4xl font-erstoria">GB.</div>

        <svg
          className="fill-brand"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="0">
            <animate
              id="spinner_kIfO"
              begin="0;spinner_xBIM.end"
              attributeName="r"
              calcMode="spline"
              dur="1.2s"
              values="0;11"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />

            <animate
              begin="0;spinner_xBIM.end"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />
          </circle>
          <circle cx="12" cy="12" r="0">
            <animate
              id="spinner_Pbsh"
              begin="spinner_kIfO.begin+0.2s"
              attributeName="r"
              calcMode="spline"
              dur="1.2s"
              values="0;11"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />
            <animate
              begin="spinner_kIfO.begin+0.2s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />
          </circle>
          <circle cx="12" cy="12" r="0">
            <animate
              id="spinner_xBIM"
              begin="spinner_kIfO.begin+0.4s"
              attributeName="r"
              calcMode="spline"
              dur="1.2s"
              values="0;11"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />
            <animate
              begin="spinner_kIfO.begin+0.4s"
              attributeName="opacity"
              calcMode="spline"
              dur="1.2s"
              values="1;0"
              keySplines=".52,.6,.25,.99"
              fill="freeze"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";

export default function DownloadCV() {
  return (
    <Button
      size="xxl"
      className=" font-erstoria"
      onClick={() => {
        window.open("/CV_Gilles_BUCHHEIT_2025.pdf", "_blank");
      }}
    >
      Télécharger mon CV
    </Button>
  );
}

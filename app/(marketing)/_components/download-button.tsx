"use client";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

const DownloadButton = () => {
  async function download() {
    const copyBody = document.body.cloneNode(true) as HTMLElement;

    copyBody.style.backgroundColor = "white";

    const canvas = await html2canvas(document.body);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: "a4",
    });

    pdf.addImage(
      canvas.toDataURL("images/png"),
      "PNG",
      0,
      0,
      canvas.width,
      canvas.height,
    );
    pdf.save("Curriculo.pdf");
  }

  return (
    <Button
      variant="ghost"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={download}
    >
      Download CV
    </Button>
  );
};

export default DownloadButton;
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PalamarDev - About us";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = fetch(
    "https://rsms.me/inter/font-files/Inter-SemiBold.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontFamily: "Inter", color: "black" }}>
          <div style={{ fontSize: 32 }}>
            <span style={{ color: "#FF0080" }}>About us</span>
            <span style={{ color: "#FF0080" }}>
              Hi there! I&apos;m PalamarDev
            </span>
            <div style={{ fontSize: 24 }}>
              <span style={{ color: "#FF0080" }}>Fullstack developer.</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}

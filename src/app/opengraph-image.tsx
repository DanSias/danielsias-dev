import { ImageResponse } from "next/og";

export const alt = "Daniel Sias | Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0f172a",
          padding: "80px",
        }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
          }}>
          Daniel Sias
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "#38bdf8",
            textAlign: "center",
          }}>
          Full-Stack Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 880,
          }}>
          Developer tooling, payment platforms, and AI-assisted software
        </div>
      </div>
    ),
    { ...size }
  );
}

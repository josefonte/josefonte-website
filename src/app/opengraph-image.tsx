import { ImageResponse } from "next/og";

// Terminal-paper identity, dark variant: ink-on-paper with the amber "signal" accent.
export const alt = "José Fonte | AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    const paper = "hsl(240, 6%, 8%)";
    const ink = "hsl(48, 18%, 95%)";
    const muted = "hsl(240, 5%, 56%)";
    const signal = "hsl(38, 90%, 60%)";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: paper,
                    padding: "80px",
                    fontFamily: "monospace",
                }}
            >
                <div style={{ display: "flex", color: muted, fontSize: 34 }}>
                    <span style={{ color: signal }}>&gt;</span>
                    <span style={{ marginLeft: 18 }}>whoami</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        color: ink,
                        fontSize: 110,
                        fontWeight: 700,
                        marginTop: 24,
                    }}
                >
                    José Fonte
                </div>
                <div style={{ display: "flex", color: muted, fontSize: 40, marginTop: 12 }}>
                    AI/ML Engineer
                    <span style={{ color: signal, margin: "0 16px" }}>·</span>
                    Promptly Health
                </div>
                <div
                    style={{
                        display: "flex",
                        color: muted,
                        fontSize: 30,
                        marginTop: 60,
                    }}
                >
                    josefonte.xyz
                </div>
            </div>
        ),
        size,
    );
}

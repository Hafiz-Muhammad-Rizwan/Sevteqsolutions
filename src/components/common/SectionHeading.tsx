type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth: "660px" }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: "1px solid #191919",
        borderRadius: "999px",
        padding: "6px 16px",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#999",
        background: "#0f0f0f",
        fontFamily: "'General Sans','Inter',sans-serif",
        marginBottom: "20px",
      }}>
        {eyebrow}
      </div>
      <h2 style={{
        fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
        fontWeight: 500,
        color: "#fff",
        fontFamily: "'General Sans','Inter',sans-serif",
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
        marginBottom: "16px",
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: "18px",
        lineHeight: 1.65,
        color: "#999",
        fontFamily: "'General Sans','Inter',sans-serif",
      }}>
        {description}
      </p>
    </div>
  );
}

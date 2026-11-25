export default function SectionTitle({ children, eyebrow }) {
  return <div className="section-heading">{eyebrow && <span>{eyebrow}</span>}<h2>{children}</h2><i /></div>;
}

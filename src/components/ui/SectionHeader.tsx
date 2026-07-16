export function SectionHeader({
  label,
  eyebrow,
  title,
  intro,
  description,
  titleId,
}: {
  index?: string;
  label?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  description?: string;
  titleId?: string;
}) {
  const supportingText = intro ?? description;

  return (
    <header className="section-heading">
      <p className="eyebrow mono">{label ?? eyebrow}</p>
      <div>
        <h2 id={titleId}>{title}</h2>
        {supportingText ? <p>{supportingText}</p> : null}
      </div>
    </header>
  );
}

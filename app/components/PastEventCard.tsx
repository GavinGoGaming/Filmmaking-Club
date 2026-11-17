type PastEventCardProps = {
  title: string;
  subtitle: string;
  href?: string;
  previewImage?: string;
  actions?: string | { label: string; href: string }[];
};

export default function PastEventCard({
  title,
  subtitle,
  href = "#",
  previewImage,
  actions = "View films",
}: PastEventCardProps) {
  const actionLinks =
    typeof actions === "string"
      ? [{ label: actions, href }]
      : actions;

  return (
    <article className="event-card">
      <div className="event-preview" aria-label={`${title} preview`}>
        <img src={previewImage} alt="" />
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {actionLinks.map(({ label, href: actionHref }) => (
          <a
            className="outline-button"
            rel="_blank"
            href={actionHref}
            key={`${label}-${actionHref}`}
          >
            {label}
          </a>
        ))}
      </div>
    </article>
  );
}
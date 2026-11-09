type PastEventCardProps = {
  title: string;
  subtitle: string;
  href?: string;
  previewImage?: string;
};

export default function PastEventCard({
  title,
  subtitle,
  href = "#",
  previewImage,
}: PastEventCardProps) {
  return (
    <article className="event-card">
      <div className="event-preview" aria-label={`${title} preview`}>
        <img src={previewImage} alt="" />
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <a className="outline-button" href={href}>
          View films
        </a>
      </div>
    </article>
  );
}
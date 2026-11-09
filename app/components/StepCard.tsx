type StepCardProps = {
  number: string;
  title: string;
  children: React.ReactNode;
  actions?: {
    label: React.ReactNode;
    href?: string;
    variant?: 'button' | 'button-soft' | 'link';
    style?: React.CSSProperties;
  }[];
};

export default function StepCard({
  number,
  title,
  children,
  actions,
}: StepCardProps) {
  return (
    <article className="step-card">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h2>{title}</h2>
        <p>{children}</p>
        {/* {href && (
          <a className="text-link" href={href}>
            Learn more →
          </a>
        )} */}
        {actions && (
          <div className="step-actions">
            {actions.map((action, index) => (
                <a style={action.style} key={index} className={`text-${action.variant || 'link'}`} href={action.href}>
                  {action.label}
                </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
export function ResumeDetails({ content }) {
  return (
    <section id="examples">
      <div id="tab-content">
        <h3>{content.title}</h3>
        {content.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {content.items && (
          <ul>
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {content.groups && (
          <div className="skill-groups">
            {content.groups.map(([label, details]) => (
              <p key={label}>
                <strong>{label}:</strong> {details}
              </p>
            ))}
          </div>
        )}
        {content.roles && (
          <div className="experience-list">
            {content.roles.map((role) => (
              <article key={`${role.company}-${role.title}`}>
                <h4>{role.title} | {role.company}</h4>
                <p className="role-dates">{role.dates}</p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * ProjectCard Component
 * 
 * Large, image-led editorial showcase card.
 * Features:
 * - 68-78vw desktop width with max-width ~1050px.
 * - 16:10 aspect ratio image preview.
 * - Custom cursor trigger data attributes (data-cursor="project").
 * - Project title with interactive arrow and concise description directly beneath image.
 * - Semantic accessible link tags.
 */
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" id={`project-card-${project.id}`}>
      {/* Interactive Image Container with Custom Negative Cursor Trigger */}
      <a
        href={project.destinationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__image-link"
        data-cursor="project"
        data-cursor-text="VIEW PROJECT"
        aria-label={`Open project preview for ${project.name}`}
      >
        <div className="project-card__image-wrapper">
          <img
            src={project.imageUrl}
            alt={project.altText || `${project.name} showcase preview`}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="project-card__image"
          />
          <div className="project-card__image-overlay" aria-hidden="true" />
        </div>
      </a>

      {/* Editorial Content Below Image */}
      <div className="project-card__details">
        <h2 className="project-card__title">
          <a
            href={project.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__title-link"
          >
            <span>{project.name}</span>
            <span className="project-card__arrow" aria-hidden="true">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </h2>

        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
}

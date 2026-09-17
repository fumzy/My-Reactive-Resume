export function CoreConcepts({ image, title, description, isSelected, onSelect }) {
  return (
    <li>
      <button
        className={isSelected ? "resume-card selected" : "resume-card"}
        onClick={onSelect}
        type="button"
        aria-pressed={isSelected}
      >
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </button>
    </li>
  );
}

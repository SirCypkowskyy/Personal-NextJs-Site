import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

function SetTag({looked_tag}) {
  switch(looked_tag) {
    case "c-sharp":
      return <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/">{looked_tag}</a>;
    case "unity":
      return <a href="https://unity.com/">{looked_tag}</a>;
    case "visual-studio":
      return <a href="https://visualstudio.microsoft.com/">{looked_tag}</a>;
    case "visual-studio-code":
      return <a href="https://code.visualstudio.com/">{looked_tag}</a>;
    case "java":
      return <a href="https://www.java.com/">{looked_tag}</a>;
    case "python":
      return <a href="https://www.python.org/">{looked_tag}</a>;
    case "pycharm":
      return <a href="https://www.jetbrains.com/pycharm/">{looked_tag}</a>;
    case "intelij-idea":
      return <a href="https://www.jetbrains.com/idea/">{looked_tag}</a>;
    case "reaper":
      return <a href="https://www.reaper.fm/">{looked_tag}</a>;
    case "jetbrains-rider":
      return <a href="https://www.jetbrains.com/rider/">{looked_tag}</a>;
    default:
      return {looked_tag}
  }
}

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={600} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

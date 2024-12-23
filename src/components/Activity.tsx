import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  link?: string;
  title: string;
}

function Activity({ children, link, title }: Props) {
  if (link != null) {
    return (
      <div>
        <ul className="activity_list">
          <li>
            <h3>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>
          </li>
          <ul className="bullet_list">{children}</ul>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul className="activity_list">
        <li>
          <h3>{title}</h3>
        </li>
        <ul className="bullet_list">{children}</ul>
      </ul>
    </div>
  );
}
export default Activity;

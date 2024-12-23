import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

function LinkItem({ children, link }: Props) {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h4>{children}</h4>
      </a>
    </li>
  );
}
export default LinkItem;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Bullet({ children }: Props) {
  return (
    <li>
      <p>{children}</p>
    </li>
  );
}
export default Bullet;

import { ReactNode } from "react";
import "../App.css";

interface Props {
  children?: ReactNode;
  img_src?: string;
}

function SkillSlot({ children, img_src }: Props) {
  return (
    <li>
      <div className="skill_slot">
        <img className="skill_img" src={img_src}></img>
        <h4>{children}</h4>
      </div>
    </li>
  );
}
export default SkillSlot;

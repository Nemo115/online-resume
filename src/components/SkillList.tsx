import { ReactNode } from "react";
import "../App.css";

interface Props {
  children: ReactNode;
}
function SkillList({ children }: Props) {
  return <ul className="skill_list">{children}</ul>;
}
export default SkillList;

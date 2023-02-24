import Item from "./Item.js";
import { RABKAERA, EXPERT, STUDENT, CONTACT } from "./Menus";

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={RABKAERA} title="RABKAERA" />
      <Item Links={EXPERT} title="EXPERT" />
      <Item Links={STUDENT} title="STUDENT" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
}

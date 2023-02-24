import React from "react";
import ItemsContainer from "./ItemsContainer.js";
import SocialIcons from "./SocialIcons.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© {year} Appy. Copyright: Rabkaera</span>
        <span>All rights reserved. Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  );
}

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialIcons() {
  return (
    <div className="text-yellow-500">
      <a href="https://github.com/akbaeraputra">
        <span
          className="p-2 cursor-pointer inline-flex items-center
    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
    duration-300 "
        >
          <GitHubIcon />
        </span>
      </a>
      <a href="https://instagram.com/rabkaera">
        <span
          className="p-2 cursor-pointer inline-flex items-center
    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
    duration-300 "
        >
          <InstagramIcon />
        </span>
      </a>
      <a href="mailto:akbarekaputra01@gmail.com">
        <span
          className="p-2 cursor-pointer inline-flex items-center
    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-500
    duration-300 "
        >
          <EmailIcon />
        </span>
      </a>
    </div>
  );
}

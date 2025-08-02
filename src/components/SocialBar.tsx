// src/components/SocialBar.tsx
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';
import React from 'react';

const socials = [
  { icon: <FaGithub />,      url: 'https://github.com/khunakorn-6005014' },
  { icon: <FaLinkedin />,    url: 'https://www.linkedin.com/in/khunakorn-wongsriprasert-9760a31b7/' },
  { icon: <FaEnvelope />,    url: 'mailto:wongsriprasert@gmail.com' },
];

export default function SocialBar() {
  return (
    <ul className="fixed top-1/3 left-4 space-y-4 z-50">
      {socials.map(({ icon, url }, i) => (
        <li key={i}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
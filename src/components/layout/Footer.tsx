import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-sky-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            <li>
              <Link href="/about" className="text-secondary hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="text-secondary hover:text-accent">
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-secondary hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-secondary hover:text-accent">
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-secondary hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/DanSias"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-sias"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:daniel.sias@gmail.com"
            className="hover:text-accent transition-colors">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Daniel Sias. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

import DesktopNavigation from "./DesktopNavigation";
import CtaSection from "./CtaSection";
import MobileNavigation from "./MobileNavigation";

const solutions = {
  type: "SUBMENU",
  displayText: "Solutions",
  subMenuItems: [
    {
      name: "Messaging",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: AnnotationIcon,
    },
    {
      name: "Live Chat",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      name: "Knowledge Base",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      //   icon: QuestionMarkCircleIcon,
    },
    {
      name: "Messaging",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: AnnotationIcon,
    },
    {
      name: "Live Chat",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      name: "Knowledge Base",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      //   icon: QuestionMarkCircleIcon,
    },
  ],
};

const navigationLinks = [
  solutions,
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "teach-yourself",
    // icon: InboxIcon,
  },
];

const ctas = [
  {
    type: "secondary",
    href: "teach-yourself",
    displayText: "Teach Yourself",
  },
  {
    type: "primary",
    href: "/",
    displayText: "Home",
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navigation() {
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <MobileNavigation
              navigationLinks={navigationLinks}
              callToActions={[...ctas].reverse()}
            />
            <DesktopNavigation navigationLinks={navigationLinks} />
            <CtaSection callToActions={ctas} />
          </div>
        </Popover>
      </header>
    </div>
  );
}

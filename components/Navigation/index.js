import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import DesktopNavigation from "./DesktopNavigation";
import CtaSection from "./CtaSection";
import MobileNavigation from "./MobileNavigation";

export default function Navigation({ links, ctas, logo }) {
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <MobileNavigation
              links={links}
              callToActions={[...ctas].reverse()}
              logo={logo}
            />
            <DesktopNavigation links={links} />
            <CtaSection callToActions={ctas} />
          </div>
        </Popover>
      </header>
    </div>
  );
}

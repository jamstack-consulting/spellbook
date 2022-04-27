import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CtaSectionMobile from "./CtaSectionMobile";

const MobileNavigation = ({ links, callToActions, logo }) => {
  // move logo into nav object like socials icons
  return (
    <Fragment>
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href={logo.href}>
          <logo.jsx />
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {links.map((item) => resolver(item))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                <CtaSectionMobile callToActions={callToActions} />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Fragment>
  );
};

const resolver = (item) => {
  if (item.type === "SUBMENU") {
    return item.subMenuItems.map(resolver);
  }
  return (
    <a
      key={item.name}
      href={item.href}
      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
    >
      {item.icon && (
        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
      <div className="ml-4 text-base font-medium text-gray-900">
        {item.name}
      </div>
    </a>
  );
};

export default MobileNavigation;

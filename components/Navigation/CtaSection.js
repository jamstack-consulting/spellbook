const ctaClassnames = {
  primary:
    "ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700",
  secondary:
    "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900",
};

const CtaSection = ({ callToActions }) => {
  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      {callToActions.map((cta) => (
        <a className={ctaClassnames[cta.type]} href={cta.href}>
          {cta.displayText}
        </a>
      ))}
    </div>
  );
};

export default CtaSection;

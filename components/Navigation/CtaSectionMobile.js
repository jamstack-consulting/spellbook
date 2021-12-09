const CtaSection = ({ callToActions }) => {
  return (
    <div className="mt-6">
      {callToActions.map((cta) => (
        <a className={ctaClassnames[cta.type]} href={cta.href}>
          {cta.displayText}
        </a>
      ))}
    </div>
  );
};

const ctaClassnames = {
  primary:
    "w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700",
  secondary: "text-gray-900",
};

export default CtaSection;

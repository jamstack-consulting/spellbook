import Wrapper from "./Wrapper";
import Hero from "./Hero";

const TableOfContents = {
  Container: (props) => {
    return <nav {...props} />;
  },
  Item: (props) => <li {...props} />,
  List: (props) => <ol {...props} />,
  Link: (props) => <a {...props} />,
};

const components = {
  TableOfContents: TableOfContents,
  h1: (props) => <h1 className="font-display font-black" {...props} />,
  h2: (props) => <h2 className="font-display font-black" {...props} />,
  h3: (props) => <h3 className="font-display font-black" {...props} />,
  p: (props) => <p className="" {...props} />,
  a: (props) => <a className="text-purple-600" {...props} />,
  em: (props) => <em>{props.children}</em>,
  del: (props) => <span>{props.children}</span>,
  strong: (props) => <strong>{props.children}</strong>,
  nav: (props) => <nav {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-neutral-100 p-4 italic text-neutral-600"
      {...props}
    >
      <span fontWeight="font-bold">{props.children}</span>
    </blockquote>
  ),
  Button: (props) => (
    <button className="m-0 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <a {...props}>
        <span className="text-white">{props.children}</span>
      </a>
    </button>
  ),
  Box: (props) => (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6" {...props}></div>
    </div>
  ),
  Card: (props) => (
    <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6" {...props}></div>
    </div>
  ),
  Content: (props) => (
    <div className="content prose prose-xl max-w-7xl px-2" {...props} />
  ),
  Columns: ({ columnCount, ...props }) => (
    <div
      className={`lg:grid lg:grid-cols-${columnCount} lg:gap-6`}
      {...props}
    />
  ),
  Column: (props) => <div {...props} />,
  wrapper: Wrapper,
  Hero: Hero,
};

export default components;

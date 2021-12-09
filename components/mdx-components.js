const components = {
  h1: (props) => <h1 className="text-4xl font-black" {...props} />,
  h2: (props) => <h2 className="text-3xl font-black" {...props} />,
  p: (props) => <p className="" {...props} />,
  a: (props) => <a className="text-purple-600" {...props} />,
  em: (props) => <em>{props.children}</em>,
  del: (props) => <span>{props.children}</span>,
  strong: (props) => <strong>{props.children}</strong>,
  blockquote: (props) => (
    <blockquote
      className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-blue-500"
      {...props}
    >
      <span fontWeight="font-bold">{props.children}</span>
    </blockquote>
  ),
  Button: (props) => (
    <button className="text-base inline-flex m-0 items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <a {...props}>
        <span className="text-white">{props.children}</span>
      </a>
    </button>
  ),
  Box: (props) => (
    <div className="not-prose">
      <div className="bg-white overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6" {...props}></div>
      </div>
    </div>
  ),
  Card: (props) => (
    <div className="not-prose">
      <div className="bg-gray-50 overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6" {...props}></div>
      </div>
    </div>
  ),
  Content: (props) => (
    <div
      className="content prose prose-xl prose-blue mx-auto my-5"
      {...props}
    />
  ),
  Columns: ({ columnCount, ...props }) => (
    <div
      className={`lg:grid lg:grid-cols-${columnCount} lg:gap-6`}
      {...props}
    />
  ),
  Column: (props) => <div {...props} />,
};

export default components;

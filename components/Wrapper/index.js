import React from "react";

const fixLi = (children) => {
  return children.map((h1) => {
    const [a, ...tail] = React.Children.toArray(h1.props.children);

    // return <section>{h1}</section>;
    return React.cloneElement(h1, {
      style: { ...h1.props.style, opacity: 0.5 },
      children: [a, fixLi(tail)],
    });
  });
};

const Wrapper = (props) => {
  const toc = React.Children.toArray(props.children)[0];
  console.log("toc", toc);
  const ol = toc.props.children;
  const h1s = fixLi(React.Children.toArray(ol.props.children));

  const newToc = {
    ...toc,
    props: {
      ...toc.props,
      children: { ...ol, props: { ...ol.props, children: h1s } },
    },
  };

  return (
    <>
      {newToc}
      {/* {h1s} */}
      {props.children.slice(1)}
    </>
  );
};

export default Wrapper;

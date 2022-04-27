import React from "react";

const fixLi = (children) => {
  return children.map((h1) => {
    const [a, ...tail] = React.Children.toArray(h1.props.children);

    // return <section>{h1}</section>;
    return React.cloneElement(h1, {
      children: [a, fixLi(tail)],
    });
  });
};

const Wrapper = (props) => {
  const toc = React.Children.toArray(props.children)[0];
  if (toc.props.mdxType === "nav") {
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
        {props.children.slice(1)}
      </>
    );
  }

  return <>{props.children}</>;
};

export default Wrapper;

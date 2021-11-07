import React from "react";

const Loadmore = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div>
      <div className="btn btn-loadmore">
        <button onClick={onRightClick}>Load More</button>
      </div>
    </div>
  );
};

export default Loadmore;

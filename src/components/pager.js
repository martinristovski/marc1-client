import React from 'react';

const Pager = (props) => {
  return (
    <div>
      {React.Children.map(props.children, child => {
        if (props.currentPage === child.props.page) {
          return child;
        }
      })}
    </div>
  )
}

export default Pager;

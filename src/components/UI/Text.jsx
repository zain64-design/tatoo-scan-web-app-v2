import React from 'react'
import PropTypes from 'prop-types';

const Text = ({as: Tag = 'p', className='', children, ...props}) => {
    return <Tag {...props}{...(className ? { className } : {})}>
    {children}
  </Tag>;
}

Text.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    children: PropTypes.node,
  };

export default Text
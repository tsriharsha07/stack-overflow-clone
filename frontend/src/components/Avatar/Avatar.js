import React from 'react';

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize}) => {
  const style = {
    backgroundColor,
    padding:`${py} ${px}`,
    color:color||'black',
    borderRadius,
    textAlign: 'center',
    fontSize,
    cursor:'pointer',
    textDecoration:'none',
  }
  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Avatar;

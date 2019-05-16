import React from 'react';

export default props => (
  <svg
    viewBox="0 0 94.9 94.9"
    {...props}
  >
    <style dangerouslySetInnerHTML={{ __html: '.st01{filter:url(#filter-11);} .st11{fill:#000031;}' }} />
    <filter filterUnits="objectBoundingBox" height="206.4%" id="filter-11" width="211.9%" x="-55.6%" y="-53.2%">
      <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="25" />
      <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.421365489 0" />
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g>
      <path className="st01 st11" d="M47.4 94.9C21.2 94.9 0 73.7 0 47.5S21.2 0 47.4 0s47.5 21.2 47.5 47.5-21.3 47.4-47.5 47.4zm0-1.4c25.4 0 46.1-20.6 46.1-46.1s-20.6-46-46.1-46-46 20.6-46 46.1 20.6 46 46 46zm.7-73.3c2.4 1.2 4.1 3.2 5.4 5.5 1.3 2.3 2.2 4.8 2 7.5 0 .5-.3.9-.7 1.2-2.2 1.5-4.7 2.2-7.4 2.2s-5.2-.7-7.4-2.2c-.4-.3-.7-.7-.7-1.2-.2-2.7.7-5.2 2-7.5s3-4.3 5.4-5.5c.5-.2 1-.2 1.4 0zm22.4 19.3c-6.1 4-11.9 8.8-15.7 15.2-3.8 6.2-5.3 13.4-5.9 20.6-.1.8-.7 1.4-1.5 1.4s-1.5-.6-1.5-1.4c-.6-7.2-2.1-14.3-5.8-20.5-3.8-6.4-9.6-11.2-15.7-15.2-.7-.4-.9-1.3-.5-2s1.3-1 2-.7c6.7 3.1 14.1 5.4 21.5 5.4 7.5 0 14.8-2.3 21.6-5.4.7-.3 1.6-.1 2 .6.3.7.1 1.6-.5 2z" id="logo" />
    </g>
  </svg>
);

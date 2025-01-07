import React from 'react';

export const PowerIcon = ({ isDarkMode }: { isDarkMode?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 17" style={{ filter: 'grayscale(100%)' }}>
      <defs>
        <linearGradient id="SVGID_1_" x1="4.9354" y1="9.4639" x2="6.7063" y2="2.7347" gradientTransform="matrix(1 0 0 -1 0 20)">
          <stop offset="0" style={{ stopColor: isDarkMode ? '#80B37F' : '#159455' }} />
          <stop offset="1" style={{ stopColor: isDarkMode ? '#9BC7B5' : '#3FBDA9' }} />
        </linearGradient>
        <linearGradient id="SVGID_2_" x1="5.9391" y1="18.3394" x2="16.2129" y2="13.7717" gradientTransform="matrix(1 0 0 -1 0 20)">
          <stop offset="0" style={{ stopColor: isDarkMode ? '#9FCBC1' : '#23A794' }} />
          <stop offset="0.5684" style={{ stopColor: isDarkMode ? '#78A29B' : '#007A84' }} />
          <stop offset="1" style={{ stopColor: isDarkMode ? '#536E70' : '#005158' }} />
        </linearGradient>
        <linearGradient id="SVGID_3_" x1="5.1362" y1="14.1387" x2="14.433" y2="9.5345" gradientTransform="matrix(1 0 0 -1 0 20)">
          <stop offset="0" style={{ stopColor: isDarkMode ? '#A3C7B1' : '#7FD9A2' }} />
          <stop offset="0.1961" style={{ stopColor: isDarkMode ? '#74B18A' : '#47BF79' }} />
          <stop offset="0.7139" style={{ stopColor: isDarkMode ? '#49998D' : '#009280' }} />
          <stop offset="1" style={{ stopColor: isDarkMode ? '#3B7680' : '#007A84' }} />
        </linearGradient>
      </defs>
      <g>
        <path
          style={{
            fill: 'url(#SVGID_1_)',
          }}
          d="M3.3,11h5.1l-3,6c-0.2,0.5-0.9,0.5-1.1,0l-2.1-4.2C1.8,12,2.4,11,3.3,11z"
        />
        <path
          style={{
            fill: 'url(#SVGID_2_)',
          }}
          d="M7.9,1.1h7c2,0,3.3,2.1,2.4,3.8L15,9.5c0,0,0,0,0,0l-0.4,0.8L15,9.5c0.8-1.8-0.4-3.8-2.4-3.8H6.2
                  c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z"
        />
        <path
          style={{
            fill: 'url(#SVGID_3_)',
          }}
          d="M12.6,11H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h9.3c1,0,1.9-0.6,2.4-1.5l0.2-0.3L15,9.6
                  C14.5,10.5,13.6,11,12.6,11z"
        />
      </g>
    </svg>
  );
  

export const NetIcon = ({ isDarkMode }: { isDarkMode?: boolean }) => {
    const fillColor = isDarkMode ? "#FFFFFF" : "#000000"; // Bianco per dark mode, nero per light mode
    return (    <svg role="img" viewBox="0 0 124 17" xmlns="http://www.w3.org/2000/svg">
        <title>.NET</title>
        <path 
            d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" 
            fill={fillColor}
            />
    </svg>
);
};

export const SolidityIcon = ({ isDarkMode }: { isDarkMode?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6200 850" >
      <style type="text/css">
        {`
          .st0 { 
            opacity: ${isDarkMode ? 0.25 : 0.45}; 
            fill: ${isDarkMode ? '#D3D3D3' : '#000000'}; 
          }
          .st1 { 
            opacity: ${isDarkMode ? 0.4 : 0.6}; 
            fill: ${isDarkMode ? '#E0E0E0' : '#1A1A1A'}; 
          }
          .st2 { 
            opacity: ${isDarkMode ? 0.6 : 0.8}; 
            fill: ${isDarkMode ? '#F0F0F0' : '#333333'}; 
          }
        `}
      </style>
      <path className="st0" d="M391.9 0l-130.7 232.3H0L130.6 0 391.9 0" />
      <path className="st1" d="M261.2 232.3h261.3L391.9 0h-261.3L261.2 232.3z" />
      <path className="st2" d="M130.6 464.5l130.6-232.2L130.6 0 0 232.3 130.6 464.5z" />
      <path className="st0" d="M131.9 813l130.7-232.3h261.3L393.2 813H131.9" />
      <path className="st1" d="M262.6 580.7h-261.3L131.9 813H393.2L262.6 580.7z" />
      <path className="st2" d="M393.2 348.5l-130.6 232.2L393.2 813l130.7-232.3L393.2 348.5z" />
    </svg>
  );
  
export default SolidityIcon;

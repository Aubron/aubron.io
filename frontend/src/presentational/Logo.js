import React from 'react';

export default ({primaryColor, secondaryColor, logoType, ...rest}) => {
  const primaryStyle = {
    fill: primaryColor
  };
  const secondaryStyle = {
    fill: secondaryColor
  }
  let Logo;
  if (logoType === 'initials') {
    Logo = (
      <svg {...rest} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356.71 226.83">
        <path style={secondaryStyle} d="M171.55,161.56c6.07-15.89,13.14-34.91,20-53.9s13.21-38.61,19.14-58.89h19.12q8.88,30.42,19.36,58.89T268.73,160q3.63-12.72,7.28-27.92t7.18-31.88q3.53-16.68,6.94-34.5t6.61-35.52h22.54q-8.19,45.39-17.42,84T280.8,187.44H258.71q-10-24.51-19.59-50.39T220,80.77q-9.57,30.42-19.36,56.28t-19.58,50.39Z"/>
        <path style={primaryStyle} d="M156.83,187.44q-3.9-10.22-7.33-20.09t-7.1-20.08H70.46L56,187.44H32.89q9.16-25,17.19-46.19T65.77,101Q73.44,81.91,81,64.55T96.81,30.16H117.2q8.25,17,15.81,34.39T148.24,101q7.68,19.07,15.69,40.28t17.19,46.19ZM136,129.11q-7.32-19.74-14.54-38.24t-15-35.52q-8,17-15.23,35.52T76.88,129.11Z"/>
      </svg>
    )
  } else {
    Logo = (
      <svg {...rest} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 671.95 122.56">
        <path style={primaryStyle} d="M72.61,88.18q-.89-2.79-1.92-5.73c-.69-2-1.37-3.92-2-5.86H47.72l-2,5.87q-1,3-1.9,5.72H31.26q3-8.66,5.74-16t5.31-13.84q2.59-6.5,5.12-12.33t5.23-11.4H64.09Q66.73,40.17,69.3,46c1.7,3.89,3.43,8,5.16,12.33s3.51,9,5.32,13.84,3.73,10.23,5.75,16ZM58.12,46.75c-.27.77-.66,1.83-1.18,3.17s-1.11,2.89-1.77,4.64-1.4,3.69-2.22,5.8S51.3,64.69,50.46,67H65.78q-1.23-3.48-2.38-6.66t-2.19-5.81q-1-2.62-1.82-4.64C58.87,48.56,58.44,47.51,58.12,46.75Z"/>
        <path style={primaryStyle} d="M111.81,89.27a26.9,26.9,0,0,1-9.74-1.59,18,18,0,0,1-6.76-4.41,17.56,17.56,0,0,1-3.94-6.72,27.65,27.65,0,0,1-1.28-8.62V34.61h12.06V66.92a17.84,17.84,0,0,0,.74,5.53,10,10,0,0,0,2,3.71,7.19,7.19,0,0,0,3.1,2,12.35,12.35,0,0,0,4,.62,9.72,9.72,0,0,0,7.15-2.71q2.75-2.7,2.74-9.2V34.61h12.06V67.93a27.17,27.17,0,0,1-1.31,8.66,17.78,17.78,0,0,1-4,6.76,18.11,18.11,0,0,1-6.88,4.37A28.5,28.5,0,0,1,111.81,89.27Z"/>
        <path style={primaryStyle} d="M163.38,88.88q-4.41,0-8.78-.27a61.91,61.91,0,0,1-9.08-1.28V35.38a77.54,77.54,0,0,1,8.12-1Q158,34,161.83,34a55.71,55.71,0,0,1,9.39.74,22.26,22.26,0,0,1,7.39,2.51,13.08,13.08,0,0,1,4.83,4.68,13.65,13.65,0,0,1,1.74,7.15q0,6.41-6.19,10.12,5.1,1.94,7,5.26a15.11,15.11,0,0,1,1.86,7.5q0,8.43-6.15,12.68T163.38,88.88Zm-6.11-33.24h5.87c3.72,0,6.37-.48,8-1.43a5,5,0,0,0,2.39-4.6A4.71,4.71,0,0,0,171,45.05a15.84,15.84,0,0,0-7.27-1.32c-1,0-2.14,0-3.32,0s-2.24.09-3.17.19Zm0,9.2V78.67c.88.11,1.83.19,2.86.24s2.16.07,3.4.07a20.94,20.94,0,0,0,8.74-1.54q3.31-1.55,3.32-5.72a5.62,5.62,0,0,0-2.78-5.3q-2.79-1.58-8-1.58Z"/>
        <path style={primaryStyle} d="M213.16,34q12.06,0,18.48,4.29t6.41,13.34a15.13,15.13,0,0,1-2.58,9.16A17.16,17.16,0,0,1,228,66.31q1.62,2,3.4,4.6c1.18,1.72,2.35,3.53,3.51,5.41s2.28,3.84,3.37,5.87,2.08,4,3,6H227.82l-3-5.33c-1-1.8-2-3.56-3.1-5.26s-2.11-3.31-3.14-4.83a51,51,0,0,0-3.11-4.13h-5.95V88.18H197.47V35.38a70.51,70.51,0,0,1,8.15-1.08C208.43,34.09,211,34,213.16,34Zm.7,10.28c-.88,0-1.66,0-2.36.08l-2,.16V59h3.4c4.54,0,7.78-.57,9.74-1.7s2.94-3.07,2.94-5.8-1-4.5-3-5.6S217.72,44.27,213.86,44.27Z"/>
        <path style={primaryStyle} d="M298.66,61.36a33.09,33.09,0,0,1-2,12.1A24.88,24.88,0,0,1,291,82.19a23,23,0,0,1-8.46,5.3A30.93,30.93,0,0,1,272,89.27a30.11,30.11,0,0,1-10.36-1.78,23.85,23.85,0,0,1-8.5-5.3,24.69,24.69,0,0,1-5.72-8.73,32.45,32.45,0,0,1-2.09-12.1,31.26,31.26,0,0,1,2.17-12.1,25.8,25.8,0,0,1,5.83-8.77,24.15,24.15,0,0,1,8.51-5.34A29.31,29.31,0,0,1,272,33.37a30.07,30.07,0,0,1,10.36,1.78,23.71,23.71,0,0,1,8.51,5.34,25.13,25.13,0,0,1,5.72,8.77A32.46,32.46,0,0,1,298.66,61.36Zm-40.89,0a24.12,24.12,0,0,0,1,7.11,16.21,16.21,0,0,0,2.78,5.45A12.38,12.38,0,0,0,266,77.44a15.3,15.3,0,0,0,12,0,12.29,12.29,0,0,0,4.49-3.52,16.21,16.21,0,0,0,2.78-5.45,24.12,24.12,0,0,0,1-7.11,24.54,24.54,0,0,0-1-7.15,16.13,16.13,0,0,0-2.78-5.49A12.29,12.29,0,0,0,278,45.2,14.1,14.1,0,0,0,272,44a13.67,13.67,0,0,0-6,1.28,12.71,12.71,0,0,0-4.44,3.56,16.18,16.18,0,0,0-2.78,5.48A24.29,24.29,0,0,0,257.77,61.36Z"/>
        <path style={primaryStyle} d="M344.66,88.18Q339.48,79,333.45,70a184.2,184.2,0,0,0-12.83-16.93V88.18H308.71V34.61h9.82q2.55,2.55,5.65,6.26t6.3,7.93q3.19,4.22,6.37,8.73t6,8.7V34.61h12V88.18Z"/>
        <path style={primaryStyle} d="M435.39,41.18q3.74,12.42,7.44,22.53t7.32,18.52q2.66-9.12,5.36-21.49t5.19-26.13h5.18q-1.42,8.28-2.84,15.51t-3,13.76q-1.56,6.54-3.27,12.52t-3.74,11.78h-5.65c-1.22-2.94-2.43-5.89-3.64-8.82s-2.41-6-3.6-9.08-2.39-6.38-3.58-9.78-2.39-7-3.6-10.82q-1.85,5.74-3.64,10.85t-3.58,9.79Q424,75,422.17,79.4t-3.71,8.78h-5.54q-2.1-5.81-3.84-11.79t-3.26-12.53q-1.51-6.53-2.88-13.76t-2.77-15.49h5.41q1.2,6.8,2.42,13.33t2.59,12.64q1.37,6.11,2.77,11.56t2.85,10.09q3.3-8.58,7.11-18.58t7.51-22.47Z"/>
        <path style={primaryStyle} d="M523.63,61.36a33.82,33.82,0,0,1-2,12.13,25.32,25.32,0,0,1-5.45,8.78,22.46,22.46,0,0,1-8,5.29,27.13,27.13,0,0,1-19.33,0,22.46,22.46,0,0,1-8-5.29,25.32,25.32,0,0,1-5.45-8.78,33.82,33.82,0,0,1-2-12.13,33.54,33.54,0,0,1,2-12.1,25.42,25.42,0,0,1,5.45-8.74,22.46,22.46,0,0,1,8-5.29,27.13,27.13,0,0,1,19.33,0,22.46,22.46,0,0,1,8,5.29,25.42,25.42,0,0,1,5.45,8.74A33.54,33.54,0,0,1,523.63,61.36Zm-5.57,0a31.29,31.29,0,0,0-1.39-9.7,21.27,21.27,0,0,0-3.94-7.31,16.88,16.88,0,0,0-6.15-4.6,21.42,21.42,0,0,0-16.15,0,16.88,16.88,0,0,0-6.15,4.6,21.44,21.44,0,0,0-3.94,7.31,31.29,31.29,0,0,0-1.39,9.7,31.34,31.34,0,0,0,1.39,9.7,21.39,21.39,0,0,0,3.94,7.3A17.1,17.1,0,0,0,490.43,83a20.82,20.82,0,0,0,16.15,0,17.1,17.1,0,0,0,6.15-4.64,21.22,21.22,0,0,0,3.94-7.3A31.34,31.34,0,0,0,518.06,61.36Z"/>
        <path style={primaryStyle} d="M583.47,61.36a33.82,33.82,0,0,1-2,12.13A25.47,25.47,0,0,1,576,82.27a22.58,22.58,0,0,1-8,5.29,27.1,27.1,0,0,1-19.32,0,22.46,22.46,0,0,1-8-5.29,25.18,25.18,0,0,1-5.45-8.78,33.82,33.82,0,0,1-2-12.13,33.54,33.54,0,0,1,2-12.1,25.27,25.27,0,0,1,5.45-8.74,22.46,22.46,0,0,1,8-5.29,27.1,27.1,0,0,1,19.32,0,22.58,22.58,0,0,1,8,5.29,25.57,25.57,0,0,1,5.45,8.74A33.54,33.54,0,0,1,583.47,61.36Zm-5.57,0a31.29,31.29,0,0,0-1.39-9.7,21.44,21.44,0,0,0-3.94-7.31,17,17,0,0,0-6.15-4.6,21.45,21.45,0,0,0-16.16,0,16.93,16.93,0,0,0-6.14,4.6,21.46,21.46,0,0,0-4,7.31,31.59,31.59,0,0,0-1.39,9.7,31.64,31.64,0,0,0,1.39,9.7,21.41,21.41,0,0,0,4,7.3A17.15,17.15,0,0,0,550.26,83a20.84,20.84,0,0,0,16.16,0,17.19,17.19,0,0,0,6.15-4.64,21.39,21.39,0,0,0,3.94-7.3A31.34,31.34,0,0,0,577.9,61.36Z"/>
        <path style={primaryStyle} d="M637.73,61.36a30.58,30.58,0,0,1-2.16,12,22.93,22.93,0,0,1-6.07,8.5A25.81,25.81,0,0,1,620.19,87a39.72,39.72,0,0,1-11.91,1.7q-3.24,0-6.8-.35a41.81,41.81,0,0,1-6.26-1V35.61a35.79,35.79,0,0,1,6.26-1.12q3.56-.35,6.8-.35a39.39,39.39,0,0,1,11.91,1.71A25.64,25.64,0,0,1,629.5,41a23,23,0,0,1,6.07,8.5A30.36,30.36,0,0,1,637.73,61.36ZM600.47,83.54c.31.06,1.1.16,2.36.31a54,54,0,0,0,6.07.24A29.39,29.39,0,0,0,619,82.5,19.72,19.72,0,0,0,626.29,78a18.61,18.61,0,0,0,4.41-7.15,28.65,28.65,0,0,0,1.47-9.47,28.24,28.24,0,0,0-1.47-9.43,18.64,18.64,0,0,0-4.41-7.12A19.85,19.85,0,0,0,619,40.29a29.64,29.64,0,0,0-10.13-1.58,54.63,54.63,0,0,0-6.07.23c-1.26.15-2.05.26-2.36.31Z"/>
      </svg>
    )
  }

  return Logo;
}

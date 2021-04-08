import { useState } from "react";

const FacebookSVG = () => {
  const [facebook, setFacebook] = useState(false);

  return (
    <>
      {!facebook && (
        <p onMouseEnter={() => setFacebook(true)}>
          <svg
            className="contact-media-image"
            width="142"
            height="142"
            viewBox="0 0 142 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="facebook 1">
              <path
                id="facebook-bg"
                d="M124.25 0H17.75C7.96087 0 0 7.96087 0 17.75V124.25C0 134.039 7.96087 142 17.75 142H124.25C134.039 142 142 134.039 142 124.25V17.75C142 7.96087 134.039 0 124.25 0Z"
                fill="#1976D2"
              />
              <path
                id="facebook-text"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M119.812 71H97.625V53.25C97.625 48.351 101.601 48.8125 106.5 48.8125H115.375V26.625H97.625C90.5636 26.625 83.7914 29.4301 78.7983 34.4233C73.8051 39.4164 71 46.1886 71 53.25V71H53.25V93.1875H71V142H97.625V93.1875H110.938L119.812 71Z"
                fill="#FAFAFA"
              />
            </g>
          </svg>
        </p>
      )}
      {facebook && (
        <p onMouseLeave={() => setFacebook(false)}>
          <svg
            className="contact-media-image"
            width="142"
            height="142"
            viewBox="0 0 142 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="facebook 1">
              <path
                id="facebook-bg"
                d="M124.25 0H17.75C7.96087 0 0 7.96087 0 17.75V124.25C0 134.039 7.96087 142 17.75 142H124.25C134.039 142 142 134.039 142 124.25V17.75C142 7.96087 134.039 0 124.25 0Z"
                fill="#FAFAFA"
              />
              <path
                id="facebook-text"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M119.812 71H97.625V53.25C97.625 48.351 101.601 48.8125 106.5 48.8125H115.375V26.625H97.625C90.5636 26.625 83.7914 29.4301 78.7983 34.4233C73.8051 39.4164 71 46.1886 71 53.25V71H53.25V93.1875H71V142H97.625V93.1875H110.938L119.812 71Z"
                fill="#1976D2"
              />
            </g>
          </svg>
        </p>
      )}
      <p>Facebook</p>
    </>
  );
};

export default FacebookSVG;

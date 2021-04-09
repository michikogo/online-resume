import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const LinkedInSVG = () => {
  const [linkedIn, setLinkedIn] = useState(false);

  return (
    <>
      {!linkedIn && (
        <a
          href="https://www.linkedin.com/in/michikogo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="button-tooltip-2">
                Redirect to linkedin.com/in/michikogo
              </Tooltip>
            }
          >
            <svg
              className="contact-media-image"
              onMouseEnter={() => setLinkedIn(true)}
              width="144"
              height="144"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="linkedin">
                <g id="linkedIn-bg">
                  <path
                    id="Vector"
                    d="M111.679 0H32.3214C14.4708 0 0 14.4708 0 32.3214V111.679C0 129.529 14.4708 144 32.3214 144H111.679C129.529 144 144 129.529 144 111.679V32.3214C144 14.4708 129.529 0 111.679 0Z"
                    fill="#0B86CA"
                  />
                </g>
                <g id="linedIn-text">
                  <path
                    id="Vector_2"
                    d="M39.9028 59.8545H54.8665V108.137H39.9028V59.8545ZM47.5343 35.8629C49.2487 35.8629 50.9247 36.3707 52.3508 37.3221C53.7769 38.2736 54.8893 39.6261 55.5477 41.2091C56.206 42.792 56.3807 44.5345 56.0499 46.2167C55.719 47.8988 54.8974 49.4453 53.6886 50.6611C52.4798 51.8768 50.9381 52.7073 49.2578 53.0478C47.5776 53.3883 45.8341 53.2235 44.2474 52.5742C42.6607 51.925 41.3018 50.8204 40.3422 49.3997C39.3826 47.9791 38.8652 46.306 38.8554 44.5916C38.8488 43.4477 39.0684 42.3138 39.5016 41.255C39.9349 40.1963 40.5731 39.2337 41.3797 38.4225C42.1862 37.6113 43.1452 36.9675 44.2014 36.5282C45.2577 36.089 46.3903 35.8628 47.5343 35.8629Z"
                    fill="white"
                  />
                  <path
                    id="Vector_3"
                    d="M64.4436 59.8545H78.8585V66.4385C80.3015 63.9759 82.386 61.9514 84.8896 60.581C87.3932 59.2106 90.222 58.5458 93.074 58.6574C108.038 58.6574 111.08 68.6331 111.08 81.6515V108.137H96.1166V84.7939C96.1166 79.2074 96.1166 71.975 88.3355 71.975C80.5544 71.975 79.3573 78.0602 79.3573 84.345V108.237H64.3937L64.4436 59.8545Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>
          </OverlayTrigger>
        </a>
      )}
      {linkedIn && (
        <a
          href="https://www.linkedin.com/in/michikogo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="button-tooltip-2">
                Redirect to linkedin.com/in/michikogo
              </Tooltip>
            }
          >
            <svg
              className="contact-media-image"
              onMouseLeave={() => setLinkedIn(false)}
              width="144"
              height="144"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="linkedin">
                <g id="linkedIn-bg">
                  <path
                    id="Vector"
                    d="M111.679 0H32.3214C14.4708 0 0 14.4708 0 32.3214V111.679C0 129.529 14.4708 144 32.3214 144H111.679C129.529 144 144 129.529 144 111.679V32.3214C144 14.4708 129.529 0 111.679 0Z"
                    fill="white"
                  />
                </g>
                <g id="linedIn-text">
                  <path
                    id="Vector_2"
                    d="M39.9028 59.8545H54.8665V108.137H39.9028V59.8545ZM47.5343 35.8629C49.2487 35.8629 50.9247 36.3707 52.3508 37.3221C53.7769 38.2736 54.8893 39.6261 55.5477 41.2091C56.206 42.792 56.3807 44.5345 56.0499 46.2167C55.719 47.8988 54.8974 49.4453 53.6886 50.6611C52.4798 51.8768 50.9381 52.7073 49.2578 53.0478C47.5776 53.3883 45.8341 53.2235 44.2474 52.5742C42.6607 51.925 41.3018 50.8204 40.3422 49.3997C39.3826 47.9791 38.8652 46.306 38.8554 44.5916C38.8488 43.4477 39.0684 42.3138 39.5016 41.255C39.9349 40.1963 40.5731 39.2337 41.3797 38.4225C42.1862 37.6113 43.1452 36.9675 44.2014 36.5282C45.2577 36.089 46.3903 35.8628 47.5343 35.8629Z"
                    fill="#0B86CA"
                  />
                  <path
                    id="Vector_3"
                    d="M64.4436 59.8545H78.8585V66.4385C80.3015 63.9759 82.386 61.9514 84.8896 60.581C87.3932 59.2106 90.222 58.5458 93.074 58.6574C108.038 58.6574 111.08 68.6331 111.08 81.6515V108.137H96.1166V84.7939C96.1166 79.2074 96.1166 71.975 88.3355 71.975C80.5544 71.975 79.3573 78.0602 79.3573 84.345V108.237H64.3937L64.4436 59.8545Z"
                    fill="#0B86CA"
                  />
                </g>
              </g>
            </svg>
          </OverlayTrigger>
        </a>
      )}
    </>
  );
};

export default LinkedInSVG;
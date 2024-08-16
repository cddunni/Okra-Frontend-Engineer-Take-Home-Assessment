import PropTypes from 'prop-types';

const Loader = ({containerVariant}) => {
  return (
    <>
        <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${containerVariant} rotate`}
        >
            <g clipPath="url(#clip0_4_17486)">
                <path
                d="M7.99992 1.33325V3.99992M7.99992 11.9999V14.6666M3.2867 3.28654L5.17337 5.17321M10.8267 10.8266L12.7134 12.7132M1.33325 7.99992H3.99992M11.9999 7.99992H14.6666M3.2867 12.7132L5.17337 10.8266M10.8267 5.17321L12.7134 3.28654"
                stroke="#909092"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_4_17486">
                <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </>
  )
}

export default Loader
Loader.propTypes = {
  containerVariant: PropTypes.string
};
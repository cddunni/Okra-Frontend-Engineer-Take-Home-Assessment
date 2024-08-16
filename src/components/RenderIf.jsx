import PropTypes from 'prop-types';

export const RenderIf = ({condition, children}) => {

  if (!condition) {
    return null
  }

  return <>{children}</>
}
RenderIf.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.element,
};

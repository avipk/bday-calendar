import PropTypes from 'prop-types';

const eventPropTypes = PropTypes.shape({
  dayInMonth: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default eventPropTypes;

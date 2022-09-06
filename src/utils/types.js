import PropTypes from "prop-types";

export const ingredientType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
});
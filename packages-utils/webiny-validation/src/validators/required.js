import _ from 'lodash';
import ValidationError from './../validationError';

export default value => {
    if (_.isEmpty(value)) {
        if (_.isNumber(value)) {
            return;
        }
        throw new ValidationError('Value is required.');
    }
};
// @flow
import _ from 'lodash';

const and: Operator = {
    canProcess: ({ key }) => {
        return key === '$and';
    },
    process: ({ value, processor }) => {
        let output = '';
        switch (true) {
            case _.isArray(value):
                value.forEach(object => {
                    for (const [andKey, andValue] of Object.entries(object)) {
                        if (output === '') {
                            output = processor.process({ [andKey]: andValue });
                        } else {
                            output += ' AND ' + processor.process({ [andKey]: andValue });
                        }
                    }
                });
                break;
            case _.isPlainObject(value):
                for (const [andKey, andValue] of Object.entries(value)) {
                    if (output === '') {
                        output = processor.process({ [andKey]: andValue });
                    } else {
                        output += ' AND ' + processor.process({ [andKey]: andValue });
                    }
                }
                break;
            default:
                throw Error('$and operator must receive an object or an array.');
        }

        return '(' + output + ')';
    }
};

export default and;
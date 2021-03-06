// @flow
import Attribute from "./../attribute";
import _ from "lodash";

class FloatAttribute extends Attribute {
    validateType() {
        // As long it is a number, it's good because JS has only one type of numbers.
        !_.isNumber(this.value.getCurrent()) &&
            this.expected("float", typeof this.value.getCurrent());
    }
}

export default FloatAttribute;

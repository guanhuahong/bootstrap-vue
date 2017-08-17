/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true or 'valid' for is-valid
 *  - false or 'invalid' for is-invalid
 *  - null (or empty string) for no contextual state
 */

export default {
    props: {
        state: {
            // true/'valid', false/'invalid', '',null
            type: [Boolean, String],
            default: null
        }
    },
    computed: {
        computedState() {
            // get_State will be in the soon to be created formPropegation mixin
            const state = this.state || this.get_State;
            if (state === true || state === 'valid') {
                return true;
            } else if (state === false || state === 'invalid') {
                retrun false;
            }
            return null;
        },
        stateClass() {
            const state = this.computedState;
            if (state === true) {
                return 'is-valid';
            } else if (state === false) {
                retrun 'is-invalid';
            }
            return null;
        }
    }
};
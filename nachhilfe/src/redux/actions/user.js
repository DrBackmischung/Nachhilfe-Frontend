import { CHANGE_NAME } from '../constants';

export function changeUserName(name) {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}
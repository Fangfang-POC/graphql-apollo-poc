import _isEmpty from 'lodash.isempty';
export const isBoolean = (bool?: any) => {
    return (
        typeof bool === 'boolean' ||
        (typeof bool === 'object' && bool !== null && bool.valueOf && typeof bool.valueOf() === 'boolean')
    );
};

export function isPlainObject(maybeObj?: any): maybeObj is Record<string, unknown> {
    if (isObject(maybeObj) === false) return false;

    // If has modified constructor
    const ctor = maybeObj.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    // eslint-disable-next-line no-prototype-builtins
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
    }

    // Most likely a plain Object
    return true;
}

function isObject(maybeObj?: unknown) {
    return Object.prototype.toString.call(maybeObj) === '[object Object]';
}

export function isEmpty(val: unknown) {
    return _isEmpty(val);
}

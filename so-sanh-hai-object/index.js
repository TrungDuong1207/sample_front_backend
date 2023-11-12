function isObjectsEqual(objA, objB) {
    const keysB = Object.keys(objB);

    for (let key of keysB) {
        const valA = objA[key];
        const valB = objB[key];

        if (Array.isArray(valA) && Array.isArray(valB)) {
            const sortedArrA = JSON.stringify(valA.sort());
            const sortedArrB = JSON.stringify(valB.sort());

            if (sortedArrA !== sortedArrB) {
                return false;
            }
        } else if (typeof valA === "object" && typeof valB === "object") {
            if (valA === null || valB === null) {
                if (JSON.stringify(valA) !== JSON.stringify(valA)) {
                    return false;
                }
            } else {
                if (!isObjectsEqual(valA, valB)) {
                    return false;
                }
            }
        } else {
            if (JSON.stringify(valA) !== JSON.stringify(valA)) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    isObjectsEqual,
};
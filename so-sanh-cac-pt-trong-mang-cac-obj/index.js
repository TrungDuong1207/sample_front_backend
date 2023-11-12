alistItemApplyAMO = function (lineItemsApplyAMO) {
    let filteredItems = {};

    lineItemsApplyAMO.forEach((item) => {
        let key = item.type + '-' + item.id;
        if (!(key in filteredItems)) {
            filteredItems[key] = item;
        } else {
            if (item.ruleId !== filteredItems[key].ruleId) {
                if (item.priority < filteredItems[key].priority) {
                    filteredItems[key] = item;
                } else if (item.priority === filteredItems[key].priority) {
                    if ([0, 1].includes(item.type)) {
                        if (Number(item.minimum_quantity) > Number(filteredItems[key].minimum_quantity)) {
                            filteredItems[key] = item;
                        }
                    } else if ([2, 3].includes(item.type)) {
                        if (Number(item.maximum_quantity) < Number(filteredItems[key].maximum_quantity)) {
                            filteredItems[key] = item;
                        }
                    }
                }
            }
        }
    });

    let result = Object.values(filteredItems);
    return result;
};

let lineItemsApplyAMO = [
    { priority: 0, minimum_quantity: 100, type: 0, id: 123, ruleId: 6734 },
    { priority: 0, minimum_quantity: 50, type: 0, id: 123, ruleId: 6735 },
    { priority: 2, minimum_quantity: 100, type: 0, id: 123, ruleId: 6808 }
];

let filteredItems = alistItemApplyAMO(lineItemsApplyAMO);
console.log(filteredItems);
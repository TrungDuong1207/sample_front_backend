const handleSearchTextChange = useCallback(async (value) => {
    setSearchText(value);
    setNameError('');
    setEmailError('');
    debounce(async () => {
        if (value && value.length) {
            setLoading(true);
            let getCustomerList = await fetch(`${API_URL}/customer/customers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    domain: user.domain,
                    afterIndex: 0,
                    first: 10,
                    searchQuery: `${searchText} AND state:'ENABLED' NOT tag:'SalesRep'`
                }),
            });
            let getCustomerListData = await getCustomerList.json();
            if (getCustomerListData.success) {
                let searchedCustomers = getCustomerListData.customers.data.customers;
                searchedCustomers = customerHelper.convertToCustomerList(searchedCustomers)
                if (searchedCustomers.length) {
                    setCustomerList(searchedCustomers);
                } else {
                    setCustomerList([]);
                    setEmailError(t('Could not find customer.'));
                }
            }
            setLoading(false);
        } else if (!value) {
            setCustomerList([])
        }
    })();
}, [searchText, customerList])

let timer;
function debounce(func, delay = 300) {
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
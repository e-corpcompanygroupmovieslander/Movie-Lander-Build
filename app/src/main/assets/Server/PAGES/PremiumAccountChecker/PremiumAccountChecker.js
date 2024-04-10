const AUTOPREMIUMUSER = () => {
    GETPACKAGE(MTNPREMIUMPAYGET, 'cors', (data) => {
        FINDER(data, 'User', localStorage.getItem('User'), (user) => {
            if (new Date() <= new Date(user.ExpiryDate)) {
                CHECK(user, (result) => {
                    STORE('local', 'PremiumUser', JSON.stringify(result));
                    STORE('local', 'Premium', 'ON');
                });
            } else {
                REMOVESTORE('local', 'PremiumUser');
                REMOVESTORE('local', 'Premium');
            }
        });
    });
}

export { AUTOPREMIUMUSER };

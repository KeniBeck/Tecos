const useSession = () => {
    const login = (userData) => {
        if (process.browser) {
            sessionStorage.setItem('logged', true);
            sessionStorage.setItem('userData', JSON.stringify(userData));
        }
    };

    const logout = () => {
        if (process.browser) {
            sessionStorage.clear();
        }
    };

    const getUserData = () => {
        if (process.browser) {
            const userData = sessionStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        }
        return null;
    };

    return { login, logout, getUserData };
};

export default useSession;

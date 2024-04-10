const useSession = () => {
    const login = (userData) => {
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('logged', true);
            sessionStorage.setItem('userData', JSON.stringify(userData));
        }
    };

    const logout = () => {
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.clear();
        }
    };

    const getUserData = () => {
        if (typeof sessionStorage !== 'undefined') {
            const userData = sessionStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        }
        return null; // O manejar de otra manera si sessionStorage no está disponible
    };

    return { login, logout, getUserData };
};

export default useSession;

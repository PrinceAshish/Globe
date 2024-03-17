import secureLocalStorage from "react-secure-storage";
const storage = secureLocalStorage;
const SecureStorage = {
    setItem: (name: string, value: string) => storage.setItem(name, value),
    getItem: (name: string) => storage.getItem(name) ?? null,
    removeItem: (name: string) => storage.removeItem(name),
    clear: () => storage.clear(),
};

export default SecureStorage
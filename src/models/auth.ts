export interface User {
    name: string;
    email: string;
}

export interface AuthContextType {
    user: User | null; // null if user is logged out
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    error: string | null;
}
export interface UserAuth {
    email: string | null;
    accessToken: string | null;
}

export interface AuthContext {
    user: UserAuth, setUser: Function;
}

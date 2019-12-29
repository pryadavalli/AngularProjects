/* Defines the product entity */
export interface Login {
    id: number | null;
    userName: string;
    password: string;
    token: string;
    saveLogin: boolean;
}


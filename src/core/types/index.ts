export type userCookie = {
    id: string;
    email: string | null;
    refreshToken: string;
}

export type User = {
    username: string;
    email: string;
    password: string;
}

export type University = {
    domains: string[];
    country: string;
    alpha_two_code: string;
    web_pages: string[];
    name: string;
}
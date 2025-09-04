export class SessionStorage {
    static get(name: string): string | null {
        return window.sessionStorage.getItem(name);
    }
    static set(name: string, value: any): void {
        window.sessionStorage.setItem(name, value);
    }
}

export class LocalStorage {
    static get(name: string): string | null {
        return window.localStorage.getItem(name);
    }
    static set(name: string, value: any): void {
        window.localStorage.setItem(name, value);
    }
}

export class Cookies {
    static get(name: string) {
        const _name = `${name}=`;
        const decodeCookie = decodeURIComponent(document.cookie);
        const ca = decodeCookie.split(";");
        const cookie = ca.find((c) => c.indexOf(_name) !== -1);

        if (cookie) {
            const index = cookie.indexOf(_name);
            const data = cookie.substring(index + _name.length);
            return data;
        } else {
            return null;
        }
    }

    /**
     * Set a cookie
     * @param name Cookie name
     * @param value  Cookie value
     */
    static set(name: string, value: any): void;
    /**
     * Set a cookie, with days limit
     * @param name Cookie name
     * @param value  Cookie value
     * @param expiresDate Days until expires (0 for only today).
     */
    static set(name: string, value: any, expiresDate: number): void;
    /**
     * Set a cookie, with date limit
     * @param name Cookie name
     * @param value  Cookie value
     * @param expiresDate Date to expire cookie
     */
    static set(name: string, value: any, expiresDate: Date): void;
    static set(name: string, value: any, expiresDate?: Date | number): void {
        let expires: number | null | undefined = null;

        if (expiresDate) {
            if (expiresDate instanceof Date) {
                expires = expiresDate.getTime();
            } else {
                const now = new Date(Date.now());
                expires = (expiresDate === 0
                    ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 0)
                    : new Date(Date.now() + expiresDate * 1000 * 60 * 60 * 24)).getTime();
            }
        }

        //@ts-ignore
        window.cookieStore.set({
            name,
            value,
            expires
        })
    }

    static delete(name: string): void {
        //@ts-ignore
        window.cookieStore.delete(name);
    }
}
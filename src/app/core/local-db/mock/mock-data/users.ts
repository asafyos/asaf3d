import { User } from "../../types";

export const users: User[] = [
    {
        id: 1,
        username: "safsaf",
        password: "safsaf",
        role: {
            id: 1,
            name: "מנהל"
        },
        name: "אסף",
        phone: ""
    },
    {
        id: 2,
        username: "domi",
        password: "domi",
        role: {
            id: 2,
            name: "רגיל"
        },
        name: "דומי",
        phone: "054-9011324"
    },
]
// https://dbdiagram.io/d/Asaf3D-687dde18f413ba3508d0367e

export type Category = {
    id: number,
    name: string,
    selected?: boolean,
}

export type Model = {
    id: number,
    name: string,
    imageUrl: string,
    modelUrl: string,
    printTime: number, // minutes
    invisible: boolean,
    height?: number,
    width?: number,
    depth?: number,
    ams: boolean,
    categories: Category[],
    parts: ModelPart[],
}

export type ModelPart = {
    id: number,
    name: string,
    weight: number, // grams
}

export type Color = {
    id: number,
    name: string,
    imageUrl: string,
    kgPrice: number,
    outOfStock: boolean,
    colorTag: string,
    colorTag2: string
}

export type Role = {
    id: number,
    name: string,
}

export type User = {
    id: number,
    username: string,
    password?: string,
    role: Role,
    name: string,
    phone: string,
}

export type Status = {
    id: number,
    name: string,
}

export type Order = {
    id: number,
    user: User,
    status: Status,
    name?: string,
    phone?: number,
    finalPrice: number,
    items: OrderItem[],
}

export type OrderItem = {
    item?: number,
    model: Model,
    quantity: number,
    notes: string,
    custom: boolean,
    link?: string,
    finalPrice: number,
    colors: OrderItemColor[],
}

export type OrderItemColor = {
    id?: number,
    part: ModelPart,
    color?: Color,
    notes?: string,
}
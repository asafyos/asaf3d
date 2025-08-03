export type category = {
    id: number,
    name: string,
}

export type model = {
    id: number,
    name: string,
    imageUrl: string,
    modelUrl: string,
    printTime: number,
    invisible: boolean,
}

export type modelCategories = {
    model: number, // model.id
    category: number, // category.id
}

export type modelPart = {
    id: number,
    model: number, //model.id
    name: string,
    weight: number,
}

export type color = {
    id: number,
    name: string,
    imageUrl: string,
    kgPrice: number,
    outOfStock: boolean,
    colorTag: string,
    colorTag2: string    
}

export type role = {
    id: number,
    name: string,
}

export type user = {
    id: number,
    username: string,
    password?: string,
    role: number, // role.id
    name: string,
    phone: string,
}

export type status = {
    id: number,
    name: string,
}

export type order = {
    id: number,
    user: number, // user.id
    status: number, // status.id
    name?: string,
    phone?: number,
    finalPrice: number,
}

export type orderItem = {
    item: number,
    order: number, // order.id
    model: number, // model.id
    quantity: number,
    notes: string,
    custom: boolean,
    link?: string,
    finalPrice: number,
}

export type orderItemColor = {
    id: number,
    item: number, // orderItem.item
    part: number, //modelPart.id
    color: number, // color.id
    notes?: string,
}
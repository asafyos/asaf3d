import { Model } from "../../types";
import { categories } from "./categories";

export const models: Model[] = [
    {
        id: 1,
        name: "ארנב סרוג",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/US348b98c9ec5d8d/design/2025-03-01_6aeab822d3401.jpg?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/models/1164726",
        printTime: 57,
        invisible: false,
        categories: [categories[0], categories[2]],
        parts: [{
            id: 1,
            name: "גוף",
            weight: 7
        }],
    },
    {
        id: 2,
        name: "לבובו",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/US80de0324342069/design/2025-06-04_fd00acd5c2f798.jpg?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/en/models/1485568-labubu-keychain-version",
        printTime: 84,
        invisible: false,
        categories: [categories[2], categories[3]],
        parts: [{
            id: 2,
            name: "גוף",
            weight: 14
        }],
    },
    {
        id: 3,
        name: "פרמידת ספירלה",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/USbea4f2cb560be0/design/2024-08-17_c9b46ba8f2f9a.jpg?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/en/models/593330-v2-mini-vortex-thread-hexagon-illusion#profileId-515130",
        printTime: 74,
        invisible: false,
        height: 8,
        width: 3,
        depth: 3,
        categories: [categories[1]],
        parts: [{
            id: 3,
            name: "פנימי",
            weight: 10
        }, {
            id: 4,
            name: "חיצוני",
            weight: 8
        }],
    },
];
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
        ams: false
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
        ams: false
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
        ams: false
    },
    {
        id: 4,
        name: "שועל חוליות",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/USc87a3892cfd676/design/2025-01-27_a6addab2885db.png?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/en/models/1046518-mini-articulated-fox?from=search#profileId-1032461",
        printTime: 234,
        invisible: false,
        categories: [categories[4]],
        parts: [{
            id: 5,
            name: "גוף",
            weight: 24
        }, {
            id: 6,
            name: "עיניים",
            weight: 5
        }, {
            id: 7,
            name: "זנב/פה",
            weight: 41
        }],
        ams: true
    },
    {
        id: 5,
        name: "פנדה חוליות",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/USc270519953202/design/2025-02-07_8a8f80b4831398.png?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/en/models/1084489-mini-articulated-panda#profileId-1077026",
        printTime: 174,
        invisible: false,
        categories: [categories[4]],
        parts: [{
            id: 8,
            name: "לבן",
            weight: 34
        }, {
            id: 9,
            name: "שחור",
            weight: 12
        }],
        ams: true
    },
    {
        id: 6,
        name: "פלטיפוס חוליות",
        imageUrl: "https://makerworld.bblmw.com/makerworld/model/UScde8c6495d6e/design/2025-02-23_a59ad5712a7538.png?x-oss-process=image/resize,w_1000/format,webp",
        modelUrl: "https://makerworld.com/en/models/1144178-mini-articulated-platypus-and-perry-the-platypus#profileId-1147048",
        printTime: 162,
        invisible: false,
        categories: [categories[4]],
        parts: [{
            id: 10,
            name: "גוף",
            weight: 15
        }, {
            id: 11,
            name: "עיניים",
            weight: 2
        }, {
            id: 12,
            name: "גפיים",
            weight: 7
        }],
        ams: true
    },
];
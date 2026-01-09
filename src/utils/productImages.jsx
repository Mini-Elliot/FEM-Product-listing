// src/utils/images.js
const images = import.meta.glob("/src/assets/images/*", {
    eager: true,
    import: "default",
});

export function getImage(fileName) {
    return images[`/src/assets/images/${fileName}`];
}

import { generatePalette } from './colorHelpers'

const getPalette = (id, palettes) => {
    return generatePalette(palettes.find(palette => palette.id === id))
}

const gatherShades = (palette, colorToFilterBy) => {
    let shades = []
    let allColors = palette.colors
    for (let key in allColors) {
        shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
        )
    }
    return shades
}

export { getPalette, gatherShades }
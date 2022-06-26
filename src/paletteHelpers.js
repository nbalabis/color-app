import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import ColorBox from './ColorBox'

const getPalette = (id) => {
    return generatePalette(seedColors.find(palette => palette.id === id))
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
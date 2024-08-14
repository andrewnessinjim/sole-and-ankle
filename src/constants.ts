const BREAKPOINTS = {
    laptopMax: 1300,
    tabletMax: 950,
    phoneMax: 600
}

export const MEDIA_QUERIES = {
    'laptopAndBelow': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
    'tabletAndBelow': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
    'phoneAndBelow': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`
}
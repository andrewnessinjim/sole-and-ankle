const BREAKPOINTS = {
    laptopMax: 81.25,
    tabletMax: 59.375,
    phoneMax: 37.5
}

const MEDIA_QUERIES = {
    'laptopAndBelow': `(max-width: ${BREAKPOINTS.laptopMax})px`,
    'tabletAndBelow': `(max-width: ${BREAKPOINTS.tabletMax})px`,
    'phoneAndBelow': `(max-width: ${BREAKPOINTS.phoneMax})px`
}
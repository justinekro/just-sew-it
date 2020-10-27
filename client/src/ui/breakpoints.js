export const homeTablet = 720;
export const tablet = 576;
export const desktop = 992;
export const largeDesktop = 1170;

const tabletQuery = `@media all and (min-width: ${tablet}px)`;
const desktopQuery = `@media all and(min-width: ${desktop}px)`;

const breakpoints = {
	tabletQuery,
	desktopQuery,
};

export default breakpoints;

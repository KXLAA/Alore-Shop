const sizes = {
  mobileXs: `338px`,
  mobileS: `524px`,
  mobile: `768px`,
  tablet: `1024px`,
  laptop: `1440px`,
  desktop: `1800px`,
};

export const device = {
  mobileXs: `(max-width: ${sizes.mobileXs})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default device;

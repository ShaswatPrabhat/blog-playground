export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = (minOrMAx) => ({
  mobileS: `(${minOrMAx}-width: ${size.mobileS})`,
  mobileM: `(${minOrMAx}-width: ${size.mobileM})`,
  mobileL: `(${minOrMAx}-width: ${size.mobileL})`,
  tablet: `(${minOrMAx}-width: ${size.tablet})`,
  laptop: `(${minOrMAx}-width: ${size.laptop})`,
  laptopL: `(${minOrMAx}-width: ${size.laptopL})`,
  desktop: `(${minOrMAx}-width: ${size.desktop})`,
  desktopL: `(${minOrMAx}-width: ${size.desktop})`,
});

export default device;

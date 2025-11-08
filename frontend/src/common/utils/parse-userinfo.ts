export const parsePart = (part: string) => {
  switch (part) {
    case 'SPRINGBOOT':
      return 'SpringBoot';
    case 'WEB':
      return 'Web';
    case 'IOS':
      return 'iOS';
    case 'ANDROID':
      return 'Android';
    case 'NODEJS':
      return 'Node.js';
    case 'ADMIN':
      return '운영진';
    default:
      return part;
  }
};

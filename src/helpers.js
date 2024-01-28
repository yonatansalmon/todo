export const getStatusStyles = (status, emoji) => {
  switch (status) {
    case 'todo':
      return {
        backgroundColor: '#CA4A3D',
        border: '2px solid #CA4A3D',
        color: '#fff',
        emoji: '"🍎"',
        boxShadow: '0px 9px 0px 0px #CA4A3D;',
        filter: 'brightness(1) invert(1);'
      };
    case 'doing':
      return {
        backgroundColor: '#F66C0E0F',
        border: '2px dashed #FFA550',
        color: '#000',
        emoji: '"🥕"',
        boxShadow: '0px 9px 0px 0px #FFA550;',
        filter: 'brightness(0) invert(0);'
      };
    case 'done':
      return {
        backgroundColor: '#19C9290F',
        border: '2px solid #19C929',
        color: '#908c8c',
        emoji: '"✅"',
        boxShadow: '0px 9px 0px 0px #89E392;',
        filter: 'grayscale(50%) contrast(70%) brightness(3);'
      };
    default:
      return {
        backgroundColor: '#cbcbcb;',
        border: '1px solid #ddd',
        color: '#000',
        emoji: emoji ? `"${emoji}"` : 'none',
        boxShadow: 'none',
        filter: 'brightness(0) invert(0);'
      };
  }
};


export function uppercaseFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}




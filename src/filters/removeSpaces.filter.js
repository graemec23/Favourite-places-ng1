export default function () {
  return function (text) {
    console.log('filter', text)
    // return (!text) ? '' : text.replace(/ /g, '');
    return 'hello';
  };
};

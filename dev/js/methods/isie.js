export default () => {
  if (/MSIE 10/i.test(navigator.userAgent)) {
    // console.log('isIE10');
    return true;
  }

  else if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    // console.log('isIE9 or 8');
    return true;
  }

  else if (/Edge\/\d./i.test(navigator.userAgent)){
    // console.log('isEdge');
    return true;
  }

  else {
    return false;
  }
}

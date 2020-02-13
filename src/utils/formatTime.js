export const formatTime = ( param ) => {
  if (param == null || isNaN(param) || param < 0 ) {
    return null;
  } else {
    let seconds = Math.floor(param % 60) + '';
    seconds = seconds.padStart(2, '0');

    let minutes = Math.floor((param / 60) % 60) + '';
    minutes = minutes.padStart(2, '0');

    let hours = Math.floor(param / 3600) + '';
    hours = hours.padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }
};

import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';



class daysToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  static defaultProps = {
    title: 'Days to summer: ',
  }
  countTime() {

    let countdown = '';
    const today = new Date();
    console.log('today:', today);

    const firstDayOfTheYear = new Date(today.getFullYear(), 0, 1);
    console.log('firstDayOfTheYear:', firstDayOfTheYear);

    const firstSummerDay = new Date(today.getFullYear(), 5, 21);
    console.log('firstSummerDay: ', firstSummerDay);

    const firstSummerDayNo = Math.ceil((firstSummerDay - firstDayOfTheYear +1) / 86400000);
    console.log('firstSummerDayNo: ', firstSummerDayNo);

    const todayNo = Math.ceil((today - firstDayOfTheYear + 1) / 86400000);
    console.log ('todayNo', todayNo);

    const lastSummerDay = new Date(today.getFullYear(), 8, 23);
    console.log('lastSummerDay: ', lastSummerDay);

    const lastSummerDayNo = Math.ceil((lastSummerDay - firstDayOfTheYear +1) / 86400000);
    console.log('lastSummerDayNo:', lastSummerDayNo);

    const endOfYear =  new Date(today.getFullYear(), 11, 31);
    console.log('endOfYear:', endOfYear);

    const endOfYearNo = Math.ceil((endOfYear - firstDayOfTheYear + 1) / 86400000);
    console.log('endOfYearNo:', endOfYearNo);

    if (firstSummerDayNo > todayNo) {
      countdown = firstSummerDayNo - todayNo;
    }
    else if (firstSummerDayNo < todayNo < lastSummerDayNo) {
      countdown = 'undefined';
    }
    else countdown = endOfYearNo - todayNo + firstSummerDayNo;

    return countdown;
  }

  render() {
    const { title } = this.props;
    const countdown = this.countTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.counter}>{title}{countdown}</h3>
      </div>
    );
  }
}

export default daysToSummer;

import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';



class daysToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    oneDay: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  static defaultProps = {
    title: 'days to summer',
    oneDay: 'day to summer',
  }

  countTime() {

    let countdown = '';
    const today = new Date();

    const nextYearSummerDay = new Date(today.getFullYear() + 1, 5, 21, 12);
    const firstDayOfTheYear = new Date(today.getFullYear(), 0, 1, 12);
    const firstSummerDay = new Date(today.getFullYear(), 5, 21, 12);
    const firstSummerDayNo = Math.ceil((firstSummerDay - firstDayOfTheYear) / 86400000 + 1);
    const nextYearFirstSummerDayNo = Math.ceil((nextYearSummerDay - (new Date(today.getFullYear() + 1, 0, 1, 12))) / 86400000 + 1);
    const todayNo = Math.ceil((today - firstDayOfTheYear + 1) / 86400000);
    const lastSummerDay = new Date(today.getFullYear(), 8, 23, 12);
    const lastSummerDayNo = Math.ceil((lastSummerDay - firstDayOfTheYear + 1) / 86400000);
    const endOfYear =  new Date(today.getFullYear(), 11, 31, 12);
    const endOfYearNo = Math.ceil(((endOfYear - firstDayOfTheYear) / 86400000) + 1);

    if (firstSummerDayNo > todayNo) {
      countdown = firstSummerDayNo - todayNo;
    }

    else if (todayNo < lastSummerDayNo) {
      countdown = null; //firstSummerDayNo - todayNo
    }
    else if (lastSummerDayNo < todayNo) {
      countdown = endOfYearNo - todayNo + nextYearFirstSummerDayNo;
    }

    return countdown;
  }

  render() {
    const { title, oneDay } = this.props;
    const countdown = this.countTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.counter}>{countdown <= 0 ? null : countdown == 1 ? countdown + ' ' + oneDay : countdown + ' ' + title}</h3>
      </div>
    );
  }
}
export default daysToSummer;

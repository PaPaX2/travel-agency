import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  static defaultProps = {
    title: 'Happy Hour',
    promoDescription: 'is now!',
  }

  render() {
    const { title, promoDescription } = this.props;

    return (
      <div className={styles.component}>
        <h3 classNeme={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>


    );
  }

}

export default HappyHourAd;

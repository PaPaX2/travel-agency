import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeTripDuration, addTripTag, removeTripTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // DONE - add more dispatchers for other filters
  changeTripDuration: duration => dispatch(changeTripDuration(duration)), //Kajetan
  addTripTag: tag => dispatch(addTripTag(tag)), //Kajetan
  removeTripTag: tag => dispatch(removeTripTag(tag)), //Kajetan
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

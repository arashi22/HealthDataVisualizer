import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCounties } from '../actions/countiesActions';
import { iOSStatusBarHeight } from '../config/constants';

class MyListItem extends React.PureComponent {

  render() {
    const {id, title, isFavorite, onPressItem} = this.props
    return (
      <TouchableWithoutFeedback activeOpacity={1} onPress={onPressItem}>
        <View style={styles.countyItem}>
          <Text>{title}</Text>
          {
            isFavorite && <Image source={require('../assets/star.png')} style={styles.likeIcon} />          
          }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export class TodosScreen extends Component {

  _keyExtractor = (item, index) => index;

  _onPressItem = (item) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', {
      id: item.id,
      title: item.title,
      isFavorite: item.isFavorite
    });
  };

  componentDidMount() {    
    const { navigation } = this.props;
    navigation.setParams({
      toggleControlPanel: this._openControlPanel,
    });

    // Load counties      
    this.props.loadCounties();
  }

  componentWillReceiveProps(props) {
    if(props !== this.props) {}
  }

  _renderItem = ({item: countyItem}) => {
    return (
      <MyListItem
        id={countyItem.id}
        onPressItem={(e) => this._onPressItem(countyItem)}
        title={countyItem.title}
        isFavorite={countyItem.isFavorite}
      />
    )
  }

  render() {
    const { navigation, counties } = this.props;
    return (
      
        !counties.loading ?
          <View style={styles.container}>
            <FlatList
              data={counties.counties}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        :
          <ActivityIndicator
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        
    );
  }
}

TodosScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default connect(
  state => ({counties: state.counties}),
  dispatch => ({    
    loadCounties: bindActionCreators(loadCounties, dispatch),
  })
)(TodosScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  countyItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeIcon: {
    resizeMode: 'contain', // or 'stretch'
    width: 20,
    height: 20,
  }
});
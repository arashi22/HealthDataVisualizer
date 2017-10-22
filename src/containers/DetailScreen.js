import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView, Image, Text, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadCountyDetail, setFavorite } from '../actions/countiesActions';

import {iOSStatusBarHeight } from '../config/constants';

export class DetailScreen extends Component {

  static navigationOptions = (navigation, screenProps) => {
    const { state, setParams } = navigation.navigation; 
    const stateParams = state.params || {}
  };

  constructor(props) {
    super(props)

    this.state = {
      isFavorite: this.props.navigation.state.params.isFavorite,
    };
  }

  _onPressLike = () => {
    const countyId = this.props.navigation.state.params.id;    
    this.props.setFavorite({id: countyId, isFavorite: !this.state.isFavorite});
    this.setState((prevState) => {
      return {isFavorite: !prevState.isFavorite}
    });    
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      toggleControlPanel: this._openControlPanel,
    });

    // Load county detail
    this.props.loadCountyDetail(this.props.navigation.state.params.id);
  }

  componentWillReceiveProps(props) {
    if(props !== this.props) {
    }
  }

  render() {
    const { navigation, countyDetail:data } = this.props;
    const { countyDetail } = data
    return (
        !data.loading ?
          <View style={styles.container}>
            <View style={styles.countyTitleWrap}>
              <Text style={styles.countyTitle}>{navigation.state.params.title}</Text>
              <TouchableWithoutFeedback onPress={this._onPressLike}>
                <Image source={this.state.isFavorite? require('../assets/star.png') : require('../assets/emptyStar.png')} style={styles.likeIcon} />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.countyDescriptionWrap}>
              <Text style={styles.countyDescription}>
                {countyDetail && countyDetail.description}
              </Text>
            </View>
            <View style={styles.dataWrap}>
              <View style={styles.itemGroup}>
                <View style={styles.itemHeader}>
                  <Text>FIPS</Text>
                </View>
                <View style={styles.itemContent}>
                  <Text>{countyDetail && countyDetail.fips}</Text>
                </View>
              </View>
              <View style={styles.itemGroup}>
                <View style={styles.itemHeader}>
                  <Text>Number</Text>
                </View>
                <View style={styles.itemContent}>
                  <Text>{countyDetail && countyDetail.number}</Text>
                </View>
              </View>
              <View style={styles.itemGroup}>
                <View style={styles.itemHeader}>
                  <Text>Percent</Text>
                </View>
                <View style={styles.itemContent}>
                  <Text>{countyDetail && countyDetail.percent}</Text>
                </View>
              </View>
            </View>
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

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default connect(
  state => ({countyDetail: state.countyDetail}),
  dispatch => ({
    loadCountyDetail: bindActionCreators(loadCountyDetail, dispatch),
    setFavorite: bindActionCreators(setFavorite, dispatch),
  })
)(DetailScreen);

const styles = StyleSheet.create({
  header: {
    marginTop: iOSStatusBarHeight
  },
  container: {
    flex: 1,
    paddingTop: 17,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
    position: 'relative',    
  },
  countyTitleWrap: {
    alignItems: 'center',
    position: 'relative'
  },
  countyTitle: {
    fontSize: 40,
    fontWeight: '600',
    alignSelf: 'center'
  },
  likeIcon: {    
    resizeMode: 'contain', // or 'stretch'
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0    
  },
  countyDescriptionWrap: {    
    marginTop: 20
  },
  countyDescription: {
    fontSize: 14,
    fontWeight: '500'
  },
  dataWrap: {
    marginTop: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    position: 'relative',
  },
  itemGroup: {
    position: 'relative',
    flex: 1
  },
  itemHeader: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000',
    backgroundColor: '#CCC',
    paddingVertical: 10
  },
  itemContent: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#000',
    paddingVertical: 10
  }
});
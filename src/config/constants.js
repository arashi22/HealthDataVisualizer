import keyMirror from 'keymirror';
import { Platform } from 'react-native';

export const ActionTypes = keyMirror({
  LOAD_COUNTIES: null,
  LOAD_COUNTIES_SUCCESS: null,
  LOAD_COUNTIES_FAILED: null,
  LOAD_COUNTY_DETAIL: null,
  LOAD_COUNTY_DETAIL_SUCCESS: null,
  LOAD_COUNTY_DETAIL_FAILED: null,
  SET_FAVORITE: null,
  SET_FAVORITE_SUCCESS: null,
  SET_FAVORITE_FAILED: null,
});

export const API_Config = {
	baseUrl: 'http://localhost:3000/',
	appVersion: '1',
  mobileAppId: 1,
  languageCode: 1,
};

export const Fonts = {
  letterGothic: Platform.OS == 'ios' ? 'Letter Gothic Std' : 'Letter-Gothic-Std',
  letterGothicBold: Platform.OS == 'ios' ? 'LetterGothicStd-Bold' : 'Letter-Gothic-Std',
  josefinSans: Platform.OS == 'ios' ? 'Josefin Sans' : 'JosefinSans-Bold',
  josefinSansBold: 'JosefinSans-Bold'
};

export const iOSStatusBarHeight = Platform.OS == 'ios' ? 20 : 0;
export const AndroidStatusBarHeight = Platform.OS == 'ios' ? 0 : 25;
export const NavigationBarHeight = 44;
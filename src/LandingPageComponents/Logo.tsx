import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const foodCartIcon = `<svg width="79" height="64" viewBox="0 0 79 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.9108 29.0081H77.6991C78.2107 29.0081 78.5517 29.2826 78.5517 29.6942V32.4387C78.5517 32.8504 78.2107 33.1248 77.6991 33.1248H67.4684V54.3944C67.4684 54.806 67.1274 55.0805 66.6159 55.0805H62.2678C61.8415 60.0891 56.6409 64 50.4173 64C44.1936 64 38.993 60.0891 38.5667 55.0805H10.9438L7.7041 61.5299C7.61884 61.8044 7.27782 61.9416 6.9368 61.9416H3.52657C3.01503 61.9416 2.67401 61.6672 2.67401 61.2555V54.3944V42.7304V37.9276V33.1248H0.968891C0.457356 33.1248 0.116333 32.8504 0.116333 32.4387V29.6942C0.116333 29.2826 0.457356 29.0081 0.968891 29.0081H2.67401V11.6494C1.22466 11.2378 0.116333 10.14 0.116333 8.76776V7.05247C0.116333 6.98386 0.116333 6.91525 0.286844 6.77802V6.70941C0.286844 6.6408 0.286845 6.6408 0.372098 6.57219L0.372101 6.57219L0.457356 6.50358L8.98294 1.01466C9.15345 0.946053 9.32396 0.877441 9.49447 0.877441H57.2377C57.3376 0.877441 57.4375 0.900984 57.5202 0.920488L57.5202 0.92049C57.5788 0.934281 57.6287 0.946053 57.664 0.946053L67.0421 6.43497L67.1274 6.50358L67.2127 6.57219C67.2127 6.6065 67.234 6.62365 67.2553 6.6408C67.2766 6.65795 67.2979 6.67511 67.2979 6.70941C67.3832 6.70941 67.3832 6.77802 67.3832 6.77802C67.4684 6.91525 67.4684 6.98386 67.4684 7.05247V8.76776C67.4684 10.0714 66.3601 11.2378 64.9108 11.6494V29.0081ZM56.3852 22.9017L55.6179 29.0081H59.7954V11.3064C59.1986 11.6494 58.4313 11.8553 57.664 11.8553C56.4704 11.8553 55.3621 11.375 54.6801 10.6889C53.998 11.375 52.8897 11.8553 51.6961 11.8553C50.5025 11.8553 49.3942 11.375 48.7121 10.6889C48.0301 11.375 46.9218 11.8553 45.7282 11.8553C44.5346 11.8553 43.4263 11.375 42.7442 10.6889C42.0622 11.375 40.9539 11.8553 39.7603 11.8553C38.5667 11.8553 37.4584 11.375 36.7763 10.6889C36.0943 11.375 34.986 11.8553 33.7924 11.8553C32.5988 11.8553 31.4905 11.375 30.8084 10.6889C30.1264 11.375 29.0181 11.8553 27.8245 11.8553C26.6309 11.8553 25.5226 11.375 24.8405 10.6889C24.1585 11.375 23.0501 11.8553 21.8566 11.8553C20.663 11.8553 19.5547 11.375 18.8726 10.6889C18.1906 11.375 17.0822 11.8553 15.8887 11.8553C14.6951 11.8553 13.5868 11.375 12.9047 10.6889C12.2227 11.375 11.1143 11.8553 9.92075 11.8553C9.15345 11.8553 8.38615 11.6494 7.78936 11.3064V16.6581H27.3982C27.9097 16.6581 28.2508 16.9325 28.2508 17.3442V29.0767H34.2187V27.7045H33.7924C32.1725 27.7045 30.8084 26.6067 30.8084 25.3031V23.8623C30.8084 22.5587 32.1725 21.4609 33.7924 21.4609H34.2187V20.7748C34.2187 18.8536 36.0943 17.3442 38.4814 17.3442C40.5276 17.3442 42.2327 18.5106 42.659 20.0886H44.4494C44.7904 20.0886 45.0461 20.2259 45.2167 20.5003C45.3872 20.7061 45.3019 20.9806 45.1314 21.1864L42.7442 23.725V29.0081H48.6269L47.8596 22.9017C47.8596 22.7342 47.9725 22.5667 48.0605 22.4361C48.0807 22.4063 48.0995 22.3784 48.1154 22.3528C48.2006 22.2156 48.4564 22.147 48.7121 22.147H55.5326C55.7884 22.147 55.9589 22.2156 56.1294 22.3528C56.2999 22.49 56.3852 22.6959 56.3852 22.9017ZM54.5948 23.5192H49.65L50.332 29.0081H53.9127L54.5948 23.5192ZM33.7924 26.2637H34.2187V22.7645H33.7924C33.1103 22.7645 32.5135 23.2448 32.5135 23.7937V25.2345C32.5135 25.7834 33.1103 26.2637 33.7924 26.2637ZM35.9238 22.147V26.9498V29.0081H41.0391V23.5192C41.0391 23.382 41.1244 23.2448 41.2096 23.1075L42.7442 21.4609H41.8917H35.9238V22.147ZM38.4814 18.7164C37.3731 18.7164 36.4353 19.2653 36.0943 20.0886H40.8686C40.5276 19.2653 39.5898 18.7164 38.4814 18.7164ZM12.0521 8.76776V7.73858H7.78936V8.76776C7.78936 9.72832 8.72717 10.483 9.92075 10.483C11.1143 10.483 12.0521 9.72832 12.0521 8.76776ZM18.0201 8.76776V7.73858H13.7573V8.76776C13.7573 9.72832 14.6951 10.483 15.8887 10.483C17.0822 10.483 18.0201 9.72832 18.0201 8.76776ZM23.988 8.76776V7.73858H19.7252V8.76776C19.7252 9.72832 20.663 10.483 21.8566 10.483C23.0501 10.483 23.988 9.72832 23.988 8.76776ZM29.9559 8.76776V7.73858H25.6931V8.76776C25.6931 9.72832 26.6309 10.483 27.8245 10.483C29.0181 10.483 29.9559 9.72832 29.9559 8.76776ZM35.9238 8.76776V7.73858H31.661V8.76776C31.661 9.72832 32.5988 10.483 33.7924 10.483C34.986 10.483 35.9238 9.72832 35.9238 8.76776ZM41.8917 8.76776V7.73858H37.6289V8.76776C37.6289 9.72832 38.5667 10.483 39.7603 10.483C40.9539 10.483 41.8917 9.72832 41.8917 8.76776ZM47.8596 8.76776V7.73858H43.5968V8.76776C43.5968 9.72832 44.5346 10.483 45.7282 10.483C46.9218 10.483 47.8596 9.72832 47.8596 8.76776ZM53.8275 8.76776V7.73858H49.5647V8.76776C49.5647 9.72832 50.5025 10.483 51.6961 10.483C52.8897 10.483 53.8275 9.72832 53.8275 8.76776ZM59.7954 8.76776V7.73858H55.5326V8.76776C55.5326 9.72832 56.4704 10.483 57.664 10.483C58.8576 10.483 59.7954 9.72832 59.7954 8.76776ZM7.78936 22.8331H26.5456V18.0303H7.78936V22.8331ZM26.5456 24.2053H7.78936V29.0081H26.5456V24.2053ZM63.6319 10.483C64.8255 10.483 65.7633 9.72832 65.7633 8.76776V7.73858H61.5005V8.76776C61.5005 9.72832 62.4383 10.483 63.6319 10.483ZM1.82145 7.73858V8.76776C1.82145 9.72832 2.75926 10.483 3.95284 10.483C5.14643 10.483 6.08424 9.72832 6.08424 8.76776V7.73858H1.82145ZM40.1866 54.3944C40.1866 58.9227 44.7904 62.6277 50.4173 62.6277C56.0441 62.6277 60.648 58.9227 60.648 54.3944C60.648 49.866 56.0441 46.161 50.4173 46.161C44.7904 46.161 40.1866 49.866 40.1866 54.3944ZM62.2678 53.7082H65.7633V33.1248H4.37912V37.2415H39.334C39.8455 37.2415 40.1866 37.5159 40.1866 37.9276V42.7304C40.1866 43.1421 39.8455 43.4165 39.334 43.4165H4.37912V53.7082H10.347H38.5667C38.993 48.6996 44.1936 44.7888 50.4173 44.7888C56.6409 44.7888 61.8415 48.6996 62.2678 53.7082Z" fill="#32BDED"/>
</svg>`;

const {height} = Dimensions.get('window');

const Logo = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.blackBackgroundContainer]}>
        <Text style={[styles.header]}>FOODIES</Text>
        <View style={[styles.logoView]}>
          <SvgXml xml={foodCartIcon} width="90" height="90" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  blackBackgroundContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    transform: [{skewY: '10deg'}],
    height: '130%',
    top: height * -0.1,
  },
  header: {
    color: '#ED6232',
    fontSize: 18,
    transform: [{skewY: '-10deg'}],
    fontFamily: 'Suwannaphum-Regular',
  },
  logoView: {
    transform: [{skewY: '-10deg'}],
    marginBottom: 10,
  },
});

export default Logo;

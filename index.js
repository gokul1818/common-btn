// // src/CommonBtn.js
// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

// const CommonBtn = ({ label, onPress }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.button}>
//       <Text style={styles.text}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// CommonBtn.propTypes = {
//   label: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,
// };

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     backgroundColor: 'green',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CommonBtn;

// src/index.js

const CommonBtn = () => {
  console.log("Hello from my React Native library!");
};

export { CommonBtn };


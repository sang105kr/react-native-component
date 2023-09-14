import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => onPress()}
    >
      <Text style={{ fontSize: 24 }}>{title || children}</Text>
    </TouchableOpacity>
  );
};

// MyButton.defaultProps = {
//   title: '버튼',
// };

//유효성 체크 (타입, 필수여부)
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MyButton;

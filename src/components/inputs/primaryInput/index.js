import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const InputField = ({
  value,
  label,
  placeholder,
  onChangeText,
  style,
  labelStyle,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      {label ? (
        <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      ) : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputField;

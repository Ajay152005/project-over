// src/components/AuthInput.tsx
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface AuthInputProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({ 
  placeholder, 
  secureTextEntry = false, 
  ...rest 
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
  }
});

export default AuthInput;

import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import AuthService from '../../services/auth';
import {setUserData} from '../../store/user/actions';

import PrimaryButton from '../../components/buttons/primaryButton';
import InputField from '../../components/inputs/primaryInput';
import Text from '../../components/text';

import {commonStyle} from '../../config/commonStyles';
import textStyles from '../../config/typography';

import {styles} from './styles';

const LoginScreen = ({setUserDataAction}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSendMagicLink = async () => {
    setIsLoading(true);
    try {
      const loginToken = await AuthService.loginWithMagic(email);
      setIsLoading(false);
      const userData = {
        access_token: loginToken,
      };
      setUserDataAction(userData);
    } catch (err) {
      setIsLoading(false);
      // Error handling
    }
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={[textStyles.largeText, commonStyle.textCenter]}>
        Enter your email to get a magic link
      </Text>

      <InputField
        style={styles.emailInput}
        value={email}
        onChangeText={val => setEmail(val)}
        placeholder="Email"
      />

      <PrimaryButton
        isLoading={isLoading}
        onPress={onSendMagicLink}
        text="CONTINUE"
      />
    </View>
  );
};

const mapDispatchToProps = {
  setUserDataAction: setUserData,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

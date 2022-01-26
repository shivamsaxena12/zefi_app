import configureMagicInstance from '../../utilities/configureMagic';

const loginWithMagic = async email => {
  const magic = configureMagicInstance.getMagicInstance();

  try {
    const res = await magic.auth.loginWithMagicLink({
      email,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const logoutWithMagic = async () => {
  const magic = configureMagicInstance.getMagicInstance();

  await magic.user.logout();
};

const AuthService = {
  loginWithMagic,
  logoutWithMagic,
};

export default AuthService;

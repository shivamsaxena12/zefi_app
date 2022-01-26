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

const checkUser = async callback => {
  const magic = configureMagicInstance.getMagicInstance();

  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    return callback({isLoggedIn: true, email: user.email});
  }

  return callback({isLoggedIn: false});
};

const AuthService = {
  loginWithMagic,
  checkUser,
  logoutWithMagic,
};

export default AuthService;

import {Magic} from '@magic-sdk/react-native';

const MAGIC_API_KEY = 'pk_live_9521E5D0C1E5F74A';

class ConfigureMagic {
  constructor() {
    this.magic = null;
  }

  initialize() {
    this.magic = new Magic(MAGIC_API_KEY);
  }

  getMagicInstance() {
    return this.magic;
  }
}

const configureMagicInstance = new ConfigureMagic();

export default configureMagicInstance;

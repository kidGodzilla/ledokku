import { unsetEnvVar } from './unsetEnvVar';
import { setEnvVar } from './setEnvVar';
import { loginWithGithub } from './loginWithGithub';
import { createDatabase } from './createDatabase';
import { createApp } from './createApp';
import { destroyApp } from './destroyApp';
import { destroyDatabase } from './destroyDatabase';
import { linkDatabase } from './linkDatabase';
import { unlinkDatabase } from './unlinkDatabase';

export const mutations = {
  loginWithGithub,
  createDatabase,
  createApp,
  setEnvVar,
  unsetEnvVar,
  destroyApp,
  destroyDatabase,
  linkDatabase,
  unlinkDatabase,
};

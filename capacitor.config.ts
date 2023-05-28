import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.github.arcticgizmo.what-do',
  appName: 'what-do',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'online.akarra.app',
  appName: 'AKARRA',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

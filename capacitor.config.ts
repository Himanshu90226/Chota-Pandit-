import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'online.akarra.app',
  appName: 'AKARRA',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      backgroundColor: '#211713',
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#FADCBE'
    }
  }
};

export default config;
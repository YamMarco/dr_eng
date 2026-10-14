import type { CapacitorConfig } from '@capacitor/cli';

// The native shell around the mobile build (`npm run build:mobile`).
// appId is permanent once published to the stores - settle it before the first release.
const config: CapacitorConfig = {
	appId: 'com.dreng.app',
	appName: 'dr-eng',
	webDir: 'build-mobile'
};

export default config;

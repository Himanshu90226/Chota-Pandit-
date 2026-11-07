# AKARRA Mobile App

Android and iOS app shell using Capacitor 8. The app bundles the current AKARRA storefront pages and assets locally, while continuing to use the existing Supabase project for product data, offers, customer/order records and configured payment functions.

## Requirements

- Node.js 22+
- Android: Android Studio 2025.2.1+ and Android SDK
- iOS: macOS with Xcode 26+ and CocoaPods
- Capacitor 8 supports iOS 15+ and Android API 24+

## Install and create native projects

```bash
npm install
npm run cap:add:android
npm run cap:add:ios
```

Run the platform command once per platform. If a native folder already exists, use `npm run cap:sync` instead.

## Sync after website changes

```bash
npm run cap:sync
```

## Open native projects

```bash
npm run cap:open:android
npm run cap:open:ios
```

Build/signing and store submission still require the platform toolchains and developer accounts. Android release builds need a signing keystore. iOS distribution requires an Apple Developer account, signing certificate and provisioning profile.

## Important production checks

- Verify Supabase Row Level Security and Edge Function authorization before store release.
- Test order creation, UPI/payment handoff, payment verification, WhatsApp handoff and order tracking on physical devices.
- Configure universal/app links, push notification credentials, app icons and splash assets before publishing.
- Sound autoplay is controlled by iOS/Android user-gesture policies; do not rely on forced background audio.

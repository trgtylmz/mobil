# Temsa Mobile App

## Ön Koşullar
- Node.js (14+)
- npm veya Yarn
- Expo CLI: `npm install -g expo-cli`

## Kurulum
1. `cd mobile-app`
2. `npm install` veya `yarn`
3. `npm start`

## Çalıştırma
- Metro Bundler açıldıktan sonra:
  - `a` (Android emülatörü veya bağlı cihaz)
  - `i` (iOS simülatörü) *[Mac OS gerektirir]*

## Emülatör ve Cihaz Testi (Windows)
- Android Studio kurulumu:
  1. Android Studio indirin ve yükleyin.
  2. `AVD Manager` üzerinden en az Android 9.0 (API 28) bir emülatör oluşturun.
  3. Ortam değişkenleri ayarları:
     - `ANDROID_HOME` → `%USERPROFILE%\\AppData\\Local\\Android\\Sdk`
     - `PATH` içinde Android SDK `platform-tools` ve `emulator` klasörlerini ekleyin.
- Metro Bundler’da `a` tuşuna basarak emülatörü başlatın.
- Gerçek cihazda test için:
  1. Android cihazınızda USB hata ayıklamayı etkinleştirin.
  2. Cihazı USB ile bağlayın ve `npm start` sonrası `a` komutunu kullanın.
  3. Veya Expo Go uygulamasını yükleyip QR kodu tarayın.

## Notlar
- iOS simülatör sadece Mac OS üzerinde `npm run ios` komutuyla çalışır.
- Expo Go ile hem iOS hem Android cihazlarda canlı yeniden yükleme yapabilirsiniz.

## Özellikler
- Çoklu dil desteği (TR, EN, ES)
- Temsa logosu görüntüleme
### Gelecek Adımlar
- Navigation kurulumu
- API entegrasyonu
- Uygulama modüllerinin eklenmesi

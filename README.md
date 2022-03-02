# Capacitor Demo (Angular based)

## [Capacitor](https://capacitorjs.com/)

A cross-platform native runtime for web apps.

Capacitor is an open source native runtime for building Web Native apps.

Create cross-platform iOS, Android, and Progressive Web Apps with JavaScript, HTML, and CSS.

---

## References

- ### [Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup)

- ### [Installation](https://capacitorjs.com/docs/getting-started)

---

## Scenario: `without existing project`

`1. create a new ng project through ng cli`

```bash
  ng new [app-name]

  cd [app-name]
```

`2. install capacitor core libs`

```bash
  npm install @capacitor/core @capacitor/cli
```

`3. init capacity configuration`

```bash
  npx cap init
```

`4. looking forward to capacitor.config.ts`

```ts
  import { CapacitorConfig } from '@capacitor/cli';

  const config: CapacitorConfig = {
    appId: 'com.example.app', // 1.
    appName: 'angular-capacitor-demo', // 2.
    webDir: 'dist/angular-capacitor-demo', // 3.
    bundledWebRuntime: false // 4.
  };

  export default config;

  // 1. for app store id
  // 2. for app store name
  // 3. !!! this must be the same as "outputPath" in angular.json (the entry of the bundle contains index.html file)
  // 4. false if you don't manually packing source code (in this project, ng-cli do it for us.)
```

`5. bundling source code`

```bash
  ng build --prod
```

`6. add platform`

- IOS

  `Xcode Command Line Tools`

  ![Xcode Command Line Tools](https://capacitorjs.com/assets/img/docs/ios/xcode-preferences-location.png)

  `install ios plugin`

  ```bash
    npm install @capacitor/ios
  ```

  `install CocoaPods`

  > This is the Cross-Platform tools for us to using native plugins
  > [Guide Line](https://guides.cocoapods.org/using/getting-started.html#installation)

  ```bash
    sudo gem install cocoapods
  ```

  `compile to native-based source code`

  ```bash
    npx cap add ios
  ```

  `opening X-code workspace`

  ```bash
    npx cap open ios
  ```

- Android

  `TODO`

---

## Scenario: `existing project`

`A little bit different from above flow`

```bash
  npm install @capacitor/core -S

  npm install @capacitor/cli -D

  npx cap init
```

# React Native Parity App

This repository contains a React Native mobile application built with TypeScript and configured to work reproducibly on NixOS using flakes.

## Features
- Infinite scrolling product list fetching 10,000 items from a mock API
- Camera access and image sharing
- Simple email/password authentication (mock backend)
- In-app toast notifications
- Material 3 design system with theming

## Development
```bash
nix develop
```

Run on Android:
```bash
nix run .#android
```

Run on iOS (Darwin only):
```bash
nix run .#ios
```

## CI
GitHub Actions workflow in `.github/workflows/ci.yml` runs lint, tests and builds the app via Nix.

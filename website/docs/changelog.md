---
id: changelog
title: Changelog
hide_title: true
---

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.1](https://github.com/ledokku/ledokku/compare/v0.3.0...v0.3.1) (2020-10-22)

### Features

- **bootstrap:** add rule that allows access port 4000 ([#205](https://github.com/ledokku/ledokku/issues/205)) ([6bf87a3](https://github.com/ledokku/ledokku/commit/6bf87a39469a405166ac51179eaacb6ffd774f8f))

### Documentation

- fix installation link version ([#204](https://github.com/ledokku/ledokku/issues/204)) ([17bc375](https://github.com/ledokku/ledokku/commit/17bc375367a1ec4e9932097df891a6c93c208b64))

## [0.3.0](https://github.com/ledokku/ledokku/compare/v0.2.1...v0.3.0) (2020-10-21)

### Features

- create interactive bootstrap script to install ledokku ([#175](https://github.com/ledokku/ledokku/issues/175)) ([51e24ec](https://github.com/ledokku/ledokku/commit/51e24ec0b50ffd18a64a3645e4a8732e7ec4a603))
- **client:** add db creation option to link db select ([#201](https://github.com/ledokku/ledokku/issues/201)) ([07c6518](https://github.com/ledokku/ledokku/commit/07c65180205c8787707aa5521ca3823b10206828))
- **server:** recreate link and unlink functions in dokku lib ([#200](https://github.com/ledokku/ledokku/issues/200)) ([f7d417f](https://github.com/ledokku/ledokku/commit/f7d417f5b07a1184e9259b4bb599e54b023a3a35))

### Miscellaneous Chores

- add changelog to website ([#202](https://github.com/ledokku/ledokku/issues/202)) ([25e76c9](https://github.com/ledokku/ledokku/commit/25e76c92c448a8c20caeb832acfc615ba0ddf30e))
- **docs:** add link to getting started guide to README ([#194](https://github.com/ledokku/ledokku/issues/194)) ([b24ff75](https://github.com/ledokku/ledokku/commit/b24ff759cd3a74709d8751a4b51b723c1c0ddc44))

## 0.2.1 (2020-10-19)

### Bug Fixes

- upgrade prisma to 2.9.0 to fix SIGABRT issue ([#189](https://github.com/ledokku/ledokku/issues/189)) ([ce54a0d](https://github.com/ledokku/ledokku/commit/ce54a0d3a501514c686cec8c23c5d8b8ff1ce11b))

## 0.2.0 (2020-10-18)

### Features

- **client:** improve database info view ([#185](https://github.com/ledokku/ledokku/issues/185)) ([5eb088e](https://github.com/ledokku/ledokku/commit/5eb088e9c8215ea1c756dc890478dc36527661db))
- show real time logs on db creation ([#172](https://github.com/ledokku/ledokku/issues/172)) ([81ee614](https://github.com/ledokku/ledokku/commit/81ee6143334724f38eec3ecc7bb2682f2d7cfe54))
- **server:** add extra validation for subscription connection ([#180](https://github.com/ledokku/ledokku/issues/180)) ([6789f21](https://github.com/ledokku/ledokku/commit/6789f21e6515f37a6eb679a2a1a9fac70aa3f5e7))
- add ws auth ([#177](https://github.com/ledokku/ledokku/issues/177)) ([0ad5ff7](https://github.com/ledokku/ledokku/commit/0ad5ff702acdc2bedea372ae305cfb8a04fc3643))

### Bug Fixes

- exclude ledokku when synchronising apps and dbs ([#178](https://github.com/ledokku/ledokku/issues/178)) ([efb92a0](https://github.com/ledokku/ledokku/commit/efb92a021ef546911bf52fe967e9757b5220fb6f))

### Miscellaneous Chores

- add name validation on db/app creation ([#183](https://github.com/ledokku/ledokku/issues/183)) ([599fbed](https://github.com/ledokku/ledokku/commit/599fbed20072efbb86597abb577e412c18261a28))
- upgrade dependencies ([#179](https://github.com/ledokku/ledokku/issues/179)) ([270beb8](https://github.com/ledokku/ledokku/commit/270beb82e644681f96d52693429be4609d4f2552))

## 0.1.0 (2020-10-06)

### Features

- synchronise ledokku with existing dokku server ([#169](https://github.com/ledokku/ledokku/issues/169)) ([8167987](https://github.com/ledokku/ledokku/commit/816798750dddf081b4b8f53a152431c5ecbd193f))
- use accessible dropdown for the top right profile menu ([#171](https://github.com/ledokku/ledokku/issues/171)) ([2754bff](https://github.com/ledokku/ledokku/commit/2754bff1d4515688af928518cbbde163f4beea05))

### Documentation

- point to the dokku documentation to deploy an app ([#163](https://github.com/ledokku/ledokku/issues/163)) ([566e751](https://github.com/ledokku/ledokku/commit/566e751185e3f0a9bc4e6872deb066a0c2802fb4))

### Miscellaneous Chores

- update website text, pics and github readme ([#164](https://github.com/ledokku/ledokku/issues/164)) ([b65b5b6](https://github.com/ledokku/ledokku/commit/b65b5b6b9b8e2da8ef9098866d5124fb3bd7fea0))

## 0.0.3 (2020-10-05)

### Features

- **client:** database form validation ([#159](https://github.com/ledokku/ledokku/issues/159)) ([df67002](https://github.com/ledokku/ledokku/commit/df67002b1434cf2f34ceb0e368ef8246224bbbe6))

### Bug Fixes

- fix app view logs when there is an error ([#158](https://github.com/ledokku/ledokku/issues/158)) ([83f90c0](https://github.com/ledokku/ledokku/commit/83f90c06e816da10ef2a1c540905515ed067d9ea))

### Documentation

- add command to create release ([#152](https://github.com/ledokku/ledokku/issues/152)) ([afc4ce2](https://github.com/ledokku/ledokku/commit/afc4ce207df64ef4c28c58c07c26da9da5bf29e7))
- add fathom ([#160](https://github.com/ledokku/ledokku/issues/160)) ([1427e7a](https://github.com/ledokku/ledokku/commit/1427e7a9de5f0619e33d77caea7eaf9f45ea3e92))
- update to dokku v0.21.4 ([#153](https://github.com/ledokku/ledokku/issues/153)) ([d99ef3a](https://github.com/ledokku/ledokku/commit/d99ef3a54795d8822e458298ab8105f9e8b61faa))

### Miscellaneous Chores

- auto generate changelog when creating a new release ([#161](https://github.com/ledokku/ledokku/issues/161)) ([4ae7b90](https://github.com/ledokku/ledokku/commit/4ae7b90bee2d2fa4c555a202884c53d91ebf885e))

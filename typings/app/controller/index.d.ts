// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportIndex = require('../../../app/controller/index');

declare module 'beidou' {
  interface IController {
    index: ExportIndex;
  }
}

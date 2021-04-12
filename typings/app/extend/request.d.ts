// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExtendRequest = require('../../../app/extend/request');
type ExtendRequestType = typeof ExtendRequest;
declare module 'beidou' {
  interface Request extends ExtendRequestType { }
}
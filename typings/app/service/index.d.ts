// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'beidou';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportIndex = require('../../../app/service/index');

declare module 'beidou' {
  interface IService {
    index: AutoInstanceType<typeof ExportIndex>;
  }
}

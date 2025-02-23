/* eslint-disable @typescript-eslint/no-explicit-any */
export enum State {
  Init = 'Init',
  Pending = 'Pending',
  Done = 'Done',
  Error = 'Error',
}

export interface Mutable<T> {
  state: State;
  data?: T;
  message?: string;
}

export type Dispatch<T> = (value: T) => void;

export interface Actions {
  [k: string]: Dispatch<any> | undefined;
}

export type Data = Record<string, any>;

export interface StateActions<T> extends Actions {
  state?: Dispatch<State>;
  data?: Dispatch<T | undefined>;
  message?: Dispatch<string | undefined>;
}

export interface WalletClientActions {
  qrUrl?: StateActions<string>;
  appUrl?: StateActions<string>;
}

export interface Callbacks {
  beforeConnect?: () => void;
  beforeDisconnect?: () => void;
  afterConnect?: () => void;
  afterDisconnect?: () => void;
}

export type OS = 'android' | 'ios' | 'windows' | 'macos';
export type BrowserName = 'chrome' | 'firefox' | 'safari' | string;
export type DeviceType = 'desktop' | 'mobile';

export interface AppEnv {
  device?: DeviceType;
  os?: OS;
  browser?: BrowserName;
}

export type CosmosClientType = 'stargate' | 'cosmwasm';

export type LogLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

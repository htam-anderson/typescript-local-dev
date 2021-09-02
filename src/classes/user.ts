import { UserInfo } from '../interfaces/user';

export class User {
  private _userInfo: UserInfo;

  constructor(userInfo: UserInfo) {
    this._userInfo = userInfo;
  }

  get userInfo(): UserInfo {
    return this._userInfo;
  }

  set userInfo(userInfo: UserInfo) {
    this._userInfo = userInfo;
  }
}

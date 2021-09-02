console.log('Hello to the local dev TypeScript');

import { User } from './classes/user';
import { UserInfo } from './interfaces/user';

const userInfo: UserInfo = {
  userName: 'Usewr 1',
  userEmail: 'user1@email.com',
  userPhone: '0987389202',
  userAddress: 'My home 1'
};

const objUser = new User(userInfo);
console.log(objUser.userInfo);

const userInfoUpdate: UserInfo = {
  userName: 'User 2',
  userEmail: 'user2@gmail.com',
  userPhone: '0973664822',
  userAddress: 'My home 2'
};
objUser.userInfo = userInfoUpdate;
console.log(objUser.userInfo);

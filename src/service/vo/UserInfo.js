import { UserType } from '@/service/vo/UserType';
export default class UserInfo {
  constructor() {
    this.email = '';
    this.nickname = '';
    this.userType = UserType.Guest;
    this.avatarUrl = '';
  }
}

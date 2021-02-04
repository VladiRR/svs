import { ILocale } from '../types/locale.type';
import { IUser } from './user.entity';

/**
 * Media interface
 */
export interface IMedia {
  /**
   * Created at
   */
  created: string;

  /**
   * Description
   */
  description?: ILocale;

  /**
   * Owner
   */
  owner: IUser;

  /**
   * Post is published
   */
  published: boolean;

  /**
   * Password
   */
  src: string;

  /**
   * Title
   */
  title?: ILocale;
}

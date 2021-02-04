import { ILocale } from '../types/locale.type';
import { IMedia } from './media.entity';
import { IUser } from './user.entity';

/**
 * Post interface
 */
export interface Post {
  /**
   * Post body
   */
  body: ILocale;

  /**
   * Created at
   */
  created: string;

  /**
   * ID
   */
  id: number;

  /**
   * Main post image
   */
  image: IMedia;

  /**
   * Password
   */
  media?: IMedia[];

  /**
   * Owner
   */
  owner: IUser;

  /**
   * Post published at
   */
  published?: string;

  /**
   * Post is published
   */
  isPublished: boolean;

  /**
   * Post title
   */
  title: ILocale;

  /**
   * Updated at
   */
  updated: string;
}

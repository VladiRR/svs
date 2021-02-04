import { ILocale } from '../types/locale.type';
import { IMedia } from './media.entity';
import { IUser } from './user.entity';

/**
 * Event interface
 */
export interface IEvent {
  /**
   * Event body
   */
  body: ILocale;

  /**
   * Created at
   */
  created: string;

  /**
   * End date
   */
  end: string;

  /**
   * ID
   */
  id: number;

  /**
   * Main post image
   */
  image: IMedia;

  /**
   * Owner
   */
  owner: IUser;

  /**
   * Event is published
   */
  place?: ILocale;

  /**
   * Event is published
   */
  published: boolean;

  /**
   * Start date
   */
  start: string;

  /**
   * Event title
   */
  title: ILocale;

  /**
   * Updated at
   */
  updated: string;
}

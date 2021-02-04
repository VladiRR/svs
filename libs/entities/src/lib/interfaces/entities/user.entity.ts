import { IEvent } from './event.entity';
import { IMedia } from './media.entity';

/**
 * User interface
 */
export interface IUser {
  /**
   * Created at
   */
  created: string;

  /**
   * Email
   */
  email?: string;

  /**
   * Phone
   */
  phone: string;

  /**
   * ID
   */
  id: number;

  /**
   * Password
   */
  password?: string;

  /**
   * Username
   */
  username: string;

  /**
   * Updated at
   */
  updated: string;
}

/**
 * User relations
 */
export interface UserRelations {
  /**
   * Events
   */
  events: IEvent[];

  /**
   * Medias
   */
  medias: IMedia[];
}

/**
 * User roles interface
 */
export interface UserRoles {
  /**
   * User roles
   */
  roles: string[];

  /**
   * Check role
   * @param role Name role
   */
  hasRole(role: string): boolean;
}

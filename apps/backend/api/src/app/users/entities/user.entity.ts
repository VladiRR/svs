import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import type {IEvent, IMedia, IUser} from '@svs/entities';

// import { EventEntity } from '../../events/entities/event.entity';
// import { MediaEntity } from '../../media/entities/media.entity';

@Entity({
  name: 'users'
})
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  // @OneToMany(
  //   () => EventEntity,
  //   event => event.owner
  // )
  // events?: Event[];

  @OneToMany('EventEntity', 'owner')
  events?: IEvent[];


  // @OneToMany(
  //   () => MediaEntity,
  //   media => media.owner
  // )
  // medias?: IMedia[];

  @OneToMany('MediaEntity', 'owner')
  medias?: IMedia[];

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ length: 50, unique: true })
  username: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn({ nullable: true })
  updated: string;
}

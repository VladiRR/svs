import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import type { IEvent, ILocale, IMedia, IUser } from '@svs/entities';

// import { MediaEntity } from '../../media/entities/media.entity';
// import { UserEntity } from '../../users/entities/user.entity';

@Entity({
  name: 'events'
})
export class EventEntity implements IEvent {
  @Column('simple-json')
  body: ILocale;

  @CreateDateColumn()
  created: string;

  @Column({ type: 'timestamp' })
  end: string;

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    // () => MediaEntity,
    // media => media.events,
    'MediaEntity',
    'events',
    { nullable: true }
  )
  image: IMedia;

  @ManyToOne('UserEntity', 'events')
  owner: IUser;

  @Column('simple-json', { nullable: true })
  place: ILocale;

  @Column()
  published: boolean;

  @Column({ type: 'timestamp' })
  start: string;

  @Column('simple-json')
  title: ILocale;

  @UpdateDateColumn({ nullable: true })
  updated: string;
}

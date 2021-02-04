import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import type {IEvent, ILocale, IMedia, IUser} from '@svs/entities';

// import {EventEntity} from '../../events/entities/event.entity';
// import {UserEntity} from '../../users/entities/user.entity';

@Entity({
  name: 'medias'
})
export class MediaEntity implements IMedia {
  @CreateDateColumn()
  created: string;

  @Column('simple-json', {nullable: true})
  description: ILocale;

  @PrimaryGeneratedColumn()
  id: number;

  // @OneToMany(
  //   () => EventEntity,
  //   event => event.image
  // )
  // events?: IEvent[];

  @OneToMany('EventEntity', 'image')
  events?: IEvent[];


  // @ManyToOne(
  //   () => UserEntity,
  //   user => user.medias,
  //   {
  //     onDelete: 'CASCADE'
  //   }
  // )
  // owner: IUser;

  @ManyToOne('UserEntity', 'medias',
    {
      onDelete: 'CASCADE'
    }
  )
  owner: IUser;


  @Column()
  published: boolean;

  @Column()
  src: string;

  @Column('simple-json', {nullable: true})
  title: ILocale;

  @UpdateDateColumn({nullable: true})
  updated: string;
}

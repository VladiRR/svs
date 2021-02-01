import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { resolverMap } from './app.resolver';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { MediasModule } from './media/medias.module';
import { UserEntity } from './users/entities/user.entity';
import { EventEntity } from './events/entities/event.entity';
import { MediaEntity } from './media/entities/media.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity, EventEntity, MediaEntity]
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      resolvers: [resolverMap]
    }),
    UsersModule,
    AuthModule,
    EventsModule,
    MediasModule
  ],
  controllers: [AppController],
})
export class AppModule {}

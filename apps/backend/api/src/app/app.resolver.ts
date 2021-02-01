import { Resolver, Query } from '@nestjs/graphql';
@Resolver('App')
export class AppResolver {
  @Query('test')
  async getLogin(): Promise<string> {
    return `It's graphql response`;
  }
}

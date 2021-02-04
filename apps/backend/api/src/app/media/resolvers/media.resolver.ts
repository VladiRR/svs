import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { IMedia } from '@svs/entities';

import { MediaService } from '../services/media.service';

@Resolver('Media')
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query('medias')
  async getMedias(): Promise<IMedia[]> {
    return this.mediaService.find();
  }

  @Query('media')
  async getMedia(@Args('id') id: number): Promise<IMedia> {
    return this.mediaService.findOne(id);
  }

  @Mutation('singleUpload')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async singleUpload(@Args('file') file: any) {
    const { filename, mimetype, encoding } = await file;

    // 0. add stream to const {} = await file

    // 1. Validate file metadata.

    // 2. Stream file contents into cloud storage:
    // https://nodejs.org/api/stream.html

    // 3. Record the file uploads in your DB.
    // const id = await recordFile( … )

    return { filename, mimetype, encoding };
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';

import { IEvent } from '@svs/entities';

import { EventService } from '../services/event.service';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async getEvents(
    @Args('offset') offset?: number,
    @Args('limit') limit?: number,
    @Args('order') order?: string,
    @Args('excludeFirst') excludeFirst?: boolean,
    @Args('excludeLast') excludeLast?: boolean
  ): Promise<IEvent[]> {
    const result = await this.eventService.find({ take: limit, skip: offset, order: order ? JSON.parse(order) : null });

    let finishResult = excludeFirst ? result.slice(1, result.length) : result;
    finishResult = excludeLast ? finishResult.slice(0, result.length - 1) : finishResult;

    return finishResult;
  }

  @Query('event')
  async getEvent(@Args('id') id: number): Promise<IEvent> {
    return this.eventService.findOne(id);
  }

  @Query('eventLast')
  async getEventLAst(): Promise<IEvent> {
    const result = await this.eventService.find({ take: 1, skip: 0, order: JSON.parse('{"id":"DESC"}') });

    return result && result.length ? result[0] : null;
  }
}

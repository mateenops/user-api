/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
// eslint-disable-next-line no-duplicate-imports
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redisConfig = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT!),
    db: parseInt(process.env.REDIS_DB!),
  };

  private publisher: Redis;
  private subscriber: Redis;

  constructor() {
    console.log(process.env);
    this.publisher = new Redis(this.redisConfig);
    this.subscriber = new Redis(this.redisConfig);
  }

  onModuleInit(): void {
    this.subscribeToChannels();
  }

  onModuleDestroy(): void {
    this.publisher.disconnect();
    this.subscriber.disconnect();
  }

  public async publish(channel: string, message: string): Promise<void> {
    await this.publisher.publish(channel, message);
    console.log(`Message sent to channel ${channel}: ${message}`);
  }

  private subscribeToChannels(): void {
    const channels = ['user_signup'];

    this.subscriber.subscribe(...channels, (err) => {
      if (err) {
        console.error('Failed to subscribe:', err.message);
      } else {
        console.log(`Subscribed to channels: ${channels.join(', ')}`);
      }
    });

    this.subscriber.on('message', (channel, message) => {
      console.log(`Received message: ${message} from channel: ${channel}`);
    });
  }
}

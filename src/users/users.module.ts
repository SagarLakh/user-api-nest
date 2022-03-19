import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './repository/user-repository';
import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    UserRepository,
    ... CommandHandlers,
    ... QueryHandlers,
  ]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './repository/user.repository';
import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './mappers/user.mapper';
import { TypeOrmUserRepositoryImpl } from './repository/typeorm-repository-impl/typeorm-user.repository';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UsersController],
  providers: [
    UserMapper,
    ... CommandHandlers,
    ... QueryHandlers,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepositoryImpl,
    },
  ]
})
export class UsersModule {}

import { Injectable } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserMapper {

    toEntity(userDto: UserDto): UserEntity {
        return new UserEntity(userDto.username, userDto.name, userDto.surname, userDto.email, userDto.password)
    }

    toDto(userEntity: UserEntity): UserDto {
        return new UserDto(userEntity.username, userEntity.name, userEntity.surname, userEntity.email, userEntity.password)
    }

}
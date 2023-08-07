import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field(() => ID, { description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'User email' })
  @Column({ unique: true })
  email: string;

  @Field({ description: 'User password' })
  @Column()
  password: string;
}

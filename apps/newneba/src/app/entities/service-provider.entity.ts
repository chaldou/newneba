import { Int, ObjectType, Field } from '@nestjs/graphql';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Host } from './host.entity';

@Entity()
@ObjectType()
export class ServiceProvider{

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;
  

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;
    

 @ManyToMany(() => Host, (host) => host.serviceproviders)
 @JoinTable()
 host: Host[];
  

}

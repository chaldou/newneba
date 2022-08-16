import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Guest } from './guest.entity';
import { ServiceProvider } from './service-provider.entity';
  
  @Entity()
  @ObjectType()
  export class Host {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Field()
    @Column('varchar', { nullable: true, length: 100 })
    name: string;
  
    @Field()
    @Column('varchar', { nullable: false, length: 100 })
    password: string;
  
    @Field()
    @Column('varchar', { nullable: false, length: 100 })
    telephone: string;
  
    @Field()
    @Column('varchar', { nullable: true, length: 100 })
    adresse: string;
  
    @OneToMany(() => Guest, (guest) => guest.host)
    guest: Guest[];
  
    @ManyToMany(() => ServiceProvider, (serviceproviders) => serviceproviders.host)
    @JoinTable()
    serviceproviders: ServiceProvider[];
  
  }
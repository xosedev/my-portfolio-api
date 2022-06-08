import {
  Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  public id: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'name',
  })
  public name: string;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'email',
  })
  public email: string;

}

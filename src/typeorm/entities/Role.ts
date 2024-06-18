import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnum } from 'src/roles/roles.enum';
import { User } from './User';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: RoleEnum;

  @OneToMany(() => User, (user) => user.role)
  user: User;
}

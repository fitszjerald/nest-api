import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './Profile';
import { Role } from './Role';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  hash: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({
    name: 'profileId',
  })
  profile: Profile;

  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn({
    name: 'roleId',
  })
  role: Role;
}

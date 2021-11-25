import { BeforeInsert, Column, Entity, Index, PrimaryColumn, VersionColumn } from 'typeorm'
import { IUser } from '../dtos'
import { randomUUID } from 'crypto'

@Entity('user')
export class User implements IUser {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  userId!: string

  @Column({ type: 'varchar' })
  name!: string

  @Column({ type: 'varchar' })
  @Index({ unique: true })
  username!: string

  @VersionColumn()
  version!: number

  @BeforeInsert()
  protected setId () {
    this.userId = randomUUID()
  }
}

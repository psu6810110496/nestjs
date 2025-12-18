import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

<<<<<<< HEAD
@Entity()
export class BookCategory {
  @PrimaryGeneratedColumn('uuid')
=======

@Entity()
export class BookCategory {
  @PrimaryGeneratedColumn('uuid') // ใช้ ID เป็น UUID
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
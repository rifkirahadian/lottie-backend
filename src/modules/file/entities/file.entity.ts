import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class File extends Model {
  @Column
  name: string;

  @Column
  file: string;

  @Column
  size: number;
}

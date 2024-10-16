import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "@tsed/common";

@Entity("Employee")
export class Employee {
  @PrimaryGeneratedColumn()
  @Property()
  id: number;

  @Column({
    name: "empfname",
  })
  @Property()
  fName: string;

  @Column({
    name: "emplname",
  })
  @Property()
  lName: string;

  @Column()
  @Property()
  createdDate: Date;

  @Column()
  @Property()
  lastModifiedDate: Date;
}

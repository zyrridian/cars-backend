import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Car extends Model {
  public id!: number;
  public brand!: string;
  public model!: string;
  public year!: number;
}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cars",
  }
);

export default Car;

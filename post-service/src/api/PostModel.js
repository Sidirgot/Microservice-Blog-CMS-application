import { Sequelize, Model } from "sequelize";

import db_connection from "#root/database/connection";

class Posts extends Model {}

Posts.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUIDV4,
    },
    title: {
      allowNull: false,
      unique: true,
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE,
    },
  },
  {
    sequelize: db_connection,
    modelName: "Posts",
  }
);

export default Posts;

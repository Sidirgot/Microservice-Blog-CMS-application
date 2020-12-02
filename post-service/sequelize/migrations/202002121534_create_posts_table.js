module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Posts",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.DataTypes.UUID,
        },
        title: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        slug: {
          allowNull: false,
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
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        deletedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        charset: "utf8",
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Posts");
  },
};

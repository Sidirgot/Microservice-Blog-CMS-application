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
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        expiresAt: {
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

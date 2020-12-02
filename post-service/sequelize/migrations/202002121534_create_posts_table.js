module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
  },
};

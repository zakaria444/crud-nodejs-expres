module.exports = (sequelize, DataTypes) => {
    const depart = sequelize.define("departement", {
        name: {
        type: DataTypes.STRING,
        allowNnul: false,
        },
        description: {
        type: DataTypes.STRING,
        allowNnul: false,
        },
    });
    depart.associate = (models) => {
        depart.hasMany(models.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        });
    };

    return depart;
};

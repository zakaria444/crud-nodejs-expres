// const depart =require('../models/depart');

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        user: {
        type: DataTypes.STRING,
        allowNnul: false,
        },
        email: {
        type: DataTypes.STRING,
        allowNnul: false,
        },
        password: {
        type: DataTypes.STRING,
        allowNnul: false,
        },
    });

    user.associate = (models) => {
        user.belongsTo(models.departement, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        });
    };

    return user;
};

// module.exports= (sequelize,DataTypes)=>{
// const depart= sequelize.define("departement",{
//     name:   {
//         type: DataTypes.STRING,
//         allowNnul : false
//     },
//     description:   {
//         type: DataTypes.STRING,
//         allowNnul : false
//     },

// });
// return depart;};

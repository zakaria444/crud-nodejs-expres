module.exports= (sequelize,DataTypes)=>{
    const user= sequelize.define("user",{
        user:   {
            type: DataTypes.STRING,
            allowNnul : false
        },
        email:   {
            type: DataTypes.STRING,
            allowNnul : false
        },
       password:   {
            type: DataTypes.STRING,
            allowNnul : false
        }

    });
    return user;
};
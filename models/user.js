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

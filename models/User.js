const { INTEGER } = require('sequelize');
const {sequelize,Sequelize}=require('../config/db');
const {STRING}=Sequelize.DataTypes;


const User=sequelize.define('users',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:STRING,
    email:{
        type:STRING,
        unique:true
    },
    phone:STRING,
    country:STRING
},{
    createdAt:false,
    updatedAt:false
},{
    tableName:'users'
});

User.sync();
module.exports=User;
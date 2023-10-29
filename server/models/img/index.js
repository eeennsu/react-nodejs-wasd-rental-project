module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'imgs',
        {
            img_id : {
                primaryKey: true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },

            img_url: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },

            img_part_1: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },

            img_part_2: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },
            
            img_part_3: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },

            img_part_4: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },

            img_part_5: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },
            
            img_part_6: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },



        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
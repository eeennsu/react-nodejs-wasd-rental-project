module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'imgs',
        {
            //이미지 번호
            img_id : {
                primaryKey: true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },
            //이미지 url
            img_url: {
                allowNull : false,
                type : DataTypes.STRING(255)
            },
            //기자재 부분 사진 번호
            img_part_1: {
                allowNull : true,
                type : DataTypes.STRING(255)
            },

            img_part_2: {
                allowNull : true,
                type : DataTypes.STRING(255)
            },
            
            img_part_3: {
                allowNull : true,
                type : DataTypes.STRING(255)
            },

            img_part_4: {
                allowNull : true,
                type : DataTypes.STRING(255)
            },

            img_part_5: {
                allowNull : true,
                type : DataTypes.STRING(255)
            },
            
            img_part_6: {
                allowNull : true,
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
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'users',
        {
            
            user_id : {
                primaryKey: true,
                unique: true,
                type : DataTypes.STRING(255)
            },

            user_pw : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            user_email : {
                allowNull : false,
                unique: true,
                type: DataTypes.STRING(255)
            },

            //학번
            user_student_number : {
                type: DataTypes.STRING(255)
            },


            user_name : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //생성일자
            user_created_at : {
                allowNull : false,
                type: DataTypes.DATE
            },

            //사용자 유형
            user_license : {
                allowNull: false,
                type : DataTypes.INTEGER
            }
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
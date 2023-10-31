module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'universities',
        {
            //대학교 번호
            university_id : {
                primaryKey: true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },

            //대학교 이름
            university_name : {
                allowNull : false,
                unique: true,
                type: DataTypes.STRING(255)
            }

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
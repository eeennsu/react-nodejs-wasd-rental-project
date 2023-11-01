module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'departments',
        {
            //관리부서 번호
            department_id : {
                primaryKey: true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },

            //하이
            //관리부서 이름(학과명이 들어감)
            department_name : {
                allowNull : false,
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
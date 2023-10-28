module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "repairs",
        {
            repair_id : {
                primaryKey : true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },
            
            //수리 이유
            repair_reason : {
                allowNull: false,
                type: DataTypes.STRING(255)
            },

            //수리 요청 날짜
            repair_create_at : {
                allowNull: false,
                type: DataTypes.DATE
            },

            //수리 상태
            repair_state : {
                allowNull: false,
                type : DataTypes.STRING(255)
            }

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false
        }
    )
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'logs',
        {
            //로그 번호
            log_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },

            //로그 유형
            log_type: {
                allowNull: false,
                type: DataTypes.STRING(255)
            },

            //로그 제목
            log_title: {
                allowNull: false,
                type: DataTypes.STRING(255)
            },

            //로그 내용
            log_content: {
                allowNull: false,
                type: DataTypes.STRING(255)
            },

            //로그가 생성된 날짜
            log_create_at: {
                allowNull: false,
                type: DataTypes.DATE
            }

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'tools',
        {
            //기자재 번호
            tool_id : {
                primaryKey: true,
                unique: true,
                type : DataTypes.STRING(255)
            },

            //기자재 종류
            tool_division : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //기자재 코드
            tool_code : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //품명
            tool_name : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //자산번호
            tool_purchase_division : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },

             //구매 날짜
            tool_purchase_date : {
                allowNull : false,
                type: DataTypes.DATE
            },

            // tool_standard : {
            //     allowNull : false,
            //     type: DataTypes.STRING(255)
            // },
            
            //기자재 상태
            tool_state : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },
            //수정 날짜
            tool_update_at : {
                allowNull : false,
                type: DataTypes.DATE
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
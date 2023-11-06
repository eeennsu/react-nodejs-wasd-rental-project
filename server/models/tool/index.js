module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'tools',
        {
            //기자재 번호(자산번호)
            tool_id : {
                primaryKey : true,
                unique: true,
                type : DataTypes.STRING(255)
            },

            //기자재 종류(교육용기자재)
            tool_division : { 
                allowNull : false,
                type: DataTypes.STRING(255)
                
            },

            //기자재 코드
            tool_code : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //품명(VR실습장비)
            tool_name : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //구입 구분
            tool_purchase_division : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },

             //구매 날짜
            tool_purchase_date : {
                allowNull : false,
                type: DataTypes.DATE
            },

            //품목 규격
            tool_standard : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },
            
            //기자재 상태("대여가능/ 대여불가능")
            tool_state : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },
            //수정 날짜
            tool_update_at : {
                allowNull : false,
                type: DataTypes.DATE
            },

            //기자재 설명(오큘러스 같은 경우는 몇번 기기 인지)
            tool_content : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

            //기자재 사양
            tool_spec : {
                allowNull : false,
                type: DataTypes.STRING(255)
            },

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'rentals',
        {
            //대여 번호
            rental_id : {
                primaryKey : true,
                autoIncrement: true,
                type : DataTypes.INTEGER
            },

            //대여 날짜
            rental_date : {
                allowNull: false,
                type : DataTypes.DATE
            },

            //반납 날짜
            rental_due_date : {
                allowNull: false,
                type : DataTypes.DATE
            },
            
            //대여 상태
            rental_state : {
                allowNull: false,
                type : DataTypes.STRING(255)
            },

            rental_extend : {
                allowNull: false,
                type : DataTypes.BOOLEAN,  
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}
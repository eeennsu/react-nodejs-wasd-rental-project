module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'classrooms',
        {
            classroom_id : {
                primaryKey : true,
                unique: true,
                type : DataTypes.STRING(255)
            },

            //대여 상태
            classroom_state : { 
                allowNull : false,
                type: DataTypes.STRING(255)
            },

             //대여 날짜
             classroom_rental_date : {
                allowNull: false,
                type : DataTypes.DATE
            },

            //반납 날짜
            classroom_rental_due_date : {
                allowNull: false,
                type : DataTypes.DATE
            },
            
            //해당 시간대에 대여가 되었는지 여부
            classroom_is_booked : {
                allowNull : false,
                type: DataTypes.BOOLEAN
            },



        }
    )
};
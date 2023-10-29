module.exports = db => {

    db.Tool.hasOne(db.Img, {
        foreignKey : "tool_id",
        sourceKey : "tool_id"
    });

    db.Tool.hasMany(db.Rental, {
        foreignKey : "tool_id",
        sourceKey : "tool_id"
    });



  


}
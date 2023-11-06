const multer = require('multer');
const multerS3 = require('multer-s3');
const aws =require('aws-sdk')
aws.config.loadFromPath("./config/s3.json")

const s3 = new aws.S3();


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'mjcrentalserver',
    acl: 'public-read-write',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 파일이 저장될 로컬 디렉토리
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // 파일명 생성
  },
});



module.exports = upload;


const db = require("./db");
const congViecSchema = new db.mongoose.Schema(
  {
    idNhanVien: {
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "NhanVienModel",
    },
    ngayBatDau: {
      type: Date,
      require: true,
      default:Date.now
    },
    hanKetThuc: {
      type: Date,
      require: true,
    },
    trangThai: {
      type: Number,
      require: true,
    },
    noiDungCongViec: {
      type: String,
      require: true,
    },
  },
  {
    collection: "congviecs",
  }
);
const CongViecModel = db.mongoose.model("CongViecModel", congViecSchema);
module.exports = { CongViecModel };

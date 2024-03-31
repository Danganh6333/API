var express = require("express");
var router = express.Router();
const NhanVienControl = require("../controller/nhanVien_controller");
router.get("/getNhanVien", NhanVienControl.getListNhanVien);
router.post("/addNhanVien", NhanVienControl.addNhanVien);
router.put("/updateNhanVien/:id", NhanVienControl.updateNhanVien);
router.delete("/deleteNhanVien/:id", NhanVienControl.deleteNhanVien);
router.post("/doLogin", NhanVienControl.doLogin);
module.exports = router;
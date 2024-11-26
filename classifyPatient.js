function classifyPatient(systolic, diastolic, sugar) {
    if (typeof systolic !== "number" || typeof diastolic !== "number" || typeof sugar !== "number") {
        return { status: "รูปแบบข้อมูลไม่ถูกต้อง", color: "ไม่มีสี" };
    }
 
    if (systolic === null || diastolic === null || sugar === null) {
        return { status: "กรุณาป้อนข้อมูล", color: "ไม่มีสี" };
    }
 
    if (systolic <= 130 && diastolic <= 85 && sugar < 100) {
        return { status: "ปกติ", color: "ขาว" };
    } else if ((130 < systolic && systolic <= 140) || (diastolic > 85 && sugar >= 100 && sugar < 125)) {
        return { status: "เสี่ยง ±", color: "เขียว" };
    } else if (140 < systolic && systolic <= 160 && sugar >= 125 && sugar < 140) {
        return { status: "ป่วย ระดับ 0", color: "เขียวเข้ม" };
    } else if (160 < systolic && systolic <= 180 && sugar >= 140 && sugar < 160) {
        return { status: "ป่วย ระดับ 1", color: "เหลือง" };
    } else if (systolic > 180 && sugar >= 160 && sugar < 200) {
        return { status: "ป่วย ระดับ 2", color: "ส้ม" };
    } else if (sugar >= 200) {
        return { status: "ป่วย ระดับ 3", color: "แดง" };
    } else {
        return { status: "ข้อมูลไม่ตรงเงื่อนไข", color: "ไม่มีสี" };
    }
}
 
module.exports = classifyPatient;
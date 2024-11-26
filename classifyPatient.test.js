const classifyPatient = require('./classifyPatient');
 
describe('classifyPatient', () => {
    test.each([
        [120, 80, 90, { status: "ปกติ", color: "ขาว" }], // Test Case 1
        [135, 85, 110, { status: "เสี่ยง ±", color: "เขียว" }], // Test Case 2
        [150, 90, 130, { status: "ป่วย ระดับ 0", color: "เขียวเข้ม" }], // Test Case 3
        [170, 95, 145, { status: "ป่วย ระดับ 1", color: "เหลือง" }], // Test Case 4
        [185, 100, 165, { status: "ป่วย ระดับ 2", color: "ส้ม" }], // Test Case 5
        [190, 110, 220, { status: "ป่วย ระดับ 3", color: "แดง" }], // Test Case 6
        ["abc", 90, 100, { status: "รูปแบบข้อมูลไม่ถูกต้อง", color: "ไม่มีสี" }], // Test Case 7
    ])('systolic: %i, diastolic: %i, sugar: %i => %o', (systolic, diastolic, sugar, expected) => {
        expect(classifyPatient(systolic, diastolic, sugar)).toEqual(expected);
    });
});
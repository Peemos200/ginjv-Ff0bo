// ==========================================
// 📌 ฟังก์ชันอัจฉริยะครอบจักรวาล (ต้องวางไว้บนสุดเสมอ)
// ==========================================
function smartPages(folderName, totalPages, type = "simple", ext = "jpg", options = {}) {
    return Array.from({ length: totalPages }, (_, i) => {
        let n = i + 1;
        
        // 1️⃣ แบบเลขล้วน (รองรับทั้งแบบมี 0 นำหน้า และแบบเลขเดี่ยว 1, 2, 3...)
        if (type === "simple") {
            let pad = options.pad !== undefined ? options.pad : 2;
            let numStr = pad > 0 ? String(n).padStart(pad, '0') : String(n);
            return `images/${folderName}/${numStr}.${ext}`;
        }
        
        // 2️⃣ แบบมีคำนำหน้า (เช่น image_1.jpg, image_2.jpg)
        if (type === "prefix") {
            let prefix = options.prefix || "image_";
            return `images/${folderName}/${prefix}${n}.${ext}`;
        }
        
        // 3️⃣ แบบมีคำคั่นกลาง (เช่น 01_saitama01.jpg)
        if (type === "keyword") {
            let kw = options.keyword || "saitama";
            let numStr = String(n).padStart(2, '0');
            return `images/${folderName}/${numStr}_${kw}${numStr}.${ext}`;
        }
        
        // 4️⃣ แบบเลขคู่หน้า-หลัง (เช่น 01_001.webp หรือ 01_002.webp)
        if (type === "dual") {
            let start = options.start || 1;
            let current = start + i;
            let offset = options.offset || 1;
            let behind = current + offset;
            let f = String(current).padStart(options.frontPad || 2, '0');
            let b = String(behind).padStart(options.backPad || 3, '0');
            return `images/${folderName}/${f}_${b}.${ext}`;
        }
    });
}


// ==========================================
// 📌 รายการโดจินทั้งหมด (ครบทุกเรื่อง 100%)
// ==========================================

const doujinsList = [
    {
        title: "ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 4",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด"],
        thumbnail: "images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 4/1 (1).webp", 
        pages: Array.from({ length: 90 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 4/1 (${n}).webp`;
        })
    },
    {
        title: "ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 3",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด"],
        thumbnail: "images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 3/1 (1).webp", 
        pages: Array.from({ length: 67 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 3/1 (${n}).webp`;
        })
    },
    {
        title: "ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 2",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด"],
        thumbnail: "images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 2/1 (1).webp", 
        pages: Array.from({ length: 85 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 2/1 (${n}).webp`;
        })
    },
    {
        title: "ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 1",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด"],
        thumbnail: "images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 1/1 (1).webp", 
        pages: Array.from({ length: 80 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ช่วงเวลาแสนหวานกับเพื่อนสมัยเด็ก 1/1 (${n}).webp`;
        })
    },
    {
        title: "อ้อมอกอันอบอุ่นของผู้เป็นแม่",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด","NTR","สาวใหญ่","อาจารย์","โดนรุม"],
        thumbnail: "images/อ้อมอกอันอบอุ่นของผู้เป็นแม่/1 (1).webp", 
        pages: Array.from({ length: 82 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อ้อมอกอันอบอุ่นของผู้เป็นแม่/1 (${n}).webp`;
        })
    },
    {
        title: "หนึ่งเดือนเปลี่ยนใจ",
        categories: ["หน้าอกใหญ่","ภาพสี"],
        thumbnail: "images/หนึ่งเดือนเปลี่ยนใจ/1 (1).webp", 
        pages: Array.from({ length: 42 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/หนึ่งเดือนเปลี่ยนใจ/1 (${n}).webp`;
        })
    },
    {
        title: "ลูกชายที่ลงโทษแม่เพราะเรื่องนอกใจ",
        categories: ["หน้าอกใหญ่","ภาพสี","จุดสุดยอด","ครอบครัว","NTR","สาวใหญ่"],
        thumbnail: "images/ลูกชายที่ลงโทษแม่เพราะเรื่องนอกใจ/1 (1).webp", 
        pages: Array.from({ length: 78 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ลูกชายที่ลงโทษแม่เพราะเรื่องนอกใจ/1 (${n}).webp`;
        })
    },
    {
        title: "เพื่อนร่วมชั้นที่แต่งงานแล้ว",
        categories: ["จุดสุดยอด","หน้าอกใหญ่","ภาพสี","NTR","นักเรียน","ลักหลับ","โดนรุม","สาวใหญ่","ผิวแทน","ก้นใหญ่"],
        thumbnail: "images/เพื่อนร่วมชั้นที่แต่งงานแล้ว/1 (1).webp", 
        pages: Array.from({ length: 113 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เพื่อนร่วมชั้นที่แต่งงานแล้ว/1 (${n}).webp`;
        })
    },
    {
        title: "ฝึกยัยกัปตันสาวให้ร่านรัก",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/ฝึกยัยกัปตันสาวให้ร่านรัก/1 (1).webp", 
        pages: Array.from({ length: 92 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ฝึกยัยกัปตันสาวให้ร่านรัก/1 (${n}).webp`;
        })
    },
    {
        title: "ผมถูกสาวเเกลบังคับ",
        categories: ["หน้าอกใหญ่","ภาพสี","นักเรียน","สาวเกล"],
        thumbnail: "images/ผมถูกสาวเเกลบังคับ/1 (1).webp", 
        pages: Array.from({ length: 97 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ผมถูกสาวเเกลบังคับ/1 (${n}).webp`;
        })
    },
    {
        title: "ผมจะทำให้เเม่เป็นผู้หญิงของผม",
        categories: ["ครอบครัว","หน้าอกใหญ่","ผิวแทน","ภาพสี","สาวใหญ่","NTR","ข่มขืน"],
        thumbnail: "images/ผมจะทำให้เเม่เป็นผู้หญิงของผม/1 (1).webp", 
        pages: Array.from({ length: 122 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ผมจะทำให้เเม่เป็นผู้หญิงของผม/1 (${n}).webp`;
        })
    },
    {
        title: "เป็นที่พักพิงให้เธอ",
        categories: ["หน้าอกใหญ่","ภาพสี","ลักหลับ","ผิวแทน","สาวใหญ่","NTR"],
        thumbnail: "images/เป็นที่พักพิงให้เธอ/1 (1).webp", 
        pages: Array.from({ length: 73 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เป็นที่พักพิงให้เธอ/1 (${n}).webp`;
        })
    },
    {
        title: "ทริปหน้าร้อนครั้งนี้",
        categories: ["หน้าอกใหญ่","ภาพสี","หน้าอกเล็ก"],
        thumbnail: "images/ทริปหน้าร้อนครั้งนี้/1 (1).webp", 
        pages: Array.from({ length: 43 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ทริปหน้าร้อนครั้งนี้/1 (${n}).webp`;
        })
    },
    {
        title: "ตอนนี้แม่และน้องสาวนายเป็นของฉันแล้ว",
        categories: ["หน้าอกใหญ่","ภาพสี","สาวใหญ่","โดนรุม","NTR"],
        thumbnail: "images/ตอนนี้แม่และน้องสาวนายเป็นของฉันแล้ว/1 (1).webp", 
        pages: Array.from({ length: 46 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตอนนี้แม่และน้องสาวนายเป็นของฉันแล้ว/1 (${n}).webp`;
        })
    },
    {
        title: "ความชั่วร้ายในตรอกซอย",
        categories: ["หน้าอกใหญ่","ภาพสี"],
        thumbnail: "images/ความชั่วร้ายในตรอกซอย/1 (1).webp", 
        pages: Array.from({ length: 41 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ความชั่วร้ายในตรอกซอย/1 (${n}).webp`;
        })
    },
    {
        title: "เเม่บ้านผู้หยุดทำหน้าที่ในช่วงบ่าย",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/เเม่บ้านผู้หยุดทำหน้าที่ในช่วงบ่าย/1 (1).webp", 
        pages: Array.from({ length: 95 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เเม่บ้านผู้หยุดทำหน้าที่ในช่วงบ่าย/1 (${n}).webp`;
        })
    },
    {
        title: "NTR คุณเเม่",
        categories: ["หน้าอกใหญ่","ภาพสี","สาวใหญ่","NTR"],
        thumbnail: "images/NTR คุณเเม่/1 (1).webp", 
        pages: Array.from({ length: 28 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/NTR คุณเเม่/1 (${n}).webp`;
        })
    },
    {
        title: "เธอกำลังจะไกลออกไป 3",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR","จุดสุดยอด"],
        thumbnail: "images/เธอกำลังจะไกลออกไป 3/1 (1).webp", 
        pages: Array.from({ length: 61 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เธอกำลังจะไกลออกไป 3/1 (${n}).webp`;
        })
    },
    {
        title: "เธอกำลังจะไกลออกไป 2",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR","จุดสุดยอด"],
        thumbnail: "images/เธอกำลังจะไกลออกไป 2/1 (1).webp", 
        pages: Array.from({ length: 59 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เธอกำลังจะไกลออกไป 2/1 (${n}).webp`;
        })
    },
    {
        title: "เธอกำลังจะไกลออกไป 1",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR","จุดสุดยอด"],
        thumbnail: "images/เธอกำลังจะไกลออกไป 1/1 (1).jpg", 
        pages: Array.from({ length: 59 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เธอกำลังจะไกลออกไป 1/1 (${n}).jpg`;
        })
    },
    {
        title: "ห้องฝึกฝนดีว่า",
        categories: ["หน้าอกใหญ่","ภาพสี"],
        thumbnail: "images/ห้องฝึกฝนดีว่า/1 (1).jpg", 
        pages: Array.from({ length: 11 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ห้องฝึกฝนดีว่า/1 (${n}).jpg`;
        })
    },
    {
        title: "เดอะโชว์มัสโกออน",
        categories: ["หน้าเล็ก","ภาพสี"],
        thumbnail: "images/เดอะโชว์มัสโกออน/1 (1).jpg", 
        pages: Array.from({ length: 7 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เดอะโชว์มัสโกออน/1 (${n}).jpg`;
        })
    },
    {
        title: "แฟนสาวมาหาที่บ้าน",
        categories: ["หน้าอกใหญ่","ภาพสี"],
        thumbnail: "images/แฟนสาวมาหาที่บ้าน/1 (1).jpg", 
        pages: Array.from({ length: 13 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/แฟนสาวมาหาที่บ้าน/1 (${n}).jpg`;
        })
    },
    {
        title: "เล่นผิดคนแล้วพวกนาย",
        categories: ["หน้าอกเล็ก","ภาพสี","จุดสุดยอด"],
        thumbnail: "images/เล่นผิดคนแล้วพวกนาย/1 (1).jpg", 
        pages: Array.from({ length: 20 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เล่นผิดคนแล้วพวกนาย/1 (${n}).jpg`;
        })
    },
    {
        title: "หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน2",
        categories: ["หน้าอกใหญ่","ภาพสี"],
        thumbnail: "images/หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน2/1 (1).webp", 
        pages: Array.from({ length: 50 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน2/1 (${n}).webp`;
        })
    },
    {
        title: "หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน1",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน1/1 (1).webp", 
        pages: Array.from({ length: 60 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/หญิงร่างท้วมที่ย้ายเข้ามาอยู่ข้างบ้าน1/1 (${n}).webp`;
        })
    },
    {
        title: "ฮาเร็มในอันเดอร์เวิลด์",
        categories: ["ครอบครัว","หน้าอกใหญ่","ภาพสี","ฮาเร็ม","อนิเมะ"],
        thumbnail: "images/ฮาเร็มในอันเดอร์เวิลด์/1 (1).webp", 
        pages: Array.from({ length: 24 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ฮาเร็มในอันเดอร์เวิลด์/1 (${n}).webp`;
        })
    },
    {
        title: "อดทนรอก่อนนะ 5",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/อดทนรอก่อนนะ 5/1 (1).webp", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อดทนรอก่อนนะ 5/1 (${n}).webp`;
        })
    },
    {
        title: "อดทนรอก่อนนะ 4",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/อดทนรอก่อนนะ 4/1 (1).webp", 
        pages: Array.from({ length: 42 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อดทนรอก่อนนะ 4/1 (${n}).webp`;
        })
    },
    {
        title: "อดทนรอก่อนนะ 3",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/อดทนรอก่อนนะ 3/1 (1).jpg", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อดทนรอก่อนนะ 3/1 (${n}).jpg`;
        })
    },
    {
        title: "อดทนรอก่อนนะ 2",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/อดทนรอก่อนนะ 2/1 (1).jpg", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อดทนรอก่อนนะ 2/1 (${n}).jpg`;
        })
    },
    {
        title: "อดทนรอก่อนนะ 1",
        categories: ["หน้าอกใหญ่","ภาพสี","NTR"],
        thumbnail: "images/อดทนรอก่อนนะ 1/1 (1).jpg", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/อดทนรอก่อนนะ 1/1 (${n}).jpg`;
        })
    },
    {
        title: "วิธีสุดเร้าใจในการล่อลวงภรรยาชาวญี่ปุ่น",
        categories: ["ก้นใหญ่","หน้าอกใหญ่","ผิวแทน","ภาพสี","สาวใหญ่"],
        thumbnail: "images/วิธีสุดเร้าใจในการล่อลวงภรรยาชาวญี่ปุ่น/1 (1).webp", 
        pages: Array.from({ length: 120 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/วิธีสุดเร้าใจในการล่อลวงภรรยาชาวญี่ปุ่น/1 (${n}).webp`;
        })
    },
    {
        title: "ลักพาตัวฮีโร่สาว",
        categories: ["ภาพสี","ข่มขืน","หน้าอกใหญ่","อนิเมะ","snuff"],
        thumbnail: "images/ลักพาตัวฮีโร่สาว/1 (1).webp", 
        pages: Array.from({ length: 12 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ลักพาตัวฮีโร่สาว/1 (${n}).webp`;
        })
    },
    {
        title: "เพราะคุณบอกว่าคุณชอบฉัน",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/เพราะคุณบอกว่าคุณชอบฉัน/1 (1).webp", 
        pages: Array.from({ length: 35 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เพราะคุณบอกว่าคุณชอบฉัน/1 (${n}).webp`;
        })
    },
    {
        title: "งานอาสาสมัคร 2",
        categories: ["ภาพสี","หน้าอกใหญ่","ภาพสี","หน้าอกใหญ่","นักเรียน","สาวเกล"],
        thumbnail: "images/งานอาสาสมัคร 2/1 (1).webp", 
        pages: Array.from({ length: 60 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/งานอาสาสมัคร 2/1 (${n}).webp`;
        })
    },
    {
        title: "งานอาสาสมัคร 1",
        categories: ["ภาพสี","หน้าอกใหญ่","นักเรียน","สาวเกล"],
        thumbnail: "images/งานอาสาสมัคร 1/1 (1).webp", 
        pages: Array.from({ length: 57 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/งานอาสาสมัคร 1/1 (${n}).webp`;
        })
    },
    {
        title: "งานที่คุณสามารถทำอะไรก็ได้ตามใจชอบ",
        categories: ["ก้นใหญ่","หน้าอกใหญ่","ผิวแทน","ภาพสี","สาวใหญ่"],
        thumbnail: "images/งานที่คุณสามารถทำอะไรก็ได้ตามใจชอบ/1 (1).webp", 
        pages: Array.from({ length: 33 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/งานที่คุณสามารถทำอะไรก็ได้ตามใจชอบ/1 (${n}).webp`;
        })
    },
    {
        title: "การล่อลวงสีขาว",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/การล่อลวงสีขาว/1 (1).webp", 
        pages: Array.from({ length: 37 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/การล่อลวงสีขาว/1 (${n}).webp`;
        })
    },
    {
        title: "การปล่อยให้ภรรยาของฉันนอกใจ",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/การปล่อยให้ภรรยาของฉันนอกใจ/1 (1).webp", 
        pages: Array.from({ length: 38 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/การปล่อยให้ภรรยาของฉันนอกใจ/1 (${n}).webp`;
        })
    },
    {
        title: "วันเวลาแห่งการมีเซ็กส์โดยไม่ป้องกัน",
        categories: ["ภาพสี","หน้าอกใหญ่","นักเรียน","ก้นใหญ่"],
        thumbnail: "images/วันเวลาแห่งการมีเซ็กส์โดยไม่ป้องกัน/1 (1).webp", 
        pages: Array.from({ length: 50 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/วันเวลาแห่งการมีเซ็กส์โดยไม่ป้องกัน/1 (${n}).webp`;
        })
    },
    {
        title: "แม่ของเพื่อนที่ทำงานในร้านนวด",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/แม่ของเพื่อนที่ทำงานในร้านนวด/1 (1).webp", 
        pages: Array.from({ length: 49 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/แม่ของเพื่อนที่ทำงานในร้านนวด/1 (${n}).webp`;
        })
    },
    {
        title: "ไอดอลตัวแทน",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/ไอดอลตัวแทน/1 (1).webp", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ไอดอลตัวแทน/1 (${n}).webp`;
        })
    },
    {
        title: "จุดหมายปลายทางคือ NTR 4",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/จุดหมายปลายทางคือ NTR 4/1 (1).webp", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/จุดหมายปลายทางคือ NTR 4/1 (${n}).webp`;
        })
    },
    {
        title: "จุดหมายปลายทางคือ NTR 3",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/จุดหมายปลายทางคือ NTR 3/1 (1).webp", 
        pages: Array.from({ length: 24 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/จุดหมายปลายทางคือ NTR 3/1 (${n}).webp`;
        })
    },
    {
        title: "จุดหมายปลายทางคือ NTR 2",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/จุดหมายปลายทางคือ NTR 2/1 (1).webp", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/จุดหมายปลายทางคือ NTR 2/1 (${n}).webp`;
        })
    },
    {
        title: "จุดหมายปลายทางคือ NTR 1",
        categories: ["ภาพสี","หน้าอกใหญ่","NTR"],
        thumbnail: "images/จุดหมายปลายทางคือ NTR 1/1 (1).webp", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/จุดหมายปลายทางคือ NTR 1/1 (${n}).webp`;
        })
    },
    {
        title: "แฟนสาวคอสเพลย์เซ็กส์ซี่อดทใจไม่ไหวเเล้ว",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/แฟนสาวคอสเพลย์เซ็กส์ซี่อดทใจไม่ไหวเเล้ว/1 (1).webp", 
        pages: Array.from({ length: 63 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/แฟนสาวคอสเพลย์เซ็กส์ซี่อดทใจไม่ไหวเเล้ว/1 (${n}).webp`;
        })
    },
    {
        title: "จุดเริ่มต้นการเเตกสลาย",
        categories: ["ภาพสี","หน้าอกใหญ่","นักเรียน"],
        thumbnail: "images/จุดเริ่มต้นการเเตกสลาย/1 (1).webp", 
        pages: Array.from({ length: 55 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/จุดเริ่มต้นการเเตกสลาย/1 (${n}).webp`;
        })
    },
    {
        title: "พี่สาวไม่ชอบผู้ชายที่อายุน้อยกว่าเหรอ",
        categories: ["ภาพสี","หน้าอกใหญ่"],
        thumbnail: "images/พี่สาวไม่ชอบผู้ชายที่อายุน้อยกว่าเหรอ/1 (1).webp", 
        pages: Array.from({ length: 29 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/พี่สาวไม่ชอบผู้ชายที่อายุน้อยกว่าเหรอ/1 (${n}).webp`;
        })
    },
    {
        title: "สาวผู้บริสุทธิ์ถูกล่วงละเมิด 3",
        categories: ["ภาพสี","หน้าอกใหญ่","ข่มขืน"],
        thumbnail: "images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 3/1 (1).webp", 
        pages: Array.from({ length: 33 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 3/1 (${n}).webp`;
        })
    },
    {
        title: "สาวผู้บริสุทธิ์ถูกล่วงละเมิด 2",
        categories: ["ภาพสี","หน้าอกใหญ่","ข่มขืน"],
        thumbnail: "images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 2/1 (1).webp", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 2/1 (${n}).webp`;
        })
    },
    {
        title: "สาวผู้บริสุทธิ์ถูกล่วงละเมิด 1",
        categories: ["ภาพสี","หน้าอกใหญ่","ข่มขืน"],
        thumbnail: "images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 1/1 (1).webp", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/สาวผู้บริสุทธิ์ถูกล่วงละเมิด 1/1 (${n}).webp`;
        })
    },
    {
        title: "วิธีขโมยแม่บ้าน",
        categories: ["ภาพสี","NTR","หน้าอกใหญ่","ก้นใหญ่"],
        thumbnail: "images/วิธีขโมยแม่บ้าน/1 (1).jpg", 
        pages: Array.from({ length: 40 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/วิธีขโมยแม่บ้าน/1 (${n}).jpg`;
        })
    },
    {
        title: "เหตุการณ์ที่เกิดขึ้นบ่อยๆ ในห้องโอตาคุ",
        categories: ["ภาพสี","โอตาคุ"],
        thumbnail: "images/เหตุการณ์ที่เกิดขึ้นบ่อยๆ ในห้องโอตาคุ/1 (1).jpg", 
        pages: Array.from({ length: 4 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เหตุการณ์ที่เกิดขึ้นบ่อยๆ ในห้องโอตาคุ/1 (${n}).jpg`;
        })
    },
    {
        title: "หลบฝนมาโดนป๊าป",
        categories: ["ภาพสี","นักเรียน","Money"],
        thumbnail: "images/หลบฝนมาโดนป๊าป/1 (1).jpg", 
        pages: Array.from({ length: 8 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/หลบฝนมาโดนป๊าป/1 (${n}).jpg`;
        })
    },
    {
        title: "ลูกสะใภ้",
        categories: ["ภาพสี","ลูกสะใภ้"],
        thumbnail: "images/ลูกสะใภ้/1 (1).jpg", 
        pages: Array.from({ length: 11 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ลูกสะใภ้/1 (${n}).jpg`;
        })
    },
    {
        title: "ฟรีเรนกับคืนนัวเนีย2",
        categories: ["การอมอวัยวะเพศ","ภาพสี","ข่มขืน","หน้าอกเล็ก","อนิเมะ","หน้าอกใหญ่"],
        thumbnail: "images/ฟรีเรนกับคืนนัวเนีย2/1 (1).jpg", 
        pages: Array.from({ length: 17 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ฟรีเรนกับคืนนัวเนีย2/1 (${n}).jpg`;
        })
    },
    {
        title: "ฟรีเรนกับคืนนัวเนีย",
        categories: ["การอมอวัยวะเพศ","ภาพสี","ข่มขืน","หน้าอกเล็ก","อนิเมะ"],
        thumbnail: "images/ฟรีเรนกับคืนนัวเนีย//1 (1).jpg", 
        pages: Array.from({ length: 14 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ฟรีเรนกับคืนนัวเนีย/1 (${n}).jpg`;
        })
    },
    {
        title: "ตำนานลับเทพเจ้าสุดร่าน",
        categories: ["ภาพสี","NTR","โสเภณี"],
        thumbnail: "images/ตำนานลับเทพเจ้าสุดร่าน/1 (1).jpg", 
        pages: Array.from({ length: 7 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตำนานลับเทพเจ้าสุดร่าน/1 (${n}).jpg`;
        })
    },
    {
        title: "ตั๋วอึ้บฟรี3",
        categories: ["ภาพสี","ข่มขืน"],
        thumbnail: "images/ตั๋วอึ้บฟรี3/1 (1).jpg", 
        pages: Array.from({ length: 20 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตั๋วอึ้บฟรี3/1 (${n}).jpg`;
        })
    },
    {
        title: "ตั๋วอึ้บฟรี2",
        categories: ["ภาพสี","ข่มขืน"],
        thumbnail: "images/ตั๋วอึ้บฟรี2/1 (1).jpg", 
        pages: Array.from({ length: 21 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตั๋วอึ้บฟรี2/1 (${n}).jpg`;
        })
    },
    {
        title: "ตั๋วอึ้บฟรี1",
        categories: ["ภาพสี","ข่มขืน"],
        thumbnail: "images/ตั๋วอึ้บฟรี1/1 (1).jpg", 
        pages: Array.from({ length: 20 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตั๋วอึ้บฟรี1/1 (${n}).jpg`;
        })
    },
    {
        title: "ตัณหาแห่งบาป1.2",
        categories: ["ภาพสี","ชายชรา","ทวารหนัก","หน้าอกใหญ่","ลูกสาว","ก้นใหญ่","หม้าย","NTR"],
        thumbnail: "images/ตัณหาแห่งบาป1.2/1 (1).jpg", 
        pages: Array.from({ length: 50 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตัณหาแห่งบาป1.2/1 (${n}).jpg`;
        })
    },
    {
        title: "ตัณหาแห่งบาป1",
        categories: ["ภาพสี","ชายชรา","ทวารหนัก","หน้าอกใหญ่","ลูกสาว","ก้นใหญ่","หม้าย","NTR"],
        thumbnail: "images/ตัณหาแห่งบาป1/1 (1).jpg", 
        pages: Array.from({ length: 39 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตัณหาแห่งบาป1/1 (${n}).jpg`;
        })
    },
    {
        title: "ตัญหาแห่งบาป2.2",
        categories: ["ภาพสี","ชายชรา","ทวารหนัก","หน้าอกใหญ่","ลูกสาว","ก้นใหญ่","หม้าย","NTR"],
        thumbnail: "images/ตัญหาแห่งบาป2.2/1 (1).jpg", 
        pages: Array.from({ length: 34 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตัญหาแห่งบาป2.2/1 (${n}).jpg`;
        })
    },
    {
        title: "ตัญหาแห่งบาป2.1",
        categories: ["ภาพสี","ชายชรา","ทวารหนัก","หน้าอกใหญ่","ลูกสาว","ก้นใหญ่","หม้าย","NTR"],
        thumbnail: "images/ตัญหาแห่งบาป2.1/1 (1).jpg", 
        pages: Array.from({ length: 54 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตัญหาแห่งบาป2.1/1 (${n}).jpg`;
        })
    },
    {
        title: "ตัญหาแห่งบาป2",
        categories: ["ภาพสี","ชายชรา","ทวารหนัก","หน้าอกใหญ่","ลูกสาว","ก้นใหญ่","หม้าย","NTR"],
        thumbnail: "images/ตัญหาแห่งบาป2/1 (19).jpg", 
        pages: Array.from({ length: 42 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ตัญหาแห่งบาป2/1 (${n}).jpg`;
        })
    },
    {
        title: "ชั้นไม่ง่าย แต่ได้ไม่ยาก",
        categories: ["ภาพสี","โสเภณี","นักเรียน","Money"],
        thumbnail: "images/ชั้นไม่ง่าย แต่ได้ไม่ยาก/1 (1).jpg", 
        pages: Array.from({ length: 35 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ชั้นไม่ง่าย แต่ได้ไม่ยาก/1 (${n}).jpg`;
        })
    },
    {
        title: "ความต้องการของน้องสาว",
        categories: ["ภาพสี","นักเรียน","พี่น้อง"],
        thumbnail: "images/ความต้องการของน้องสาว/1 (1).jpg", 
        pages: Array.from({ length: 7 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ความต้องการของน้องสาว/1 (${n}).jpg`;
        })
    },
    {
        title: "ความซวยของอาเทน่า",
        categories: ["ภาพสี","โสเภณี","นักเรียน","Money"],
        thumbnail: "images/ความซวยของอาเทน่า/1 (1).jpg", 
        pages: Array.from({ length: 21 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ความซวยของอาเทน่า/1 (${n}).jpg`;
        })
    },
    {
        title: "ครูสอนเสียว",
        categories: ["ภาพสี","ครู","นักเรียน"],
        thumbnail: "images/ครูสอนเสียว/1 (1).jpg", 
        pages: Array.from({ length: 5 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ครูสอนเสียว/1 (${n}).jpg`;
        })
    },
    {
        title: "ขอดูจู๋นายหน่อย",
        categories: ["ภาพสี","อวัยวะเพศชายขนาดใหญ่","วารหนัก","หน้าอกใหญ่","อนิเมะ"],
        thumbnail: "images/ขอดูจู๋นายหน่อย/1 (1).jpg", 
        pages: Array.from({ length: 15 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ขอดูจู๋นายหน่อย/1 (${n}).jpg`;
        })
    },
    {
        title: "ขบวนการตีท้ายครัว2",
        categories: ["ภาพสี","NTR"],
        thumbnail: "images/ขบวนการตีท้ายครัว2/1 (1).jpg", 
        pages: Array.from({ length: 20 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ขบวนการตีท้ายครัว2/1 (${n}).jpg`;
        })
    },
    {
        title: "ขบวนการตีท้ายครัว 1",
        categories: ["ภาพสี","NTR"],
        thumbnail: "images/ขบวนการตีท้ายครัว 1/1 (1).jpg", 
        pages: Array.from({ length: 21 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ขบวนการตีท้ายครัว 1/1 (${n}).jpg`;
        })
    },
    {
        title: "พี่สาวผมชอบเเก้ผ้า",
        categories: ["นักเรียน","ภาพสี","พี่น้อง","ทวารหนัก"],
        thumbnail: "images/พี่สาวผมชอบเเก้ผ้า/1 (1).jpg", 
        pages: Array.from({ length: 25 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/พี่สาวผมชอบเเก้ผ้า/1 (${n}).jpg`;
        })
    },
    {
        title: "ครอบครัวทาส",
        categories: ["ครอบครัว","ตั้งครรภ์"],
        thumbnail: "images/ครอบครัวทาส/1 (1).webp", 
        pages: Array.from({ length: 28 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ครอบครัวทาส/1 (${n}).webp`;
        })
    },
    {
        title: "เมื่อแฟนผมกับรุ่นพี่ กลายเป็นครอบครัวเดียวกัน",
        categories: ["ครอบครัว","แบล็กเมล์","พี่น้อง","NTR","นักเรียน"],
        thumbnail: "images/เมื่อแฟนผมกับรุ่นพี่ กลายเป็นครอบครัวเดียวกัน/1 (1).webp", 
        pages: Array.from({ length: 35 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เมื่อแฟนผมกับรุ่นพี่ กลายเป็นครอบครัวเดียวกัน/1 (${n}).webp`;
        })
    },
    {
        title: "ครอบครัวสุขสันต์",
        categories: ["ครอบครัว"],
        thumbnail: "images/ครอบครัวสุขสันต์/1 (1).webp", 
        pages: Array.from({ length: 23 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ครอบครัวสุขสันต์/1 (${n}).webp`;
        })
    },
    {
        title: "เพราะครอบครัวมีปัญหา อดีตสาวน้อยเวทย์มนต์ก็เลยต้องมาเล่นAV!!",
        categories: ["ครอบครัว"],
        thumbnail: "images/เพราะครอบครัวมีปัญหา อดีตสาวน้อยเวทย์มนต์ก็เลยต้องมาเล่นAV!!/1 (1).webp", 
        pages: Array.from({ length: 28 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เพราะครอบครัวมีปัญหา อดีตสาวน้อยเวทย์มนต์ก็เลยต้องมาเล่นAV!!/1 (${n}).webp`;
        })
    },
    {
        title: "ร้านอาหารครอบครัว",
        categories: ["ครอบครัว"],
        thumbnail: "images/ร้านอาหารครอบครัว/1 (1).webp", 
        pages: Array.from({ length: 20 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/ร้านอาหารครอบครัว/1 (${n}).webp`;
        })
    },
    {
        title: "เรื่องของครอบครัว",
        categories: ["ครอบครัว","ภาพสี"],
        thumbnail: "images/เรื่องของครอบครัว/1 (1).webp", 
        pages: Array.from({ length: 11 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/เรื่องของครอบครัว/1 (${n}).webp`;
        })
    },
    {
        title: "นายหัวกะลากับสาวดาวโรงเรียน",
        categories: ["นักเรียน","หน้าอกใหญ่","สวมแว่น","อวัยวะเพศชายขนาดใหญ่"],
        thumbnail: "images/นายหัวกะลากับสาวดาวโรงเรียน/1 (1).webp", 
        pages: Array.from({ length: 49 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/นายหัวกะลากับสาวดาวโรงเรียน/1 (${n}).webp`;
        })
    },
    {
        title: "คุณนายผัวคลั่งNTR",
        categories: ["NTR","หน้าอกใหญ่"],
        thumbnail: "images/คุณนายผัวคลั่งNTR/1 (1).webp", 
        pages: Array.from({ length: 21 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/คุณนายผัวคลั่งNTR/1 (${n}).webp`;
        })
    },
    {
        title: "Fern Ntr2",
        categories: ["Fern","อนิเมะ","ภาพสี","NTR"],
        thumbnail: "images/Fern Ntr2/1 (1).webp", 
        pages: Array.from({ length: 35 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/Fern Ntr2/1 (${n}).webp`;
        })
    },
    {
        title: "Frieren NTR",
        categories: ["อนิเมะ","ภาพสี","NTR"],
        thumbnail: "images/Frieren NTR/1 (1).webp", 
        pages: Array.from({ length: 28 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/Frieren NTR/1 (${n}).webp`;
        })
    },
    {
        title: "ผมไม่น่าแอบไปงานโดจินโดยไม่บอกให้ภรรยารู้เลย3",
        categories: ["หน้าอกใหญ่","ภาพสี","ก้นใหญ่","NTR"],
        thumbnail: "images/ผมไม่น่าแอบไปงานโดจินโดยไม่บอกให้ภรรยารู้เลย/01.webp", 
        pages: smartPages("ผมไม่น่าแอบไปงานโดจินโดยไม่บอกให้ภรรยารู้เลย", 93, "simple", "webp")
        // หมายเหตุ: เปลี่ยน "ชื่อโฟลเดอร์ของคุณ" ให้ตรงกับชื่อโฟลเดอร์จริงในคอมพิวเตอร์
    },
    {
        title: "เซ็กส์โฟนเสียว ออฟฟิศสยิว",
        categories: ["หน้าอกใหญ่","ภาพสี","สวมแว่น"],
        thumbnail: "images/เซ็กส์โฟนเสียว ออฟฟิศสยิว/1.webp", 
        pages: smartPages("เซ็กส์โฟนเสียว ออฟฟิศสยิว", 6, "simple", "webp", { pad: 1 })
        // หมายเหตุ: เปลี่ยน "ชื่อโฟลเดอร์ของคุณ" ให้ตรงกับชื่อโฟลเดอร์จริงในคอมพิวเตอร์
    },
    {
        title: "เกมเสียวโชว์แฟนเก่า",
        categories: ["หน้าอกใหญ่","ภาพสี","สวมแว่น"],
        thumbnail: "images/เกมเสียวโชว์แฟนเก่า/1.webp", 
        pages: smartPages("เกมเสียวโชว์แฟนเก่า", 7, "simple", "webp", { pad: 1 })
        // หมายเหตุ: เปลี่ยน "ชื่อโฟลเดอร์ของคุณ" ให้ตรงกับชื่อโฟลเดอร์จริงในคอมพิวเตอร์
    },
    {
        title: "การประชุมกรรมการสภานักเรียน",
        categories: ["นักเรียน"],
        thumbnail: "images/การประชุมกรรมการสภานักเรียน/1 (1).webp", 
        pages: Array.from({ length: 5 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/การประชุมกรรมการสภานักเรียน/1 (${n}).webp`;
        })
    },
    {
        title: "คืนหวาน ร้านไดรฟ์อิน Yofukashi no Drive-in",
        categories: ["ผมหางม้า", "ออรัลเซ็กส์", "การใช้นิ้วสอดใส่"],
        thumbnail: "images/คืนหวาน ร้านไดรฟ์อิน Yofukashi no Drive-in/1 (1).webp", 
        pages: Array.from({ length: 42 }, (_, i) => {
            let n = i + 1; // รันเลขในวงเล็บจาก 1, 2, 3, ... ไปเรื่อยๆ
            return `images/คืนหวาน ร้านไดรฟ์อิน Yofukashi no Drive-in/1 (${n}).webp`;
        })
    },
    {
        title: "Gokujou Seikatsu(ทุกตอน)",
        categories: ["หน้าอกใหญ่"],
        thumbnail: "images/Gokujou Seikatsu/001_1.webp",
        pages: Array.from({ length: 210 }, (_, i) => {
            const num = String(i + 1).padStart(3, '0');
            return `images/Gokujou Seikatsu/${num}_${i + 1}.webp`;
        })
    },
    {
        title: "ฮีโร่ตอนจบ",
        categories: ["ภาพสี", "อนิเมะ"],
        thumbnail: "images/ฮีโร่ตอนจบ/image_1.jpg",
        pages: smartPages("ฮีโร่ตอนจบ", 20, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เสียงนักร้องมืออาชีพ",
        categories: ["ภาพสี"],
        thumbnail: "images/เสียงนักร้องมืออาชีพ/image_1.jpg",
        pages: smartPages("เสียงนักร้องมืออาชีพ", 13, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เปลี่ยนนิสัยเธอด้วยเจลลี่",
        categories: ["ภาพสี"],
        thumbnail: "images/เปลี่ยนนิสัยเธอด้วยเจลลี่/image_1.jpg",
        pages: smartPages("เปลี่ยนนิสัยเธอด้วยเจลลี่", 22, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เกินคาดนะนายเนี่ย",
        categories: ["ภาพสี"],
        thumbnail: "images/เกินคาดนะนายเนี่ย/image_1.jpg",
        pages: smartPages("เกินคาดนะนายเนี่ย", 2, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "ซิกริิดกับเบลล์",
        categories: ["ภาพสี", "เฟมบอย"],
        thumbnail: "images/ซิกริิดกับเบลล์/image_1.jpg",
        pages: smartPages("ซิกริิดกับเบลล์", 8, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "Spider-Man Lucky Day",
        categories: ["ภาพสี", "Spider-Man"],
        thumbnail: "images/Spider-Man Lucky Day/image_1.jpg",
        pages: smartPages("Spider-Man Lucky Day", 8, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เพื่อนสนิทคาสึมะ",
        categories: ["อนิเมะ", "ภาพสี"],
        thumbnail: "images/เพื่อนสนิทคาสึมะ/image_1.jpg",
        pages: smartPages("เพื่อนสนิทคาสึมะ", 27, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เรื่องของพร็อกซี่",
        categories: ["หน้าอกใหญ่", "ภาพสี"],
        thumbnail: "images/เรื่องของพร็อกซี่/image_1.jpg",
        pages: smartPages("เรื่องของพร็อกซี่", 15, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "คุณครูค่ะ",
        categories: ["ภาพสี", "ครู", "นักเรียน"],
        thumbnail: "images/คุณครูค่ะ/image_1.jpg",
        pages: smartPages("คุณครูค่ะ", 26, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "สไปรัล",
        categories: ["ภาพสี", "กล้ามเนื้อ"],
        thumbnail: "images/สไปรัล/image_1.jpg",
        pages: smartPages("สไปรัล", 73, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "pepper003",
        categories: ["ภาพสี", "พี่น้อง", "pepper0", "ครอบครัว"],
        thumbnail: "images/pepper003/image_1.jpg",
        pages: smartPages("pepper003", 14, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "pepper002",
        categories: ["ภาพสี", "ลูกพี่ลูกน้อง", "พี่น้อง", "pepper0", "ครอบครัว"],
        thumbnail: "images/pepper002/image_1.jpg",
        pages: smartPages("pepper002", 7, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "pepper001",
        categories: ["ภาพสี", "ลูกพี่ลูกน้อง", "พี่น้อง", "pepper0", "ครอบครัว"],
        thumbnail: "images/pepper001/image_1.jpg",
        pages: smartPages("pepper001", 13, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "นักเรียนสาวเซ็กจัด",
        categories: ["ภาพสี", "ลูกพี่ลูกน้อง", "พี่น้อง", "pepper0"],
        thumbnail: "images/นักเรียนสาวเซ็กจัด/image_1.jpg",
        pages: smartPages("นักเรียนสาวเซ็กจัด", 4, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "ครอบครัวpepper0",
        categories: ["ภาพสี", "ลูกพี่ลูกน้อง", "พี่น้อง", "pepper0"],
        thumbnail: "images/ครอบครัวpepper0/image_1.jpg",
        pages: smartPages("ครอบครัวpepper0", 6, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เสียใจเพราะโดนทิ้ง เสียซิงเพราะโดนล้อ",
        categories: ["ภาพสี", "ลูกพี่ลูกน้อง", "พี่น้อง"],
        thumbnail: "images/เสียใจเพราะโดนทิ้ง เสียซิงเพราะโดนล้อ/image_1.jpg",
        pages: smartPages("เสียใจเพราะโดนทิ้ง เสียซิงเพราะโดนล้อ", 9, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เรื่องราวของ นศ.สาว",
        categories: ["ภาพสี", "ประจำวัน"],
        thumbnail: "images/เรื่องราวของ นศ.สาว/image_1.jpg",
        pages: smartPages("เรื่องราวของ นศ.สาว", 29, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "บำเรอรักกับหลานสาว4.1 Chii-chan Kaihatsu Nikki~Koisuru Otome na Meikko ga Oji ni Okasare",
        categories: ["ภาพสี", "นักเรียน", "หลาน"],
        thumbnail: "images/บำเรอรักกับหลานสาว4.1/image_1.jpg",
        pages: smartPages("บำเรอรักกับหลานสาว4.1", 9, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "บำเรอรักกับหลานสาว4 Chii-chan Kaihatsu Nikki~Koisuru Otome na Meikko ga Oji ni Okasare",
        categories: ["ภาพสี", "นักเรียน", "หลาน"],
        thumbnail: "images/บำเรอรักกับหลานสาว4/image_1.jpg",
        pages: smartPages("บำเรอรักกับหลานสาว4", 26, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "บำเรอรักกับหลานสาว3 Chii-chan Kaihatsu Nikki~Koisuru Otome na Meikko ga Oji ni Okasare",
        categories: ["ภาพสี", "นักเรียน", "หลาน"],
        thumbnail: "images/บำเรอรักกับหลานสาว3/image_1.jpg",
        pages: smartPages("บำเรอรักกับหลานสาว3", 22, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "บำเรอรักกับหลานสาว2 Chii-chan Kaihatsu Nikki~Koisuru Otome na Meikko ga Oji ni Okasare",
        categories: ["ภาพสี", "นักเรียน", "หลาน"],
        thumbnail: "images/บำเรอรักกับหลานสาว2/image_1.jpg",
        pages: smartPages("บำเรอรักกับหลานสาว2", 26, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "บำเรอรักกับหลานสาว Chii-chan Kaihatsu Nikki~Koisuru Otome na Meikko ga Oji ni Okasare",
        categories: ["ภาพสี", "นักเรียน", "หลาน"],
        thumbnail: "images/บำเรอรักกับหลานสาว/image_1.jpg",
        pages: smartPages("บำเรอรักกับหลานสาว", 27, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "เพื่อนเซ็กส์ Class no Joshi to Hisoka ni Sefure ni Naru Hanashi",
        categories: ["ภาพสี", "นักเรียน"],
        thumbnail: "images/เพื่อนเซ็กส์/image_4.jpg",
        pages: smartPages("เพื่อนเซ็กส์", 7, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "ได้ทุกคนไม่ต้องแย่งกัน |DokiPre Ochi Ecchi no Hikari",
        categories: ["แฟนตาซี", "ภาพสี"],
        thumbnail: "images/ได้ทุกคนไม่ต้องแย่งกัน DokiPre Ochi Ecchi no Hikari/image_6.jpg",
        pages: smartPages("ได้ทุกคนไม่ต้องแย่งกัน DokiPre Ochi Ecchi no Hikari", 6, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "ข้อเสนอรัฐบาลโลก",
        categories: ["ภาพสี", "ข่มขืน", "ทาส"],
        thumbnail: "images/ข้อเสนอรัฐบาลโลก/image_7.jpg",
        pages: smartPages("ข้อเสนอรัฐบาลโลก", 23, "prefix", "jpg", { prefix: "image_" })
    },
    {
        title: "ขอทดลองก่อนซื้อ",
        categories: ["พนักงาน"],
        thumbnail: "images/ทดลองก่อนซื้อ/image_1791633102300.webp",
        pages: smartPages("ทดลองก่อนซื้อ", 60, "prefix", "webp", { prefix: "image_" })
    }
];
-- 코드를 입력하세요
SELECT PT_name,
        PT_No,
        Gend_cd,
        Age,
        (CASE WHEN TLNO IS NULL THEN 'NONE' ELSE TLNO END) AS TLNO
FROM Patient
WHERE AGE<=12 AND Gend_cd='W'
ORDER BY Age DESC, PT_name ASC

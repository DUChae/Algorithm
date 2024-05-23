-- 진료과 CS or GS인 의사 이름, 진료과, 고용일자(포맷)
-- ORDER BY 고용일자 DESC , 같다면 이름기준 오름차순
SELECT DR_NAME
        ,DR_ID
        ,MCDP_CD
        ,DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD= 'CS' OR MCDP_CD='GS'
ORDER BY HIRE_YMD DESC, DR_NAME ASC
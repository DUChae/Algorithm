-- 코드를 작성해주세요
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS
WHERE Skill_1 ='Python' OR Skill_2 ='Python' OR Skill_3 ='Python'
ORDER BY ID ASC
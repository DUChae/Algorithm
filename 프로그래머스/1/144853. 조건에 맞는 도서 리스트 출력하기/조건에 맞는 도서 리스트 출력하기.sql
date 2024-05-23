-- 코드를 입력하세요
SELECT BOOK_ID
        ,SUBSTR(Published_Date,1) AS PUBLISHED_DATE
FROM Book
WHERE Category='인문' AND PUBLISHED_DATE LIKE '2021%'
ORDER BY Published_Date ASC
-- 코드를 입력하세요
SELECT DATE_FORMAT(Sales_date,'%Y-%m-%d') AS SALES_DATE 
        ,PRODUCT_ID
        ,USER_ID
        ,SALES_AMOUNT
FROM Online_sale AS NS
WHERE DATE_FORMAT(Sales_date,'%m')='03'

UNION

SELECT DATE_FORMAT(Sales_date,'%Y-%m-%d') AS SALES_DATE
        ,PRODUCT_ID
        ,NULL AS USER_ID
        ,SALES_AMOUNT
FROM Offline_sale AS FS
WHERE DATE_FORMAT(Sales_date,'%m')='03'
ORDER BY SALES_DATE ASC , Product_Id ASC , User_ID ASC

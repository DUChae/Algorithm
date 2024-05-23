/*
동일한 회원 동일한 상품 재구매 데이터
재구매한 회원아이디 재구매한 상품 출력
회원 아이디 기준 오름차순, 상품아이디 내림차순
*/
SELECT User_id, Product_id
FROM Online_sale
GROUP BY User_id,Product_id
HAVING COUNT(*)>1
ORDER BY User_id ASC, Product_id DESC

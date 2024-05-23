-- JOIN FLAVOR
-- 총주문량 >3000 , 주성분: 과일, ORDER BY 총주문량 큰 순서 (DESC)

SELECT F.Flavor
FROM First_half AS F
    INNER JOIN Icecream_info AS I ON F.flavor = I.flavor
WHERE F.Total_order>3000 AND I.Ingredient_type='fruit_based'
ORDER BY F.Total_order DESC

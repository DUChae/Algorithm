/*
1. 총주문량 내림차순 정렬, 출하번호 오름차순 정렬
*/
SELECT Flavor
FROM First_half
ORDER BY Total_order DESC, Shipment_id ASC
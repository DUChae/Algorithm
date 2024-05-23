/*
테이블 2개, 중복 : rest id
위치 : 서울
식당 id, 식당 이름, 음식 종류, 즐겨찾기 수 , 주소, 리뷰평균점수(소수점3번째자리에서 반올림 ROUND(?,3))
평균점수 기준 내림차순, 즐겨찾기수 기준 내림차순
*/
SELECT I.REST_ID
        ,I.REST_NAME
        ,I.FOOD_TYPE
        ,I.FAVORITES
        ,I.ADDRESS
       
        ,ROUND(AVG(R.REVIEW_SCORE),2) AS REVIEW_SCORE
        
FROM Rest_info AS I
    INNER JOIN Rest_review AS R ON I.Rest_id=R.Rest_id
GROUP BY I.Rest_id
HAVING  I.Address LIKE '서울%' 
ORDER BY Review_score DESC, I.Favorites DESC
/*
공장 id, 공장이름, 주소 
아이디 오름차순 정렬
*/
SELECT Factory_id
        ,Factory_name
        ,Address
FROM Food_factory
WHERE Address LIKE '강원도%'
ORDER BY Factory_id
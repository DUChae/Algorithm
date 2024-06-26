# SELECT BOARD.TITLE
#         , Board.BOARD_ID
#         ,Reply.REPLY_ID
#         ,Reply.WRITER_ID
#         , Reply.CONTENTS 
#         , DATE_FORMAT(Reply.CREATED_DATE, '%Y-%m-%d') AS CREATED_DATE
# FROM Used_Goods_Board AS Board
#     INNER JOIN Used_Goods_Reply AS Reply ON Board.Board_ID= Reply.Board_ID
# WHERE DATE_FORMAT(Reply.CREATED_DATE, '%Y-%m') = '2022-10'
# ORDER BY Reply.Created_date ASC , Board.TITLE ASC
SELECT B.TITLE, R.BOARD_ID, R.REPLY_ID, R.WRITER_ID, R.CONTENTS, 
				DATE_FORMAT(R.CREATED_DATE, '%Y-%m-%d') "CREATED_DATE"
    FROM USED_GOODS_REPLY R
        INNER JOIN USED_GOODS_BOARD B
        ON  R.BOARD_ID = B.BOARD_ID 
    WHERE B.CREATED_DATE LIKE '2022-10%'
    ORDER BY R.CREATED_DATE, B.TITLE ;

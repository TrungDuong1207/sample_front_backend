-- CREATE STORE PROCEDURE

CREATE DEFINER=`tipjs`@`%` PROCEDURE `insert_data`()
BEGIN
DECLARE max_id INT DEFAULT 100000;
DECLARE 1 INT DEAFULT 1;
WHILE i <=  max_id DO
INSERT INTO table_name (id, name)
VALUES (i, CONCAT(‘name’, i));
SET i = i+1;
END WHILE;
END;




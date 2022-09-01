DELIMITER $$
CREATE PROCEDURE customerCursor()
BEGIN

	DECLARE name NVARCHAR(100);
	DECLARE city NVARCHAR(100);
	DECLARE country NVARCHAR(100);
	DECLARE grade DECIMAL(10,0); 
	DECLARE finished INTEGER DEFAULT 0;

	DECLARE cur CURSOR 
	FOR 
	SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE 
	FROM customer
	WHERE AGENT_CODE LIKE "A00%";

	DECLARE CONTINUE HANDLER 
	FOR NOT FOUND SET finished = 1;
        
	OPEN cur;

	readLoop: LOOP
	FETCH cur INTO name, city, country, grade;
    	IF finished = 1 THEN 
		LEAVE readLoop;
	END IF;
			
    
    	SELECT name,city,country,grade;
    	END LOOP readLoop;
    	close cur;
END $$
DELIMITER ;
    
    


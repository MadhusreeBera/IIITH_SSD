DELIMITER $$
CREATE PROCEDURE AddTwoNumbers(
	IN A INT,
	IN B INT,
	OUT res INT
)
BEGIN
	Set res = A + B;
END$$
DELIMITER ;

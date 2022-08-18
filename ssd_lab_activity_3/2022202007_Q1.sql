select concat(E.Fname, " ", E.Minit, " ", E.Lname) as "Full name", E.ssn as "ssn", D.Dnumber as "Dept. Id", D.Dname as "Dept. Name"
from EMPLOYEE E JOIN DEPARTMENT D 
on E.Ssn=D.Mgr_ssn
where D.Dnumber in
(select DNo from EMPLOYEE Emp join  WORKS_ON W
on Emp.Ssn=W.Essn
where W.Hours < 40);

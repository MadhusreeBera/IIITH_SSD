select Essn as "Manager ssn", DNo as "Dept. Id", count(Essn) as "Number of Dependents" 
from DEPENDENT D join EMPLOYEE E on D.Essn=E.Ssn 
where Essn in 
(select Mgr_ssn from DEPARTMENT where DNumber in
(select Dnumber from DEPT_LOCATIONS group by Dnumber having count(Dlocation) > 1) )
group by Essn;

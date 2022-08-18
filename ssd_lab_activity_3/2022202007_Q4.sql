select D.Dnumber as "Dept. Id", Dname as "Dept. Name",count(Dlocation) "Number of locations"
from DEPARTMENT D JOIN DEPT_LOCATIONS L
ON D.Dnumber = L.Dnumber
where Mgr_ssn in 
(select Essn
from DEPENDENT
where Sex="F"
group by Essn
having count(Essn) > 1)
group by L.Dnumber;

select Mgr_ssn as "Manager ssn", count(W.Pno) as "Number of projects"
from DEPARTMENT D join PROJECT P join WORKS_ON W on D.Dnumber = P.Dnum and W.Essn = D.Mgr_ssn
where Pname="ProductY";

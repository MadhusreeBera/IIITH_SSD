select concat(M.Fname, " ", M.Minit, " ", M.Lname) as "Full name", M.Ssn as "ssn", M.Dno as "Dept. Id", count(E.Super_ssn) as "Number of employees"
from EMPLOYEE E join EMPLOYEE M 
on E.Super_ssn = M.Ssn
group by M.Ssn
order by count(E.Super_ssn);


part 1: SELECT * FROM teams;
        SELECT stadium from teams;
        SELECT  head_coach FROM teams WHERE conference='AFC';
        SELECT COUNT (*) FROM players;

part 2: SELECT  name, head_coach FROM teams WHERE conference='AFC' AND division='South' OR conference='NFC' AND division='North';
        SELECT * FROM players ORDER BY salary DESC LIMIT 50;
        SELECT  name, position FROM players WHERE salary > 100000;

part 3: SELECT * FROM players ORDER BY salary DESC;
        SELECT * FROM players ORDER BY salary ASC LIMIT 100;
        SELECT AVG(salary) FROM players WHERE position='DE';
        SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';
        SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE 'New York Giants';
        SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name LIKE '%Green Bay Packers%' ORDER BY salary ASC LIMIT 1;

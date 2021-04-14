-- Create a SQL query that shows the TOP 3 customers who spent the most.
select * from users as u left join transactions as t on u.id = t.user_id order by t.usd_amount desc limit 3;

-- Write an SQL query to find out how many users spent more than $1,000 but less than $2,000.
select count(*)as UsersCount from users as u left join transactions as t on u.id = t.user_id where t.usd_amount between 1000 and 2000;

-- Print every country where the average lifetime spending per user is lower than $500.
select u.country as Country, avg(t.usd_amount) as AverageSpendPerUser from users as u left join transactions as t on u.id = t.user_id group by u.country having (avg(t.usd_amount) < 500);


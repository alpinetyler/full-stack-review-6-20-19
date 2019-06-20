SELECT p.*, u.name as author
FROM posts p 
JOIN users u on p.user_id = u.id
WHERE p.id = $1;



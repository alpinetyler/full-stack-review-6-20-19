INSERT INTO USERS (name, email, password)
VALUES (${name}, ${email}, ${hash})
RETURNING *;
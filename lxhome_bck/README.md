
### Debug

```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES ('testuser', '$2b$10$ng5r5rpSUpNoSsA5zLNY4.ZFj.qU03EIy4kcFcNxKj443d.oBUiE6');

```
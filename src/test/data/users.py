from src.models import UserRole
from ...utils.hash import hash_password

USERS = [
    {
        "username": "user",
        "password": hash_password("123"),
        "email": "test@codeheroes.com",
        "name": "Test User"
    },
    {
        "username": "admin",
        "password": hash_password("123"),
        "email": "admin@codeheroes.com",
        "name": "Admin",
        "role": UserRole.ADMIN
    }
]

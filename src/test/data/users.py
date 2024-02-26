from ...utils.hash import hash_password

USERS = [
    {
        "username": "user",
        "password": hash_password("123"),
        "email": "test@codeheroes.com",
        "name": "Test User"
    }
]
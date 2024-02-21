from hashlib import md5

def hash_password(password):
    return md5(password.strip().encode("utf-8")).hexdigest()

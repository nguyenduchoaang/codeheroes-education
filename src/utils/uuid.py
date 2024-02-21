import uuid

def bin_to_uuid(bin: bytes) -> str:
    return str(uuid.UUID(int=int.from_bytes(bin)))

def uuid_to_bin(uuid_str: str) -> bytes:
    return uuid.UUID(uuid_str).bytes

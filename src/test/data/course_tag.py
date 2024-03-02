raw_data = [
    (1, 6, 4, 5),
    (2, 2, 3, 5),
    (3, 3, 6),
    (4, 7, 8),
    (6, 1, 6),
    (7, 5, 3)
]

COURSE_TAG = [
    { "course_id": data[0], "tag_id": tag } for data in raw_data for tag in data[1:]
]

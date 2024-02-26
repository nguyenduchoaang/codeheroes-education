import uuid
from datetime import datetime

LESSONS = [
    {
        "uuid": uuid.uuid4().bytes,
        "title": "ReactJS là gì? Tại sao nên học ReactJS?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 641,
        "content": None,
        "order": 1,
        "chapter_id": 1,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "SPA/MPA là gì?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 1340,
        "content": None,
        "order": 2,
        "chapter_id": 1,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Chào mừng bạn!",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 240,
        "content": None,
        "order": 1,
        "chapter_id": 11,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Nội dung khóa học",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 605,
        "content": None,
        "order": 2,
        "chapter_id": 11,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Kinh nghiệm học hiệu quả",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 548,
        "content": None,
        "order": 3,
        "chapter_id": 11,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Vai trò của HTML, CSS, Javascript",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 672,
        "content": None,
        "order": 1,
        "chapter_id": 16,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Ngôn ngữ trình duyệt có thể hiểu?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 19,
        "content": None,
        "order": 2,
        "chapter_id": 16,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Chi tiết về ngôn ngữ HTML",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 406,
        "content": None,
        "order": 3,
        "chapter_id": 16,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Chào mừng bạn!",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 120,
        "content": None,
        "order": 1,
        "chapter_id": 12,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Cài đặt phần mềm Git",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 120,
        "content": None,
        "order": 2,
        "chapter_id": 12,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Tìm hiểu và cài đặt Sass",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 894,
        "content": None,
        "order": 1,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Sass là ngôn ngữ gì?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 13,
        "content": None,
        "order": 2,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Phần mở rộng nào không phải của Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 13,
        "content": None,
        "order": 3,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Phân biệt phần mở rộng khi sử dụng Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 33,
        "content": None,
        "order": 4,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Cách sử dụng Sass trong dự án",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 673,
        "content": None,
        "order": 5,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "Đâu là cách link đúng khi sử dụng Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 22,
        "content": None,
        "order": 6,
        "chapter_id": 13,
        "create_time": datetime.now()
    },
]
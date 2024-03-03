import uuid
from datetime import datetime

raw_data = [
    {
        "title": "ReactJS là gì? Tại sao nên học ReactJS?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 641,
        "order": 1,
        "chapter_id": 1
    },
    {
        "title": "SPA/MPA là gì?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 1340,
        "order": 2,
        "chapter_id": 1
    },
    {
        "title": "Chào mừng bạn!",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 240,
        "order": 1,
        "chapter_id": 11
    },
    {
        "title": "Nội dung khóa học",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 605,
        "order": 2,
        "chapter_id": 11
    },
    {
        "title": "Kinh nghiệm học hiệu quả",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 548,
        "order": 3,
        "chapter_id": 11
    },
    {
        "title": "Vai trò của HTML, CSS, Javascript",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 672,
        "order": 1,
        "chapter_id": 16
    },
    {
        "title": "Ngôn ngữ trình duyệt có thể hiểu?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 19,
        "order": 2,
        "chapter_id": 16
    },
    {
        "title": "Chi tiết về ngôn ngữ HTML",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 406,
        "order": 3,
        "chapter_id": 16
    },
    {
        "title": "Chào mừng bạn!",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 120,
        "order": 1,
        "chapter_id": 12
    },
    {
        "title": "Cài đặt phần mềm Git",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 120,
        "order": 2,
        "chapter_id": 12
    },
    {
        "title": "Tìm hiểu và cài đặt Sass",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 894,
        "order": 1,
        "chapter_id": 13
    },
    {
        "title": "Sass là ngôn ngữ gì?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 13,
        "order": 2,
        "chapter_id": 13
    },
    {
        "title": "Phần mở rộng nào không phải của Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 13,
        "order": 3,
        "chapter_id": 13
    },
    {
        "title": "Phân biệt phần mở rộng khi sử dụng Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 33,
        "order": 4,
        "chapter_id": 13
    },
    {
        "title": "Cách sử dụng Sass trong dự án",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 673,
        "order": 5,
        "chapter_id": 13
    },
    {
        "title": "Đâu là cách link đúng khi sử dụng Sass?",
        "video_url": "https://www.youtube.com/embed/QTuYMHs2PV4?si=ATaQLZwE85bb0BDl",
        "duration": 22,
        "order": 6,
        "chapter_id": 13
    },
]


LESSONS = [
    {
        "uuid": uuid.uuid4().bytes,
        **data,
        "create_time": datetime.now()
    } for data in raw_data
]
archive_data = [
    {
        "course_id": 1,
        "objectives": [
            'Hiểu về khái niệm SPA/MPA',
            'Hiểu về khái niệm hooks',
            'Hiểu cách ReactJS hoạt động',
            'Hiểu về function/class component',
            'Biết cách tối ưu hiệu năng ứng dụng',
            'Thành thạo làm việc với RESTful API',
            'Hiểu rõ ràng Redux workflow',
            'Thành thạo sử dụng Redux vào dự án',
            'Biết sử dụng redux-thunk middleware',
            'Xây dựng sản phẩm thực tế (clone Tiktok)',
            'Triển khai dự án React ra Internet',
            'Đủ hành trang tự tin apply đi xin việc',
            'Biết cách Deploy lên Github/Gitlab page',
            'Nhận chứng chỉ khóa học do F8 cấp'
        ]
    },
    {
        "course_id": 4,
        "objectives": [
            'Biết cách cài đặt và tùy biến Windows Terminal',
            'Biết sử dụng Windows Subsystem for Linux',
            'Thành thạo sử dụng các lệnh Linux/Ubuntu',
            'Biết cài đặt Node và tạo dự án ReactJS/ExpressJS',
            'Biết cài đặt PHP 7.4 và MariaDB trên Ubuntu 20.04',
            'Hiểu về Ubuntu và biết tự cài đặt các phần mềm khác'
        ]
    },
    {
        "course_id": 2,
        "objectives": [
            'Cấu trúc file HTML',
            'Tìm hiểu các thẻ meta',
            'Thuộc tính trong HTML',
            'Sử dụng liên kết',
            'Sử dụng Emmet',
            'Tính thừa kế CSS',
            'Thẻ inline và block',
            'Đệm, viền, khoảng lề',
            'Đơn vị trong CSS',
            'Làm việc với font chữ',
            'Làm việc với hình ảnh',
            'Làm việc với background',
            'Thuộc tính vị trí (position)',
            'Sử dụng biến trong CSS',
            'CSS selectors nâng cao',
            'Đặt tên class chuẩn BEM',
            'Semantic trong HTML5',
            'Sử dụng Flexbox',
            'Sử dụng CSS Grid',
            'Forms và validations',
            'Responsive web design',
            'Grid system 12 columns',
            'Sử dụng Animations',
            'Hướng dẫn sử dụng Sass',
            'Web accessibility',
            'Tìm hiểu về UI và UX',
            'Rèn luyện mắt thẩm mỹ',
            'Sử dụng Git, Github',
            'Kiến thức SEO cơ bản',
            'Tra cứu thẻ HTML',
            'Tính hợp lệ của HTML',
            'Tìm hiểu pseudo-elements'
        ]
    },
    {
        "course_id": 3,
        "objectives": [
            'Tìm hiểu và cài đặt Sass',
            'Sử dụng Sass trong dự án',
            'Nested rules và variables',
            'Extend và Placeholder selector',
            'Cách sử dụng mixins trong Sass',
            '@if, @media và mixin có @content',
            'Sử dụng Partial, @import trong Sass',
            '@use và @forward thay cho @import',
            'Tìm hiểu về 7-1 pattern',
            'Tìm hiểu các loại giá trị',
            'Sử dụng toán tử và nội suy',
            'Sử dụng if else và vòng lặp',
            'Xây dựng Grid system với Sass',
            'Xây dựng row-cols và offset',
            'Xây dựng gutters với Sass',
            'Hoàn thiện grid system với Sass'
        ]
    }
]

OBJECTIVES = [
    {
        "name": obj,
        "course_id": data["course_id"]
    } for data in archive_data
        for obj in data["objectives"]
]

raw_data = [
    {
        "question_id": 1,
        "choices": [
            {
                "content": "Ngôn ngữ định kiểu theo tầng",
                "is_correct": False,
                "explanation": "Chưa chính xác! Sass là một ngôn ngữ mở rộng cho CSS nhằm cung cấp thêm “sức mạnh” cho nhà phát triển web. Nó sẽ được biên dịch thành CSS để cho trình duyệt có thể hiểu (CSS mới là ngôn ngữ định kiểu theo tầng - Cascading Style Sheets)."
            },
            {
                "content": "Ngôn ngữ đánh dấu",
                "is_correct": False,
                "explanation": "Chưa chính xác! Đặc trưng của ngôn ngữ đánh dấu là có cú pháp thẻ mở / thẻ đóng, mà Sass thì không có đặc trưng đó nên nó không phải là ngôn ngữ đánh dấu bạn nhé. Một số ngôn ngữ đánh dấu phổ biến như: HTML, XML, v.v."
            },
            {
                "content": "Ngôn ngữ tiền xử lý cho CSS",
                "is_correct": True,
                "explanation": "Chính xác! Sass (Syntactically Awesome StyleSheets) là ngôn ngữ tiền xử lý và sẽ được biên dịch thành CSS. Sass là một CSS preprocessor (tiền xử lý CSS).\n\nKhi sử dụng Sass sẽ có phần mở rộng tệp là .scss hoặc .sass, trong đó .scss được sử dụng rất phổ biến trong thực tế bởi cú pháp rất giống CSS (thân thiện với Frontend dev hơn)."
            },
        ]
    },
    {
        "question_id": 2,
        "choices": [
            {
                "content": ".css",
                "is_correct": True,
                "explanation": "Chính xác! Sass hỗ trợ 2 phần mở rộng cho các tập tin là .scss và .sass. Trong đó, .scss được sử dụng rất phổ biến trong thực tế vì cú pháp của nó thân thuộc với Frontend dev hơn (những người đều đã học CSS).\n\nVì vậy, đáp án này (.css) chưa phải là đáp án đúng. Sau khi biên dịch các tập tin .scss hoặc .sass thì file .css mới được tạo ra (trình duyệt sẽ hiểu được file CSS này, vì vậy chúng ta sẽ link chúng vào file HTML)."
            },
            {
                "content": ".scss",
                "is_correct": False,
                "explanation": "Chưa chính xác! Sass có hỗ trợ file với phần mở rộng là .scss. Đặc trưng khi sử dụng phần mở rộng này là vẫn hỗ trợ toàn bộ cú pháp CSS đơn thuần, thêm vào đó Sass cung cấp các tính năng nâng cao hơn như: nested rules, extend, placeholder, @import, @use, @forward, v.v (các bạn sẽ được học các kiến thức này trong vài bài tới nhé)."
            },
            {
                "content": ".sass",
                "is_correct": False,
                "explanation": "Chưa chính xác! Sass có hỗ trợ file với phần mở rộng là .sass. Đặc trưng khi sử dụng phần mở rộng này là sử dụng cú pháp thụt lề (Indent) để phân biệt các cấp độ, không sử dụng các kí tự như {, }, ;."
            },
        ]
    },
    {
        "question_id": 3,
        "choices": [
            {
                "content": '<link rel="stylesheet" href="styles.css" />',
                "is_correct": True,
                "explanation": "Chính xác! Trình duyệt sẽ không hiểu file .scss hay .sass, chúng ta cần link file đầu ra (output) của Sass có phần mở rộng là .css."
            },
            {
                "content": '<link rel="stylesheet" href="styles.scss" />',
                "is_correct": False,
                "explanation": "Chưa chính xác! Hãy nhớ lại những bài học đầu tiên về HTML CSS, 3 ngôn ngữ mà trình duyệt có thể hiểu là: HTML, CSS và Javascript. Vì vậy, bạn sẽ không thể link trực tiếp file .scss hay .sass vào HTML nhé."
            },
            {
                "content": '<link rel="stylesheet" href="styles.css.map" />',
                "is_correct": False,
                "explanation": "Chưa chính xác! File .map này được sinh ra sau khi biên dịch Sass, nó có tác dụng giúp chúng ta dễ debug (tìm kiếm lỗi) thông qua việc hiển thị chi tiết các thuộc tính CSS nằm ở line nào, file .scss nào."
            },
        ]
    }
]
CHOICES = [
    { **choice, "question_id": data["question_id"] } for data in raw_data for choice in data["choices"]
]

var CONSTANTS = {
    MSG_ERROR: "Có lỗi xảy ra. Vui lòng thử lại sau ít phút.",
    MSG_MIN_LENGTH_INVALID: "Tối thiểu phải có ## ký tự.",
    MSG_MAX_LENGTH_INVALID: "Tối đa cho phép ## ký tự.",
    MSG_MAX_INVALID: "Giá trị phải nhỏ hơn hoặc bằng ##.",
    MSG_MIN_INVALID: "Giá trị phải lớn hơn hoặc bằng ##.",
    MSG_REQUIRED: "Dữ liệu không được để trống.",
    MSG_EMAIL_INVALID: "Email không đúng định dạng.",
    MSG_URL_INVALID: "URL không hợp lệ",
    MSG_PASSWORD_INVALID: "Mật khẩu chỉ được chứa ký tự chữ cái, chữ số, ký tự đặc biệt.",
    MSG_ONLY_BLANK_INVALID: "Dữ liệu không được chỉ chứa dấu cách",
    MSG_BLANK_POSITION_INVALID: "Dữ liệu không được chứa dấu cách ở đầu cuối và nhiều dấu cách giữa các từ",
    MSG_IMAGE_INVALID: "Ảnh không hợp lệ",
    MSG_IMAGE_INVALID_SIZE: "Ảnh không phù hợp kích thước",

    FUNC_CAIDAT: "SYSTEM_CONFIG",
    COMMON_SETTINGS: 90009,
    PLAYER_URL: process.env.NODE_ENV === "production" ? "http://player.sightcareer.com" : "http://localhost:8000",

    CLAIM_TYPE: "http://techforus.net/permission",
    REGEX_EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    REGEX_PASSWORD: /^[A-Za-z0-9!@#?$%^&*()_[\]|:"{},.<>+=-]*$/,
    INVALID_PASSWORD: 'Chỉ được nhập chữ in hoa, chữ thường, số và các ký tự !@#?$%^&*()_[]|:"{},.<>+=-',
    NAME_REGEX: /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s']+$/,
    INVALID_NAME: "Chỉ được nhập chữ in hoa, chữ thường, dấu cách và ký tự '",
    PHONE_REGEX: /^\d+$/,
    INVALID_PHONE: "Số điện thoại phải là dạng số!",
    COOKIE_USER_REFERENCE: "ref",

    CURRENT_WAREHOUSE: "CURRENT_WAREHOUSE",

    USER_READ: "USER.READ",
    USER_CREATE: "USER.CREATE",
    USER_UPDATE: "USER.UPDATE",
    USER_DELETE: "USER.DELETE",
    USER_RESET_PASSWORD: "USER.RESET_PASSWORD",
    USER_ASSIGN_ROLE: "USER.ASSIGN_ROLE",

    ROLE_READ: "ROLE.READ",
    ROLE_CREATE: "ROLE.CREATE",
    ROLE_UPDATE: "ROLE.UPDATE",
    ROLE_DELETE: "ROLE.DELETE",
    ROLE_PERMISISON: "ROLE.PERMISISON",

    PRODUCT_READ: "PRODUCT.READ",
    PRODUCT_CREATE: "PRODUCT.CREATE",
    PRODUCT_UPDATE: "PRODUCT.UPDATE",
    PRODUCT_DELETE: "PRODUCT.DELETE",

    INSURRANCE_READ: "INSURRANCE.READ",
    INSURRANCE_CREATE: "INSURRANCE.CREATE",
    INSURRANCE_UPDATE: "INSURRANCE.UPDATE",
    INSURRANCE_DELETE: "INSURRANCE.DELETE",
    INSURRANCE_EXPORT: "INSURRANCE.EXPORT",

    CUSTOMER_READ: "CUSTOMER.READ",
    CUSTOMER_CREATE: "CUSTOMER.CREATE",
    CUSTOMER_UPDATE: "CUSTOMER.UPDATE",
    CUSTOMER_DELETE: "CUSTOMER.DELETE",

    COMMENT_READ: "COMMENT.READ",
    COMMENT_CREATE: "COMMENT.CREATE",
    COMMENT_UPDATE: "COMMENT.UPDATE",
    COMMENT_DELETE: "COMMENT.DELETE",

    WEBSETTING_READ: "WEBSETTING.READ",
    WEBSETTING_UPDATE: "WEBSETTING.UPDATE",

    LANDING_READ: "LANDING.READ",
    LANDING_UPDATE: "LANDING.UPDATE",

    CONTACT_READ: "CONTACT.READ",
    CONTACT_DELETE: "CONTACT.DELETE",

    NEWS_READ: "NEWS.READ",
    NEWS_CREATE: "NEWS.CREATE",
    NEWS_UPDATE: "NEWS.UPDATE",
    NEWS_DELETE: "NEWS.DELETE",

    SIDEBAR_MENU_TOPIC: "SIDEBAR",

    DEFAULT_SELLER_WAREHOUSE: "dropshipping",

    DEFAULT_BATCHCODE: "BC_0_0",
    VOUCHER: "VOUCHER",
    REGEX_ONLY_NUMBER_LETTER: "/^[^a-zA-Z0-9]+$/",
    INVALID_VOUCHER_NAME: "Chỉ được nhập chữ cái hoặc số!",
    VALID_VOUCHER_CODE: "Mã voucher tối thiểu 6 ký tự, tối đa 15 và chỉ chứa chữ cái hoặc số.",
};

var ROLES = {
    MARKETERMANAGER: "MARKETERMANAGER",
    PRESSUREMANAGER: "PRESSUREMANAGER",
    CREATOR: "CREATOR",
    PRINTERMANAGER: "PRINTERMANAGER",
    FINANCEMANAGER: "FINANCEMANAGER",
    MARKETERMASTER: "MARKETERMASTER",
    DESIGNER: "DESIGNER",
};

const CONTENT_TYPE = {
    Title: 1,
    Content: 2,
};

var ENTITY_STATE = {
    INSERT: 1,
    UPDATE: 2,
    DELETE: 3,
};

var NOTIFY = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "notice",
    INFO: "info",
};
var YEARCHECK = {
    HIDEYEAR: "1970",
};

var MAINMENU = {
    ManageProduct: "ManageProduct",
    Category: "Category",
    BrandManage: "BrandManage",
    AttributeManagement: "AttributeManagement",
    AttributeProduct: "AttributeProduct",
    Warehouse: "Warehouse",
    StockInHistory: "StockInHistory",
    StockOutHistory: "StockOutHistory",
    Inventory: "Inventory",
    TransactionManagement: "TransactionManagement",
    ConnectPlatform: "ConnectPlatform",
    LazadaProducts: "LazadaProducts",
    Settings: "Settings",
    LazadaCategories: "LazadaCategories",
    Customer: "Customer",
    Supplier: "Supplier",
    Creator: "Creator",
    WebSetting: "WebSetting",
    UserManagement: "UserManagement",
    RoleManagement: "RoleManagement",
    ShippingService: "ShippingService",
    ManageMenus: "ManageMenus",
    PointLevelConfig: "PointLevelConfig",
    RewardPointConfig: "RewardPointConfig",
    VirtualWarehouseConfig: "VirtualWarehouseConfig",
    ShippingFeeConfig: "ShippingFeeConfig",
    ManageWarranty: "ManageWarranty",
    SocialMarketPlace: "SocialMarketPlace",
    AllChannel: "AllChannel",
    Comments: "Comments",
    Messengers: "Messengers",
    SystemBankAccounts: "SystemBankAccounts",
    Dashboard: "Dashboard",
    FlashSale: "FlashSale",
    Campaign: "Campaign",
    BannerSetting: "BannerSetting",
    ManageReviewProduct: "ManageReviewProduct",
    UrlFriendlyManage: "UrlFriendlyManage",
    Facebook: "Facebook",
    WarehouseManageAdmin: "WarehouseManageAdmin",
    ThirdPartyManage: "ThirdPartyManagement",
    CreditManageAdmin: "CreditManageAdmin",
    CreditManage: "CreditManage",
    WarrantyReceive: "WarrantyReceive",
    TicketReturnOrder: "TicketReturnOrder",
    VoucherPromote: "VoucherPromote",
    VoucherBrand: "VoucherBrand",
    CampaignBuyMore: "CampaignBuyMore",
    CampaignFreeShip: "CampaignFreeShip",
};

var SUBMENU = {
    ListCourse: "ListCourse",
    CourseEditor: "CourseEditor",
    ListQuestion: "ListQuestion",
    QuestionEditor: "QuestionEditor",
    Lession: "Lession",
    Users: "Users",
    Roles: "Roles",
    Attributes: "Attributes",
    AttributeValues: "AttributeValues",
    AttributeGroups: "AttributeGroups",
    LazadaCategories: "LazadaCategories",
    LazadaProducts: "LazadaProducts",
    LazadaOrders: "LazadaOrders",
    FacebookConfig: "FacebookConfig",
    FacebookSettings: "FacebookSettings",
    FacebookAllChannel: "FacebookAllChannel",
    FacebookComments: "FacebookComments",
    FacebookMessengers: "FacebookMessengers",
    SocialMarketPlace: "SocialMarketPlace",
};

var PLATFORM = {
    Undefined: 0,
    Internal: 1,
    LOTUS: 1,
    Lazada: 2,
    Shopee: 4,
    Tiki: 8,
    Facebook: 16,
    Sendo: 32,
    Tiktok: 64,
};

var PLATFORM_NAME = {
    LOTUS: "Lotus",
    Lazada: "Lazada",
    Shopee: "Shopee",
    Tiki: "Tiki",
    Facebook: "Facebook",
    Sendo: "Sendo",
    Tiktok: "Tik tok",
};

var BANKACCOUNT_TYPE = {
    Bank: 1,
    Momo: 2,
};

var CAMPAIGN_TYPE = {
    NORMAL: 1,
    VOUCHER: 2,
    MILESTONE: 3,
};

var VOUCHER_DISCOUNT_TYPE = {
    PERCENTAGE: 0,
    FIXEDPRICE: 1,
};

var SHIPPING_SERVICES = {
    GHN: 1,
    GHTK: 2,
};

var SHIPPING_SERVICES_CODE = {
    GHN: "GHN",
    GHTK: "GHTK",
    RANUS: "RANUS",
    VNPOST: "VNPOST",
};

var REFUND_REASONS = [
    { value: "1", label: "Sản phẩm không giống hình ảnh/mô tả" },
    { value: "2", label: "Giao sai sản phẩm" },
    { value: "3", label: "Thiếu phụ kiện/quà tặng kèm" },
    { value: "4", label: "Sản phẩm bị hư hỏng/bể vỡ" },
    { value: "5", label: "Sản phẩm có dấu hiệu hàng giả" },
    { value: "6", label: "Thiếu/không nhận được sản phẩm" },
];

var PRODUCT_TYPE = {
    PRODUCT: 1,
    PRODUCT_VARIANT: 2,
};

var STATUS_PRODUCT = {
    NEW: 1,
    SELLING: 2,
    STOP_SELLING: 3,
    OUT_OF_STOCK: 4,
};

var ATTRIBUTE_INPUT_TYPE = {
    CHECKBOX: 1,
    SINGLE_SELECT: 2,
    NUMBER: 3,
    TEXT: 4,
    RADIO: 5,
    MULTI_SELECT: 6,
    RICH_TEXT: 7,
    DATE: 8,
    IMAGE: 9,
    COLOR_PICKER: 10,
    TEXT_AREA: 11,
};

var ATTRIBUTE_TYPE = {
    NORMAL: 0,
    TSHIRT: 1,
    INK: 2,
};

var WARRANTY_TYPE = {
    WARRANTY_TYPE: 1,
    WARRANTY_TIME: 2,
};

var JOIN_CHAR = {
    MULTI_SELECT: "///",
};

var FACEBOOK_CHANNEL_FEED = {
    ALL: "ALL",
    COMMENT: "COMMENT",
    MESSENGER: "MESSENGER",
};

var FACEBOOK_CHANNEL_FEED_ENUM = {
    COMMENT: 1,
    MESSENGER: 2,
};

var FACEBOOK_CHANNEL_DETAIL_TAB = {
    PRODUCT: "PRODUCT",
    CLIENT: "CLIENT",
    ORDER: "ORDER",
    FBSHOP: "FBSHOP",
    INSTAGRAMSHOP: "INSTASHOP",
    ZALOSHOP: "ZALOSHOP",
    LAZSHOP: "LAZSHOP",
    SHOPEESHOP: "SHOPEESHOP",
    TIKISHOP: "TIKISHOP",
    LOTUSSHOP: "LOTUSSHOP",
    SHOPPINGCART: "SHOPPINGCART",
};

var STOCK_IN_STATUS = {
    PendingApproval: 1,
    Approved: 2,
    InboundingProcess: 3,
    CompletelyReceived: 4,
    PartiallyReceived: 5,
    Completed: 6,
    Cancelled: 7,
    RejectApproval: 8,
};

var STOCK_IN_STATUS_NAME = {
    PendingApproval: "Đang chờ xác nhận",
    Approved: "Xác nhận",
    InboundingProcess: "Đang nhập hàng",
    CompletelyReceived: "Đã nhận toàn bộ hàng",
    PartiallyReceived: "Đã nhận một phần",
    Completed: "Hoàn thành",
    Cancelled: "Hủy yêu cầu",
    RejectApproval: "Từ chối",
};

var PRODUCT_STATUS = {
    Good: "Good",
    Defective: "Defective",
    Broken: "Broken",
};

var PRODUCT_STATUS_TYPE = {
    Good: 1,
    Defective: 2,
    Broken: 3,
};

var SOCIAL_MARKET_PLACE = {
    Facebook: 1,
    Instagram: 2,
    Zalo: 3,
    Twitter: 4,
};

var PAYMENT_METHOD = {
    UNDEFINED: 0,
    COD: 1,
    MOMO_WALLET: 2,
    MIXEDCARD: 3,
    PAYMENT_ACCOUNT: 4,
    NAPAS_ONLINE: 5,
    ZALOPAY_WALLET: 6,
    INTERNET_BANKING: 7,
    SHOPEE_WALLET: 8,
    VIRTUAL_PAYMENT: 9,
    DIGITAL_WALLET: 10,
    SELF_ARRANGE: 11,
};

var SELLER_PAYMENT_METHOD = {
    MOMO: "MOMO",
    BANK_ACCOUNT: "BANK_ACCOUNT",
};

var ORDER_SOURCE = {
    LOTUS: "LOTUS",
    OTHERS: "Others",
};

var DEFAULT_VALUE = {
    NO_BRAND: "NO BRAND",
};

var ORDER_TYPE = {
    StockIn: 1,
    StockOut: 2,
};

var ORDER_STATUS = {
    PendingApproval: 0,
    Approved: 1,
    InboundingProcess: 2,
    CompletelyReceived: 3,
    PartiallyReceived: 4,
    Completed: 5,
    Cancelled: 6,
    Shipped: 7,
};

var PRODUCT_EDITOR_TAB = {
    PRODUCT_INFO: "PRODUCT_INFO",
    PRODUCT_WARRANTY: "WARRANTY",
    BUFFERSTOCK: "BUFFERSTOCK",
    REWARDPOINTS: "REWARDPOINTS",
    MAPPING_PRODUCT_LOTUS: "MAPPING_PRODUCT_LOTUS",
};

var AGENCY_PRODUCT_EDITOR_TAB = {
    PRODUCT_INFO: "PRODUCT_INFO",
    LOTUS_MAPPING: "LOTUS_MAPPING",
};

var STATUS_TRANSACTION = {
    ALL: 0,
    UNDEFINED: 0,
    PROCESSING: 1,
    SUCCEED: 2,
    FAIL_DELIVERY_TO_CUSTOMER: 3,
    CANCELED: 4,
    UNPAID_FROM_CUSTOMER: 5,
    READYTOSHIP: 6,
    SHIPPED_TO_SHIPPER: 7,
    RETURNED_TO_SENDER: 8,
    PENDINGPAYMENT: 9,
    PAID_FROM_CUSTOMER: 10,
    PACKING: 12,
    SHIPPING: 13,
    WAITING_CONFIRM: 14,
    PRODUCTION: 24,
    ERRORED: 25,
};

var STATUS_TRANSACTION_NAME = {
    ALL: "Tất cả",
    PROCESSING: "Đang xử lý",
    SUCCEED: "Thành công",
    FAIL_DELIVERY_TO_CUSTOMER: "Giao thất bại",
    CANCELLED: "Hủy",
    CANCELED: "Đã hủy đơn",
    UNPAID_FROM_CUSTOMER: "Chưa thanh toán",
    READYTOSHIP: "Sẵn sàng giao",
    SHIPPED_TO_SHIPPER: "Đã giao Shipper",
    RETURNED_TO_SENDER: "Hoàn trả lại Sender",
    PENDINGPAYMENT: "Chờ thanh toán",
    PAID_FROM_CUSTOMER: "Đã thanh toán",
    PACKING: "Đang đóng gói",
    SHIPPING: "Đang giao hàng",
    WAITING_CONFIRM: "Chờ xác nhận",
    PRODUCTION: "Đang sản xuất",
    ERRORED: "Đơn hàng bị lỗi",
};

var BANK_TRANSFER_STATUS = {
    PendingTransaction: 1,
    ApprovedTransaction: 2,
    SuccessfulTransaction: 3,
    RejectedTransaction: 4,
};

var BANK_TRANSFER_STATUS_NAME = {
    PendingTransaction: "Giao dịch đang xử lý",
    ApprovedTransaction: "Giao dịch đã được xác nhận",
    SuccessfulTransaction: "Giao dịch thành công",
    RejectedTransaction: "Giao dịch bị từ chối",
};

var JOB_STATUS = {
    Queue: 0,
    Processing: 1,
    Done: 2,
    Fail: 3,
};

var JOB_STATUS_NAME = {
    Queue: "Hàng đợi",
    Processing: "Đang xử lý",
    Done: "Xử lý thành công",
    Fail: "Xử lý thất bại",
};

var ATTRIBUTE_TYPES = [
    {
        value: ATTRIBUTE_INPUT_TYPE.CHECKBOX,
        label: "Checkbox",
    },
    {
        value: ATTRIBUTE_INPUT_TYPE.SINGLE_SELECT,
        label: "Single Select",
    },
    {
        value: ATTRIBUTE_INPUT_TYPE.MULTI_SELECT,
        label: "Multi Select",
    },
    {
        value: ATTRIBUTE_INPUT_TYPE.NUMBER,
        label: "Number",
    },
    {
        value: ATTRIBUTE_INPUT_TYPE.TEXT,
        label: "Text",
    },
    {
        value: ATTRIBUTE_INPUT_TYPE.RADIO,
        label: "Radio",
    },
];

var INPUT_TYPE = {
    SingleSelect: 2,
    MultiEnumInput: 6,
    Text: 4,
    RichText: 7,
    Numeric: 3,
    Date: 8,
    Image: 9,
    MultiSelect: 6,
};

var PRODUCT_OVERVIEW = [
    {
        value: "all",
        label: "Tất cả",
    },
    {
        value: "active",
        label: "Đang hoạt động",
    },
    {
        value: "inactive",
        label: "Không hoạt động",
    },
];

var WARRANTY_STATUS = {
    AVAILABLE: 1,
    PROCESSING: 2,
    EXPIRED: 3,
};

var WARRANTY_RECEIVE_STATUS = {
    PROCESSING: 0,
    NEW_PRODUCT: 1,
    REPAIR: 2,
    NO_PROBLEM: 3,
};

var STATUS_ACTIVE = {
    InActive: 0,
    Active: 1,
    All: 2,
};

var PAYMENT_SCHEME = {
    SELLER: 1,
    BUYER: 2,
};

var SHIPPING_SERVICE_TYPE = {
    FAST: 1,
    STANDARD: 2,
    SAVING: 3,
};

var TEMPLATE_IMPORT = {
    IMPORT_CATEGORIES: "Danh_muc_san_pham.xlsx",
    IMPORT_BRANDS: "Danh_muc_thuong_hieu.xlsx",
    IMPORT_MAPPING_BRANDS: "Mapping_Brands.xlsx",
    IMPORT_MAPPING_CATEGORIES: "Mapping_Categories.xlsx",
};

var PRODUCT_PUSHING_STATUS = {
    Processing: 0,
    Pending: 1,
    Failed: 2,
    Successed: 3,
};

var PATTERNS = {
    EMAIL: '(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
    PHONE: "(086|096|097|098|032|033|034|035|036|037|038|039|088|091|094|083|084|085|081|082|089|090|093|070|079|077|076|078|092|056|058|099|059)(\\d{7})",
    CODE: "([a-zA-Z0-9_]*)",
    NUMBER: "[+-]?\\d+(\\.\\d+)?",
    USERNAME: "[\\w\\d]+",
    URL:
        "(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.-~+@=&]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?",
    HEX_COLOR: "#[0-9a-z]{6}",
};

var REGEX = {
    // match single
    EMAIL: new RegExp(`^${PATTERNS.EMAIL}$`),
    PHONE: new RegExp(`^${PATTERNS.PHONE}$`),
    CODE: new RegExp(`^${PATTERNS.CODE}$`),
    NUMBER: new RegExp(`^${PATTERNS.NUMBER}$`),
    USERNAME: new RegExp(`^${PATTERNS.USERNAME}$`),
    URL: new RegExp(`^${PATTERNS.URL}$`),
    // match multiple
    EMAILS: new RegExp(`^${PATTERNS.EMAIL}\\s|\\s${PATTERNS.EMAIL}$|\\s${PATTERNS.EMAIL}\\s|^${PATTERNS.EMAIL}$`, "gi"),
    PHONES: new RegExp(`^${PATTERNS.PHONE}\\s|\\s${PATTERNS.PHONE}$|\\s${PATTERNS.PHONE}\\s|^${PATTERNS.PHONE}$`, "g"),
    CODES: new RegExp(`^${PATTERNS.CODE}\\s|\\s${PATTERNS.CODE}$|\\s${PATTERNS.CODE}\\s|^${PATTERNS.CODE}$`, "gi"),
    NUMBERS: new RegExp(`^${PATTERNS.NUMBER}\\s|\\s${PATTERNS.NUMBER}$|\\s${PATTERNS.NUMBER}\\s|^${PATTERNS.NUMBER}$`, "g"),
    USERNAMES: new RegExp(`^${PATTERNS.USERNAME}\\s|\\s${PATTERNS.USERNAME}$|\\s${PATTERNS.USERNAME}\\s|^${PATTERNS.USERNAME}$`, "gi"),
    URLS: new RegExp(`^${PATTERNS.URL}\\s|\\s${PATTERNS.URL}$|\\s${PATTERNS.URL}\\s|^${PATTERNS.URL}$`, "gi"),
    HEX_COLOR: new RegExp(`^${PATTERNS.HEX_COLOR}$`),
};

var INITPAGING = {
    pageNumber: 1,
    pageSize: 10,
    orderBy: "id",
    orderDirection: "asc",
    keyword: "",
};

var PRODUCT_MATERIAL_TYPE = {
    SemiFinish: 1,
    Finish: 2,
    Gift: 3,
};

var PRODUCT_MATERIAL_TYPE_NAME = {
    SemiFinish: "Bán thành phẩm",
    Finish: "Sản phẩm phôi",
    Gift: "Quà tặng",
};

var PRODUCT_MATERIAL_TYPE_OPTION = Object.entries(PRODUCT_MATERIAL_TYPE).map((item) => {
    return { value: item[1], text: PRODUCT_MATERIAL_TYPE_NAME[item[0]], label: PRODUCT_MATERIAL_TYPE_NAME[item[0]] };
});

var LAYOUT_BANNER = {
    HOMEPAGE: 1,
    VOUCHER: 2,
    CREATOR_PROFILE: 3,
};

var IMAGE_SITE = {
    Desktop: 1,
    Mobile: 2,
};

var IMAGE_TYPE = {
    Slider: 1,
    ArtWork: 31,
    Brand: 12,
    ArtworkTote: 56,

    SectionProductNew: 40, //ảnh header section sản phẩm mới
    SectionProductMilestone: 41, //ảnh header section mua ngay giá tốt
    SectionProductHot: 42, //ảnh header section sản phẩm hot
    SectionProductCardForYou: 43, //ảnh header section sản phẩm cho bạn
    BannerCreatorProfile: 44, //ảnh banner trang creator profile
};

var IMAGE_TYPE_NAME = {
    ArtWork: "ArtWork",
    ArtworkTote: "ArtworkTote",
};

//vị trí hiển thị
var BANNER_POSITION = {
    NONE: 0,
    TOP: 1,
    CENTER: 2,
    BOTTOM: 3,
    LEFT: 4,
    RIGHT: 5,
    BACKGROUND: 6,
};

var PRODUCT_IMAGE_TYPE = {
    ProductFront: 15,
    ProductBack: 16,
    ProductRight: 17,
    ProductLeft: 18,
};

var VARIANT_IMAGE_TYPE = {
    VariantFront: 19,
    VariantBack: 20,
    VariantRight: 21,
    VariantLeft: 22,
};

var AGE_PRODUCT_IMAGE_TYPE = {
    AgeProductFront: 23,
    AgeProductBack: 24,
    AgeProductRight: 25,
    AgeProductLeft: 26,
};

var AGE_VARIANT_IMAGE_TYPE = {
    AgeVariantFront: 27,
    AgeVariantBack: 28,
    AgeVariantRight: 29,
    AgeVariantLeft: 30,
};

var RETURN_ORDER_STATUS = {
    Processing: 0,
    UpdateInformation: 1,
    AllowReceivingOff: 2,
    DeclineReceivingOff: 4,
    ReplaceProducts: 8,
    SendMoreProducts: 16,
    Refund: 32,
    Closed: 1024,
};

var TicketHistoryStatus = {
    Default: 0,
    BuyerSendRequest: 1,
    AdminReceivedRequest: 2,
    BuyerSendProduct: 3,
    AdminReceivedProduct: 4,
    AdminSendProduct: 5,
    AdminRefund: 6,
    AdminCloseTicket: 7,
    BuyerCloseTicket: 8,
    AdminAllowReceivingOff: 9,
    AdminDeclineReceivingOff: 10,
    AdminNeedMoreInfo: 11,
    AdminRefundSucceed: 12,
    AdminSendProductSucceed: 13,
};

var ARTWORK_TYPE = {
    None: 0,
    Front: 1,
    Back: 2,
};

var RETURN_ORDER_STATUS_NAME = {
    Processing: "Yêu cầu đang được xử lý",
    UpdateInformation: "Cập nhật thêm thông tin",
    AllowReceivingOff: "Đồng ý đổi trả",
    DeclineReceivingOff: "Từ chối đổi trả",
    ReplaceProducts: "Thu hồi, gửi sản phẩm mới",
    SendMoreProducts: "Không thu hồi, gửi sản phẩm mới",
    Refund: "Hoàn lại tiền",
    Closed: "Đóng yêu cầu",
};
var CARD_COLOR = {
    Green: "#00c853",
    Blue: "#64b5f6",
    Yellow: "#ffeb3b",
    Red: "#ff1744",
    Orange: "#ff9100",
};
var RETURN_ORDER_STATUS_NAME_ARR = {
    0: "Yêu cầu đang được xử lý",
    1: "Cập nhật thêm thông tin",
    2: "Đồng ý đổi trả",
    4: "Từ chối đổi trả",
    8: "Đổi sang sản phẩm khác",
    16: "Gửi thêm sản phẩm mới",
    32: "Hoàn lại tiền",
    1024: "Yêu cầu được đóng",
};

var PRODUCT_STATUS_APPROVED = {
    WAITING: 0, //chờ duyệt
    APPROVED: 1, //đã duyet
    REJECTED: 2, //từ chối
    CANCELLED: 3, //Hủy
};

const PROJECT_EDITOR_ITEM_TYPE = {
    IMAGE: 0,
    TEXT: 1,
    EMBED: 2,
    MOCKUP: 3,
};

const PROJECT_EDITOR_TEXT_ALIGN_TYPE = {
    LEFT: "LEFT",
    CENTER: "CENTER",
    RIGHT: "RIGHT",
};

const PROJECT_EDITOR_MODAL_TYPE = {
    ADD: "ADD",
    EDIT: "EDIT",
    INSERT: "INSERT",
    ERROR: "ERROR",
};

const ARTWORK_STATUS = {
    All: -2, //Tất cả
    Draft: -1, //Nháp
    Waiting: 0, //Chờ duyệt
    ApprovedArtwork: 1, //Đã duyệt thiết kế
    ApprovedTotal: 2, //Đã duyệt tổng thể
    RejectedArtwork: 3, //Từ chối thiết kế
    RejectedTotal: 4, //Từ chối tổng thể
    Cancelled: 5, //Bị hủy do vi phạm quy định của Ranus
    Online: 6, //Online
    Offline: 7, //Ẩn
    Initializing: 8, //Đang khởi tạo
    CensorshipFailed: 9, //Kiểm duyệt thất bại
    WaitingTotal: 10, //Chờ duyệt tổng thể
    StopBusiness: 11, //Ngừng kinh doanh
};
const ARTWORK_STATUS_NAME = {
    0: "Chờ duyệt",
    1: "Đã duyệt thiết kế",
    2: "Đã duyệt tổng thể",
    3: "Từ chối thiết kế",
    4: "Từ chối tổng thể",
    5: "Bị hủy do vi phạm quy định của Ranus",
    6: "Online",
    7: "Ẩn",
    8: "Đang khởi tạo",
    9: "Kiểm duyệt thất bại",
    10: "Chờ duyệt tổng thể",
};

const CAMPAIGN_BOOSTING_STATUS_OPTIONS = [
    {
        value: 0,
        label: "Nháp",
    },
    {
        value: 1,
        label: "Đã duyệt",
    },
    {
        value: 2,
        label: "Đang chạy",
    },
    {
        value: 3,
        label: "Kết thúc",
    },
];

const ARTWORK_STATUS_OPTIONS = [
    {
        value: ARTWORK_STATUS.Waiting,
        label: "Chờ duyệt",
    },
    {
        value: ARTWORK_STATUS.ApprovedArtwork,
        label: "Đã duyệt thiết kế",
    },
    {
        value: ARTWORK_STATUS.ApprovedTotal,
        label: "Đã duyệt tổng thể",
    },
    {
        value: ARTWORK_STATUS.RejectedArtwork,
        label: "Từ chối thiết kế",
    },
    {
        value: ARTWORK_STATUS.RejectedTotal,
        label: "Từ chối tổng thể",
    },
    {
        value: ARTWORK_STATUS.Cancelled,
        label: "Bị hủy do vi phạm quy định của Ranus",
    },
    {
        value: ARTWORK_STATUS.Online,
        label: "Online",
    },
    {
        value: ARTWORK_STATUS.Offline,
        label: "Ẩn",
    },
    {
        value: ARTWORK_STATUS.Initializing,
        label: "Đang khởi tạo",
    },
    {
        value: ARTWORK_STATUS.CensorshipFailed,
        label: "Kiểm duyệt thất bại",
    },
    {
        value: ARTWORK_STATUS.StopBusiness,
        label: "Ngừng kinh doanh",
    },
];

const POSITION_LEVEL = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
};

const POSITION_LEVEL_NAME = {
    1: "Ngực trái",
    2: "Ngực phải",
    3: "Sau lưng",
    4: "Cánh tay trái",
    5: "Cánh tay phải",
};

const THIRD_PARTY_TYPE = {
    Customer: 1,
    Supplier: 2,
    Lotus: 3,
    Producer: 4,
    Creator: 5,
};

const INK_COMBINATION = {
    Color: 0,
    ColorWhite: 2,
};

const PRINT_TYPE = {
    DTG: 1,
    PET: 2,
    HEAT: 16,
    EMBROIDER: 32,
    UV: 64,
};

const PRINT_TYPE_NAME = {
    0: "Trơn",
    1: "DTG",
    2: "PET",
    4: "Lụa",
    8: "Decal",
    16: "Chuyển nhiệt",
    32: "Thêu",
    64: "UV",
};

const PRESSURE_TYPE = {
    Artwork: 1,
    Logo: 2,
};

const OPERATOR_ORDER_STATUS = {
    Preparing: 0,
    ArtworkPrinting: 1,
    ArtworkPrinted: 2,
    LogoPrinting: 4,
    LogoPrinted: 8,
    LogoPressured: 16,
    TotalSucceed: 32,
};

const OPERATOR_ORDER_STATUS_NAME = {
    Preparing: "Chuẩn bị",
    ArtworkPrinting: "Đang in Artwork",
    ArtworkPrinted: "Đã in và ép Artwork",
    LogoPrinting: "Đang in Logo",
    LogoPrinted: "Đã in Logo",
    LogoPressured: "Đã ép Logo",
    TotalSucceed: "Hoàn thành in và ép",
};

const OPTION_POSITION = {
    /// Vị trí mặt trước thứ nhất,
    PositionA: 1,
    /// Vị trí mặt sau thứ nhất,
    PositionB: 2,
    /// Vị trí mặt sau thứ hai,
    PositionC: 3,
    /// Vị trí mặt sau thứ ba
    PositionD: 4,
};

const PACKAGE_ORDER_STATUS = {
    NOT_PACK: 1,
    PACKING: 2,
    PARTIAL_PACK: 3,
    FULL_PACK: 4,
};
const PACKAGE_ORDER_STATUS_NAME = {
    NOT_PACK: "Chưa đóng gói",
    PACKING: "Đang đóng gói",
    PARTIAL_PACK: "Đóng gói chưa xong",
    FULL_PACK: "Đã hoàn thành đóng gói",
};

const SYSTEM_ROLE_CONSTANTS = {
    PRINTER_MANAGER: "PrinterManager",
    PRESSURE_MANAGER: "PressureManager",
};

const OPERATOR_ORDER_INLINE_STATUS = {
    NotCreateBatchProduction: 1,
    CreatedBatchProduction: 2,
    PrintedPetTag: 3,
    PressurePetTag: 4,
    NotPrintedDTGTag: 5,
    PrintedDTGTag: 6,
    PreProcessDTGTag: 7,
    SendedPrinterDTGTag: 8,
    SuccessPrintDTGTag: 9,
};

const APPROVED_STATUS = {
    /// <summary>
    /// chờ duyệt
    /// </summary>
    Waiting: 0,
    /// <summary>
    /// đã duyệt
    /// </summary>
    Approved: 1,
    /// <summary>
    /// từ chối duyệt
    /// </summary>
    Reject: 2,
};

const VOUCHER_STATUS = {
    UPCOMING: 1, //sắp diễn ra
    GOING_ON: 2, //đang diễn ra
    FINISHED: 3, //két thúc
};
const VOUCHER_STATUS_NAME = {
    1: "Sắp diễn ra",
    2: "Đang diễn ra",
    3: "Đã kết thúc",
};
const VOUCHER_REGISTER_STATUS = {
    UPCOMING: 1, //sắp diễn ra
    GOING_ON: 2, //đang diễn ra
    FINISHED: 3, //két thúc
};
const VOUCHER_REGISTER_STATUS_NAME = {
    1: "Sắp đến ngày đăng ký",
    2: "Đang diễn ra đăng ký",
    3: "Kết thúc đăng ký",
};
const USER_TYPE = {
    SYSTEM: 0,
    CREATOR: 1,
    CUSTOMER: 2,
    MARKETER: 3,
};
const CAMPAIGN_BOOSTING_STATUS = {
    DRAFT: 0,
    APPROVED: 1,
    RUNNING: 2,
    FINISH: 3,
};
const CAMPAIGN_BOOSTING_STATUS_NAME = {
    0: "Nháp",
    1: "Đã duyệt",
    2: "Đang chạy",
    3: "Kết thúc",
};
const SLOTOPERATOROBJECTTYPE = {
    MainImageLogo: 0,
    SubImageLogo: 1,
};
const ADJUST_TYPE_STOCKIN = {
    Init: 0,
    Increase: 1,
    Decrease: 2,
    Deleted: 3,
};

const FLEXI_COMBO_TYPE = {
    MinMoney: 1,
    MinQuantity: 2,
};

const FLEXI_COMBO_TYPE_NAME = {
    MinMoney: "Đơn hàng tối thiểu",
    MinQuantity: "Số lượng tối thiểu",
};

const APPLIED_OPTION_TYPE = {
    AppSet: 1,
    AppProduct: 2,
    Creator: 3,
    AgeSet: 4,
};

const APPLIED_OPTION_TYPE_NAME = {
    AppSet: "Theo set sản phẩm",
    AppProduct: "Theo sản phẩm",
    Creator: "Theo Creator",
    AgeSet: "Theo Artwork",
};

const PRODUCT_COLOR_TYPE = {
    Color: 0,
    White: 1,
    Black: 2,
};

const PLATEN_SIZE = {
    P16X21: 0,
    P14X16: 2,
};

const VOUCHER_TYPE = {
    Normal: 0,
    Gift: 1,
    PromotedBrand: 2,
    FreeShip: 3,
    Flexi: 4,
    Brand: 5,
};

var SOCIAL = {
    Undefined: 0,
    Facebook: 1,
    Google: 2,
};

const SIZE = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
    desktopL: 3840,
};

const IMAGEABLE_TYPE = {
    StockPhoto: 1,
    UploadImage: 2,
};

const SEX = {
    Man: 0,
    Woman: 1,
    Other: 2,
};

const SEX_VI = {
    Man: "Nam",
    Woman: "Nữ",
    Other: "Khác",
};

const StockFolderType = {
    StockPhoto: 1,
    Font: 2,
    StockImage: 3,
    PhotoTemplate: 4,
};

const StockFolderTypeName = {
    StockPhoto: "Họa tiết",
    Font: "Font chữ",
    StockImage: "Hình ảnh",
    PhotoTemplate: "Mẫu họa tiết",
};

export {
    ADJUST_TYPE_STOCKIN,
    SLOTOPERATOROBJECTTYPE,
    CONTENT_TYPE,
    ROLES,
    CAMPAIGN_BOOSTING_STATUS,
    CAMPAIGN_BOOSTING_STATUS_NAME,
    CAMPAIGN_BOOSTING_STATUS_OPTIONS,
    USER_TYPE,
    VOUCHER_REGISTER_STATUS,
    VOUCHER_REGISTER_STATUS_NAME,
    VOUCHER_STATUS,
    VOUCHER_STATUS_NAME,
    PRODUCT_STATUS_APPROVED,
    CONSTANTS,
    NOTIFY,
    YEARCHECK,
    MAINMENU,
    SUBMENU,
    BANKACCOUNT_TYPE,
    PLATFORM,
    PLATFORM_NAME,
    REFUND_REASONS,
    STATUS_PRODUCT,
    ATTRIBUTE_INPUT_TYPE,
    ATTRIBUTE_TYPE,
    JOIN_CHAR,
    CAMPAIGN_TYPE,
    VOUCHER_DISCOUNT_TYPE,
    WARRANTY_TYPE,
    STATUS_TRANSACTION,
    FACEBOOK_CHANNEL_FEED,
    FACEBOOK_CHANNEL_FEED_ENUM,
    FACEBOOK_CHANNEL_DETAIL_TAB,
    STOCK_IN_STATUS,
    PRODUCT_STATUS,
    PAYMENT_METHOD,
    SELLER_PAYMENT_METHOD,
    ORDER_SOURCE,
    SOCIAL_MARKET_PLACE,
    DEFAULT_VALUE,
    ORDER_TYPE,
    ORDER_STATUS,
    PRODUCT_EDITOR_TAB,
    AGENCY_PRODUCT_EDITOR_TAB,
    STATUS_TRANSACTION_NAME,
    BANK_TRANSFER_STATUS,
    BANK_TRANSFER_STATUS_NAME,
    PRODUCT_STATUS_TYPE,
    ENTITY_STATE,
    ATTRIBUTE_TYPES,
    INPUT_TYPE,
    PRODUCT_OVERVIEW,
    STOCK_IN_STATUS_NAME,
    PRODUCT_TYPE,
    WARRANTY_STATUS,
    WARRANTY_RECEIVE_STATUS,
    STATUS_ACTIVE,
    PAYMENT_SCHEME,
    SHIPPING_SERVICE_TYPE,
    TEMPLATE_IMPORT,
    PRODUCT_PUSHING_STATUS,
    PATTERNS,
    REGEX,
    INITPAGING,
    PRODUCT_MATERIAL_TYPE,
    PRODUCT_MATERIAL_TYPE_NAME,
    PRODUCT_MATERIAL_TYPE_OPTION,
    IMAGE_SITE,
    IMAGE_TYPE,
    PRODUCT_IMAGE_TYPE,
    VARIANT_IMAGE_TYPE,
    SHIPPING_SERVICES,
    SHIPPING_SERVICES_CODE,
    RETURN_ORDER_STATUS,
    RETURN_ORDER_STATUS_NAME,
    RETURN_ORDER_STATUS_NAME_ARR,
    AGE_PRODUCT_IMAGE_TYPE,
    AGE_VARIANT_IMAGE_TYPE,
    ARTWORK_TYPE,
    PROJECT_EDITOR_ITEM_TYPE,
    PROJECT_EDITOR_TEXT_ALIGN_TYPE,
    PROJECT_EDITOR_MODAL_TYPE,
    ARTWORK_STATUS,
    ARTWORK_STATUS_OPTIONS,
    POSITION_LEVEL,
    POSITION_LEVEL_NAME,
    THIRD_PARTY_TYPE,
    INK_COMBINATION,
    PRINT_TYPE,
    OPERATOR_ORDER_STATUS,
    OPERATOR_ORDER_STATUS_NAME,
    OPTION_POSITION,
    PACKAGE_ORDER_STATUS,
    PACKAGE_ORDER_STATUS_NAME,
    PRESSURE_TYPE,
    SYSTEM_ROLE_CONSTANTS,
    OPERATOR_ORDER_INLINE_STATUS,
    APPROVED_STATUS,
    LAYOUT_BANNER,
    FLEXI_COMBO_TYPE,
    FLEXI_COMBO_TYPE_NAME,
    APPLIED_OPTION_TYPE,
    APPLIED_OPTION_TYPE_NAME,
    ARTWORK_STATUS_NAME,
    CARD_COLOR,
    PRODUCT_COLOR_TYPE,
    PLATEN_SIZE,
    VOUCHER_TYPE,
    BANNER_POSITION,
    SOCIAL,
    JOB_STATUS,
    JOB_STATUS_NAME,
    SIZE,
    PRINT_TYPE_NAME,
    IMAGE_TYPE_NAME,
    TicketHistoryStatus,
    IMAGEABLE_TYPE,
    SEX,
    SEX_VI,
    StockFolderType,
    StockFolderTypeName,
};

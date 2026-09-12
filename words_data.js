/**
 * Kho dữ liệu 240 từ vựng tiếng Anh chọn lọc
 * Phân bổ thành 12 ngày học (mỗi ngày đúng 20 từ không lặp lại)
 */
const VOCABULARY_REPOSITORY = [
  // ==================== NGÀY 1: TÍNH CÁCH VÀ TƯ DUY (20 TỪ) ====================
  {
    id: 1, day: 1, word: "Resilient", phonetic: "/rɪˈzɪl.jənt/", type: "Tính từ",
    meaning: "Kiên cường, phục hồi nhanh sau biến cố",
    exampleEn: "She is resilient and remains focused despite setbacks.",
    exampleVi: "Cô ấy rất kiên cường và luôn tập trung dù gặp trở ngại.",
    memoryTip: "Hình ảnh chiếc lò xo bị nén xuống nhưng luôn bật dậy mạnh mẽ.",
    collocation: "Resilient mindset"
  },
  {
    id: 2, day: 1, word: "Persevere", phonetic: "/ˌpɜː.sɪˈvɪər/", type: "Động từ",
    meaning: "Kiên trì, bền chí theo đuổi mục tiêu",
    exampleEn: "If you persevere, you will achieve your dreams.",
    exampleVi: "Nếu bạn kiên trì, bạn sẽ đạt được ước mơ.",
    memoryTip: "Phá vỡ vất vả, nỗ lực không ngừng nghỉ để vượt qua rào cản.",
    collocation: "Persevere through difficulties"
  },
  {
    id: 3, day: 1, word: "Diligent", phonetic: "/ˈdɪl.ɪ.dʒənt/", type: "Tính từ",
    meaning: "Cần cù, chăm chỉ, cẩn trọng",
    exampleEn: "The diligent worker finished ahead of schedule.",
    exampleVi: "Người nhân viên cần cù đã hoàn thành trước thời hạn.",
    memoryTip: "Đi liền việc, chu đáo và tỉ mỉ trong từng việc nhỏ.",
    collocation: "Diligent effort"
  },
  {
    id: 4, day: 1, word: "Empathy", phonetic: "/ˈem.pə.θi/", type: "Danh từ",
    meaning: "Sự đồng cảm, thấu hiểu cảm xúc người khác",
    exampleEn: "True leadership begins with sincere empathy.",
    exampleVi: "Khả năng lãnh đạo thực thụ bắt đầu từ sự đồng cảm chân thành.",
    memoryTip: "Đặt mình vào hoàn cảnh của người khác để thấu cảm.",
    collocation: "Feel empathy for"
  },
  {
    id: 5, day: 1, word: "Integrity", phonetic: "/ɪnˈteɡ.rə.ti/", type: "Danh từ",
    meaning: "Tính chính trực, thanh liêm",
    exampleEn: "He is respected for his professional integrity.",
    exampleVi: "Ông ấy được kính trọng nhờ tính chính trực trong nghề nghiệp.",
    memoryTip: "Gốc từ nguyên vẹn, trước sau như một không lay chuyển.",
    collocation: "High integrity"
  },
  {
    id: 6, day: 1, word: "Optimistic", phonetic: "/ˌɒp.tɪˈmɪs.tɪk/", type: "Tính từ",
    meaning: "Lạc quan, tin tưởng tương lai tốt đẹp",
    exampleEn: "She has an optimistic attitude towards change.",
    exampleVi: "Cô ấy có thái độ lạc quan trước những sự thay đổi.",
    memoryTip: "Luôn nhìn vào mặt tích cực và cơ hội phát triển.",
    collocation: "Optimistic outlook"
  },
  {
    id: 7, day: 1, word: "Meticulous", phonetic: "/məˈtɪk.jə.ləs/", type: "Tính từ",
    meaning: "Tỉ mỉ, cẩn thận từng chi tiết nhỏ",
    exampleEn: "His research was meticulous and error-free.",
    exampleVi: "Nghiên cứu của anh ấy vô cùng tỉ mỉ và không có sai sót.",
    memoryTip: "Mê tiểu tiết, chăm chút kỹ lưỡng từng bước một.",
    collocation: "Meticulous planning"
  },
  {
    id: 8, day: 1, word: "Adaptable", phonetic: "/əˈdæp.tə.bəl/", type: "Tính từ",
    meaning: "Thích ứng linh hoạt với hoàn cảnh mới",
    exampleEn: "We need adaptable solutions for rapid growth.",
    exampleVi: "Chúng ta cần các giải pháp thích ứng linh hoạt cho sự tăng trưởng nhanh.",
    memoryTip: "Nước uốn mình theo vật chứa, hòa nhập linh hoạt.",
    collocation: "Adaptable approach"
  },
  {
    id: 9, day: 1, word: "Proactive", phonetic: "/prəʊˈæk.tɪv/", type: "Tính từ",
    meaning: "Chủ động, đón đầu vấn đề",
    exampleEn: "Be proactive rather than reactive in your career.",
    exampleVi: "Hãy chủ động thay vì chỉ ứng phó bị động trong sự nghiệp.",
    memoryTip: "Đi trước một bước, tự giác chuẩn bị chu đáo.",
    collocation: "Proactive measure"
  },
  {
    id: 10, day: 1, word: "Authentic", phonetic: "/ɔːˈθen.tɪk/", type: "Tính từ",
    meaning: "Chân thật, nguyên bản, đích thực",
    exampleEn: "Authentic communication builds long-term trust.",
    exampleVi: "Giao tiếp chân thật xây dựng niềm tin bền vững.",
    memoryTip: "Bản gốc không sao chép, sống đúng với giá trị cốt lõi.",
    collocation: "Authentic style"
  },
  {
    id: 11, day: 1, word: "Curiosity", phonetic: "/ˌkjʊə.riˈɒs.ə.ti/", type: "Danh từ",
    meaning: "Tính tò mò, lòng ham học hỏi",
    exampleEn: "Curiosity drives innovation and personal growth.",
    exampleVi: "Sự tò mò thúc đẩy đổi mới và phát triển bản thân.",
    memoryTip: "Ngọn đèn tìm tòi khám phá những điều mới lạ.",
    collocation: "Intellectual curiosity"
  },
  {
    id: 12, day: 1, word: "Humble", phonetic: "/ˈhʌm.bəl/", type: "Tính từ",
    meaning: "Khiêm tốn, nhã nhặn",
    exampleEn: "A wise person always remains humble.",
    exampleVi: "Người khôn ngoan luôn giữ thái độ khiêm tốn.",
    memoryTip: "Đôi chân vững vàng trên mặt đất, không tự mãn.",
    collocation: "Humble beginning"
  },
  {
    id: 13, day: 1, word: "Generosity", phonetic: "/ˌdʒen.əˈrɒs.ə.ti/", type: "Danh từ",
    meaning: "Sự hào phóng, rộng lượng",
    exampleEn: "Her generosity supported many young talents.",
    exampleVi: "Sự hào phóng của bà đã nâng đỡ nhiều tài năng trẻ.",
    memoryTip: "Tấm lòng rộng mở, sẵn sàng chia sẻ giá trị.",
    collocation: "Remarkable generosity"
  },
  {
    id: 14, day: 1, word: "Compassion", phonetic: "/kəmˈpæʃ.ən/", type: "Danh từ",
    meaning: "Lòng trắc ẩn, tình yêu thương",
    exampleEn: "Show compassion to those going through hardships.",
    exampleVi: "Hãy thể hiện lòng trắc ẩn với những người đang gặp khó khăn.",
    memoryTip: "Cùng cảm nhận nỗi đau và mong muốn giúp đỡ.",
    collocation: "Act of compassion"
  },
  {
    id: 15, day: 1, word: "Patience", phonetic: "/ˈpeɪ.ʃəns/", type: "Danh từ",
    meaning: "Tính kiên nhẫn, sự nhẫn nại",
    exampleEn: "Patience is essential when mastering a skill.",
    exampleVi: "Kiên nhẫn là điều thiết yếu khi muốn thành thạo một kỹ năng.",
    memoryTip: "Tĩnh tâm chờ hạt mầm phát triển thành cây lớn.",
    collocation: "Have patience"
  },
  {
    id: 16, day: 1, word: "Discipline", phonetic: "/ˈdɪs.ə.plɪn/", type: "Danh từ",
    meaning: "Tính kỷ luật, tự rèn luyện",
    exampleEn: "Discipline creates consistent results over time.",
    exampleVi: "Kỷ luật tạo nên những kết quả bền vững theo thời gian.",
    memoryTip: "Nề nếp tự giác biến ước mơ thành hiện thực.",
    collocation: "Self-discipline"
  },
  {
    id: 17, day: 1, word: "Innovative", phonetic: "/ˈɪn.ə.və.tɪv/", type: "Tính từ",
    meaning: "Sáng tạo, đổi mới đột phá",
    exampleEn: "They introduced an innovative training program.",
    exampleVi: "Họ đã giới thiệu một chương trình đào tạo mang tính sáng tạo.",
    memoryTip: "Đưa luồng gió mới, ý tưởng mới vào thực tiễn.",
    collocation: "Innovative concept"
  },
  {
    id: 18, day: 1, word: "Articulate", phonetic: "/ɑːˈtɪk.jə.lət/", type: "Tính từ",
    meaning: "Diễn đạt lưu loát, rõ ràng",
    exampleEn: "He is an articulate advocate for social change.",
    exampleVi: "Anh ấy là một người lên tiếng lưu loát cho sự thay đổi xã hội.",
    memoryTip: "Lời nói khúc chiết, mạch lạc, dễ hiểu.",
    collocation: "Articulate speaker"
  },
  {
    id: 19, day: 1, word: "Insightful", phonetic: "/ˈɪn.saɪt.fəl/", type: "Tính từ",
    meaning: "Sâu sắc, thấu suốt bản chất",
    exampleEn: "The report offers insightful recommendations.",
    exampleVi: "Bản báo cáo mang lại những khuyến nghị rất sâu sắc.",
    memoryTip: "Nhìn thấu qua vẻ bề ngoài để thấy rõ cốt lõi.",
    collocation: "Insightful analysis"
  },
  {
    id: 20, day: 1, word: "Tenacious", phonetic: "/təˈneɪ.ʃəs/", type: "Tính từ",
    meaning: "Bền bỉ, kiên định bám đuổi",
    exampleEn: "His tenacious spirit led to an unexpected breakthrough.",
    exampleVi: "Tinh thần bền bỉ của anh đã dẫn đến một bước đột phá bất ngờ.",
    memoryTip: "Một khi đã nắm lấy mục tiêu đúng thì không buông tay.",
    collocation: "Tenacious effort"
  },

  // ==================== NGÀY 2: GIAO TIẾP VÀ DIỄN ĐẠT (20 TỪ) ====================
  {
    id: 21, day: 2, word: "Coherent", phonetic: "/kəʊˈhɪə.rənt/", type: "Tính từ",
    meaning: "Mạch lạc, có sự gắn kết logic",
    exampleEn: "A coherent argument is much easier to follow.",
    exampleVi: "Một lập luận mạch lạc sẽ dễ theo dõi hơn nhiều.",
    memoryTip: "Các mắt xích nối nhau chặt chẽ tạo thành một thể thống nhất.",
    collocation: "Coherent strategy"
  },
  {
    id: 22, day: 2, word: "Eloquent", phonetic: "/ˈel.ə.kwənt/", type: "Tính từ",
    meaning: "Hùng biện, truyền cảm, có sức thuyết phục",
    exampleEn: "She gave an eloquent speech to the graduation class.",
    exampleVi: "Cô ấy đã có bài phát biểu hùng hồn trước lớp tốt nghiệp.",
    memoryTip: "Lời nói giàu cảm xúc và hình ảnh lay động người nghe.",
    collocation: "Eloquent voice"
  },
  {
    id: 23, day: 2, word: "Concise", phonetic: "/kənˈsaɪs/", type: "Tính từ",
    meaning: "Ngắn gọn, súc tích",
    exampleEn: "Please keep your summary clear and concise.",
    exampleVi: "Vui lòng giữ cho phần tóm tắt ngắn gọn và rõ ràng.",
    memoryTip: "Cắt gọt những phần thừa thãi, giữ lại ý chính cốt lõi.",
    collocation: "Concise summary"
  },
  {
    id: 24, day: 2, word: "Persuasive", phonetic: "/pəˈsweɪ.sɪv/", type: "Tính từ",
    meaning: "Có sức thuyết phục",
    exampleEn: "He gave a persuasive presentation that won the contract.",
    exampleVi: "Anh ấy đã thuyết trình đầy thuyết phục và giành được hợp đồng.",
    memoryTip: "Lý lẽ vững chắc khiến người nghe tâm phục khẩu phục.",
    collocation: "Persuasive evidence"
  },
  {
    id: 25, day: 2, word: "Ambiguous", phonetic: "/æmˈbɪɡ.ju.əs/", type: "Tính từ",
    meaning: "Mơ hồ, đa nghĩa, không rõ ràng",
    exampleEn: "Avoid ambiguous phrasing in formal contracts.",
    exampleVi: "Tránh những cách diễn đạt mơ hồ trong hợp đồng chính thức.",
    memoryTip: "Đứng giữa ngã ba đường, hiểu theo cách nào cũng được.",
    collocation: "Ambiguous wording"
  },
  {
    id: 26, day: 2, word: "Clarify", phonetic: "/ˈklær.ɪ.faɪ/", type: "Động từ",
    meaning: "Làm sáng tỏ, giải thích rõ ràng",
    exampleEn: "Could you clarify the main objective of this task?",
    exampleVi: "Bạn có thể làm rõ mục tiêu chính của nhiệm vụ này không?",
    memoryTip: "Lau sạch tấm gương mờ để nhìn thấy mọi thứ rõ ràng.",
    collocation: "Clarify the situation"
  },
  {
    id: 27, day: 2, word: "Candid", phonetic: "/ˈkæn.dɪd/", type: "Tính từ",
    meaning: "Thẳng thắn, bộc trực, không giấu giếm",
    exampleEn: "We appreciate your candid feedback on this project.",
    exampleVi: "Chúng tôi trân trọng phản hồi thẳng thắn của bạn về dự án này.",
    memoryTip: "Nói thật lòng, không quanh co né tránh.",
    collocation: "Candid discussion"
  },
  {
    id: 28, day: 2, word: "Tactful", phonetic: "/ˈtækt.fəl/", type: "Tính từ",
    meaning: "Khéo léo, tế nhị trong ứng xử",
    exampleEn: "She was tactful when delivering the sensitive news.",
    exampleVi: "Cô ấy rất khéo léo và tế nhị khi thông báo tin tức nhạy cảm.",
    memoryTip: "Biết chọn lời hay ý đẹp để không làm tổn thương người khác.",
    collocation: "Tactful manner"
  },
  {
    id: 29, day: 2, word: "Receptive", phonetic: "/rɪˈsep.tɪv/", type: "Tính từ",
    meaning: "Cởi mở, sẵn sàng đón nhận ý kiến mới",
    exampleEn: "Good mentors are always receptive to new ideas.",
    exampleVi: "Những người thầy giỏi luôn cởi mở đón nhận các ý tưởng mới.",
    memoryTip: "Mở rộng cửa tâm hồn để tiếp nhận tri thức.",
    collocation: "Receptive to advice"
  },
  {
    id: 30, day: 2, word: "Negotiate", phonetic: "/nəˈɡəʊ.ʃi.eɪt/", type: "Động từ",
    meaning: "Đàm phán, thương lượng",
    exampleEn: "They met to negotiate the terms of agreement.",
    exampleVi: "Họ gặp nhau để đàm phán các điều khoản thỏa thuận.",
    memoryTip: "Hai bên cùng trao đổi để tìm điểm chung hài hòa.",
    collocation: "Negotiate a contract"
  },
  {
    id: 31, day: 2, word: "Diplomatic", phonetic: "/ˌdɪp.ləˈmæt.ɪk/", type: "Tính từ",
    meaning: "Ngoại giao khôn khéo, dĩ hòa vi quý",
    exampleEn: "A diplomatic response avoided further conflict.",
    exampleVi: "Một câu trả lời khôn khéo đã tránh được xung đột phát sinh.",
    memoryTip: "Gìn giữ hòa khí và tôn trọng lẫn nhau.",
    collocation: "Diplomatic answer"
  },
  {
    id: 32, day: 2, word: "Reiterate", phonetic: "/riˈɪt.ər.eɪt/", type: "Động từ",
    meaning: "Nhắc lại, nhấn mạnh lại lần nữa",
    exampleEn: "Let me reiterate our core commitment to quality.",
    exampleVi: "Cho phép tôi nhắc lại cam kết cốt lõi của chúng ta về chất lượng.",
    memoryTip: "Lặp lại điểm mấu chốt để người nghe ghi nhớ sâu.",
    collocation: "Reiterate the importance"
  },
  {
    id: 33, day: 2, word: "Elaborate", phonetic: "/iˈlæb.ər.eɪt/", type: "Động từ",
    meaning: "Trình bày chi tiết, giải thích cụ thể",
    exampleEn: "Please elaborate on your proposed plan.",
    exampleVi: "Xin hãy trình bày chi tiết hơn về kế hoạch đề xuất của bạn.",
    memoryTip: "Mở rộng từng nhánh ý để bức tranh toàn cảnh hiện rõ.",
    collocation: "Elaborate further"
  },
  {
    id: 34, day: 2, word: "Assertive", phonetic: "/əˈsɜː.tɪv/", type: "Tính từ",
    meaning: "Quả quyết, tự tin bảo vệ quan điểm",
    exampleEn: "You should be assertive without being aggressive.",
    exampleVi: "Bạn nên tự tin quả quyết nhưng không mang tính hiếu thắng.",
    memoryTip: "Bày tỏ chính kiến rõ ràng với thái độ tôn trọng.",
    collocation: "Assertive communication"
  },
  {
    id: 35, day: 2, word: "Comprehend", phonetic: "/ˌkɒm.prɪˈhend/", type: "Động từ",
    meaning: "Lĩnh hội, hiểu trọn vẹn",
    exampleEn: "It takes effort to comprehend abstract concepts.",
    exampleVi: "Cần nhiều nỗ lực để hiểu thấu những khái niệm trừu tượng.",
    memoryTip: "Bao quát toàn bộ vấn đề và nắm chắc ý nghĩa.",
    collocation: "Comprehend the meaning"
  },
  {
    id: 36, day: 2, word: "Convey", phonetic: "/kənˈveɪ/", type: "Động từ",
    meaning: "Truyền đạt, biểu lộ thông điệp",
    exampleEn: "Words cannot convey how grateful I am.",
    exampleVi: "Ngôn từ không thể biểu đạt hết sự biết ơn của tôi.",
    memoryTip: "Chuyển tải thông điệp từ trái tim đến trái tim.",
    collocation: "Convey a message"
  },
  {
    id: 37, day: 2, word: "Emphasize", phonetic: "/ˈem.fə.saɪz/", type: "Động từ",
    meaning: "Nhấn mạnh, làm nổi bật tầm quan trọng",
    exampleEn: "The speaker emphasized the value of daily reading.",
    exampleVi: "Diễn giả đã nhấn mạnh giá trị của việc đọc sách mỗi ngày.",
    memoryTip: "Tô đậm điểm then chốt nhất trong bài học.",
    collocation: "Emphasize the need"
  },
  {
    id: 38, day: 2, word: "Subtle", phonetic: "/ˈsʌt.əl/", type: "Tính từ",
    meaning: "Tinh tế, phảng phất, khó nhận thấy",
    exampleEn: "There is a subtle difference between the two terms.",
    exampleVi: "Có một sự khác biệt rất tinh tế giữa hai thuật ngữ này.",
    memoryTip: "Nét duyên ngầm tinh tế cần quan sát kỹ mới thấy.",
    collocation: "Subtle distinction"
  },
  {
    id: 39, day: 2, word: "Nuance", phonetic: "/ˈnjuː.ɑːns/", type: "Danh từ",
    meaning: "Sắc thái ý nghĩa tinh vi",
    exampleEn: "A good translator grasps every nuance of the language.",
    exampleVi: "Một người dịch giỏi nắm bắt từng sắc thái nhỏ của ngôn ngữ.",
    memoryTip: "Gam màu chuyển biến nhẹ nhàng tạo nên nét riêng.",
    collocation: "Subtle nuance"
  },
  {
    id: 40, day: 2, word: "Pivotal", phonetic: "/ˈpɪv.ə.təl/", type: "Tính từ",
    meaning: "Then chốt, có tính bước ngoặt",
    exampleEn: "This agreement played a pivotal role in the partnership.",
    exampleVi: "Thỏa thuận này đóng vai trò then chốt trong quan hệ hợp tác.",
    memoryTip: "Chiếc bản lề giúp cánh cửa lớn chuyển động.",
    collocation: "Pivotal moment"
  },

  // ==================== NGÀY 3: HIỆU SUẤT VÀ CÔNG VIỆC (20 TỪ) ====================
  {
    id: 41, day: 3, word: "Competent", phonetic: "/ˈkɒm.pɪ.tənt/", type: "Tính từ",
    meaning: "Có năng lực, thành thạo công việc",
    exampleEn: "She is a competent manager who handles crises calmly.",
    exampleVi: "Cô ấy là một nhà quản lý có năng lực, xử lý khủng hoảng điềm tĩnh.",
    memoryTip: "Đủ tài năng và kỹ năng để đảm đương tốt vị trí.",
    collocation: "Highly competent"
  },
  {
    id: 42, day: 3, word: "Proficient", phonetic: "/prəˈfɪʃ.ənt/", type: "Tính từ",
    meaning: "Thuần thục, điêu luyện",
    exampleEn: "He became proficient in English after two years of study.",
    exampleVi: "Anh ấy đã sử dụng tiếng Anh thành thạo sau hai năm học tập.",
    memoryTip: "Luyện tập nhiều lần đến mức thành phản xạ tự nhiên.",
    collocation: "Proficient in speaking"
  },
  {
    id: 43, day: 3, word: "Delegate", phonetic: "/ˈdel.ɪ.ɡeɪt/", type: "Động từ",
    meaning: "Giao phó công việc, ủy quyền",
    exampleEn: "Effective managers know how to delegate tasks properly.",
    exampleVi: "Những nhà quản lý giỏi biết cách giao việc phù hợp.",
    memoryTip: "Chia sẻ trách nhiệm để tập thể cùng lớn mạnh.",
    collocation: "Delegate authority"
  },
  {
    id: 44, day: 3, word: "Collaborate", phonetic: "/kəˈlæb.ə.reɪt/", type: "Động từ",
    meaning: "Hợp tác, phối hợp cùng làm việc",
    exampleEn: "Teams must collaborate closely to complete the project.",
    exampleVi: "Các đội ngũ phải hợp tác chặt chẽ để hoàn thành dự án.",
    memoryTip: "Cùng góp sức tạo nên thành quả lớn hơn.",
    collocation: "Collaborate on a project"
  },
  {
    id: 45, day: 3, word: "Facilitate", phonetic: "/fəˈsɪl.ɪ.teɪt/", type: "Động từ",
    meaning: "Tạo điều kiện thuận lợi, thúc đẩy",
    exampleEn: "Modern technology facilitates distance learning.",
    exampleVi: "Công nghệ hiện đại tạo điều kiện thuận lợi cho việc học từ xa.",
    memoryTip: "Dọn dẹp rào cản để tiến trình diễn ra êm đẹp.",
    collocation: "Facilitate progress"
  },
  {
    id: 46, day: 3, word: "Prioritize", phonetic: "/praɪˈɒr.ɪ.taɪz/", type: "Động từ",
    meaning: "Ưu tiên, sắp xếp theo thứ tự quan trọng",
    exampleEn: "You should prioritize your health above all else.",
    exampleVi: "Bạn nên ưu tiên sức khỏe của mình lên trên hết.",
    memoryTip: "Làm việc quan trọng nhất trước để tối ưu hóa thời gian.",
    collocation: "Prioritize tasks"
  },
  {
    id: 47, day: 3, word: "Streamline", phonetic: "/ˈstriːm.laɪn/", type: "Động từ",
    meaning: "Tinh giản quy trình, tối ưu hóa",
    exampleEn: "The company streamlined its operations to save time.",
    exampleVi: "Công ty đã tinh giản hoạt động để tiết kiệm thời gian.",
    memoryTip: "Cắt bỏ những thủ tục rườm rà không cần thiết.",
    collocation: "Streamline the workflow"
  },
  {
    id: 48, day: 3, word: "Implement", phonetic: "/ˈɪm.plɪ.ment/", type: "Động từ",
    meaning: "Thi hành, triển khai vào thực tế",
    exampleEn: "We plan to implement the new policy next month.",
    exampleVi: "Chúng tôi dự kiến áp dụng chính sách mới vào tháng tới.",
    memoryTip: "Biến kế hoạch trên giấy thành hành động thực tế.",
    collocation: "Implement a plan"
  },
  {
    id: 49, day: 3, word: "Allocate", phonetic: "/ˈæl.ə.keɪt/", type: "Động từ",
    meaning: "Phân bổ nguồn lực",
    exampleEn: "Resources were allocated fairly across all departments.",
    exampleVi: "Các nguồn lực đã được phân bổ công bằng giữa các phòng ban.",
    memoryTip: "Chia phần hợp lý để từng mục tiêu đều có đủ điều kiện.",
    collocation: "Allocate resources"
  },
  {
    id: 50, day: 3, word: "Evaluate", phonetic: "/ɪˈvæl.ju.eɪt/", type: "Động từ",
    meaning: "Đánh giá, thẩm định kết quả",
    exampleEn: "We need to evaluate the outcome before moving forward.",
    exampleVi: "Chúng ta cần đánh giá kết quả trước khi tiếp tục.",
    memoryTip: "Đo lường cẩn thận để rút ra bài học kinh nghiệm.",
    collocation: "Evaluate performance"
  },
  {
    id: 51, day: 3, word: "Benchmark", phonetic: "/ˈbentʃ.mɑːk/", type: "Danh từ",
    meaning: "Tiêu chuẩn đối sánh, chuẩn mực",
    exampleEn: "This product sets a new benchmark for quality.",
    exampleVi: "Sản phẩm này đặt ra một chuẩn mực mới về chất lượng.",
    memoryTip: "Cột mốc tiêu chuẩn để đo lường sự tiến bộ.",
    collocation: "Set a benchmark"
  },
  {
    id: 52, day: 3, word: "Feasible", phonetic: "/ˈfiː.zə.bəl/", type: "Tính từ",
    meaning: "Khả thi, có thể thực hiện được",
    exampleEn: "The proposed timeline is realistic and feasible.",
    exampleVi: "Lộ trình đề xuất rất thực tế và hoàn toàn khả thi.",
    memoryTip: "Vừa sức và có đủ nguồn lực để biến thành hiện thực.",
    collocation: "Feasible solution"
  },
  {
    id: 53, day: 3, word: "Accountable", phonetic: "/əˈkaʊn.tə.bəl/", type: "Tính từ",
    meaning: "Chịu trách nhiệm, có trách nhiệm giải trình",
    exampleEn: "Leaders are accountable for their team's outcomes.",
    exampleVi: "Các nhà lãnh đạo phải chịu trách nhiệm về kết quả của nhóm.",
    memoryTip: "Dám nhận trách nhiệm, không đổ lỗi cho ngoại cảnh.",
    collocation: "Hold someone accountable"
  },
  {
    id: 54, day: 3, word: "Sustainable", phonetic: "/səˈsteɪ.nə.bəl/", type: "Tính từ",
    meaning: "Bền vững, duy trì lâu dài",
    exampleEn: "We strive for sustainable long-term development.",
    exampleVi: "Chúng tôi hướng đến sự phát triển bền vững lâu dài.",
    memoryTip: "Phát triển mà không làm cạn kiệt nguồn sống tương lai.",
    collocation: "Sustainable growth"
  },
  {
    id: 55, day: 3, word: "Incentive", phonetic: "/ɪnˈsen.tɪv/", type: "Danh từ",
    meaning: "Sự khích lệ, động lực thúc đẩy",
    exampleEn: "Recognition is a strong incentive for top performance.",
    exampleVi: "Sự ghi nhận là nguồn động lực mạnh mẽ cho thành tích xuất sắc.",
    memoryTip: "Phần thưởng tạo động lực cho sự cố gắng.",
    collocation: "Financial incentive"
  },
  {
    id: 56, day: 3, word: "Optimize", phonetic: "/ˈɒp.tɪ.maɪz/", type: "Động từ",
    meaning: "Tối ưu hóa, làm cho tốt nhất",
    exampleEn: "We must optimize our daily routine for better health.",
    exampleVi: "Chúng ta cần tối ưu hóa lịch trình hằng ngày để có sức khỏe tốt hơn.",
    memoryTip: "Chỉnh sửa để đạt hiệu quả cao nhất với công sức vừa phải.",
    collocation: "Optimize efficiency"
  },
  {
    id: 57, day: 3, word: "Productivity", phonetic: "/ˌprɒd.ʌkˈtɪv.ə.ti/", type: "Danh từ",
    meaning: "Năng suất, hiệu quả tạo ra giá trị",
    exampleEn: "Taking regular breaks can increase mental productivity.",
    exampleVi: "Nghỉ ngơi đều đặn có thể nâng cao năng suất trí óc.",
    memoryTip: "Tạo ra nhiều kết quả chất lượng trong cùng một thời gian.",
    collocation: "Boost productivity"
  },
  {
    id: 58, day: 3, word: "Consolidate", phonetic: "/kənˈsɒl.ɪ.deɪt/", type: "Động từ",
    meaning: "Củng cố, gom lại cho vững chắc",
    exampleEn: "The win helped consolidate their leading position.",
    exampleVi: "Chiến thắng đã giúp củng cố vị thế dẫn đầu của họ.",
    memoryTip: "Gom các nguồn sức mạnh lại thành một khối vững chắc.",
    collocation: "Consolidate gains"
  },
  {
    id: 59, day: 3, word: "Contingency", phonetic: "/kənˈtɪn.dʒən.si/", type: "Danh từ",
    meaning: "Phương án dự phòng cho sự cố bất ngờ",
    exampleEn: "We prepared a contingency plan in case of rain.",
    exampleVi: "Chúng tôi đã chuẩn bị phương án dự phòng phòng khi trời mưa.",
    memoryTip: "Chiếc ô mang theo sẵn khi trời bất chợt đổ mưa.",
    collocation: "Contingency plan"
  },
  {
    id: 60, day: 3, word: "Expedite", phonetic: "/ˈek.spə.daɪt/", type: "Động từ",
    meaning: "Xúc tiến, đẩy nhanh tiến độ",
    exampleEn: "We hired extra staff to expedite delivery.",
    exampleVi: "Chúng tôi đã thuê thêm nhân lực để đẩy nhanh việc bàn giao.",
    memoryTip: "Tăng tốc độ để về đích sớm hơn.",
    collocation: "Expedite the process"
  },

  // ==================== NGÀY 4: TRÍ TUỆ VÀ RA QUYẾT ĐỊNH (20 TỪ) ====================
  {
    id: 61, day: 4, word: "Discerning", phonetic: "/dɪˈsɜː.nɪŋ/", type: "Tính từ",
    meaning: "Sáng suốt, có mắt nhìn tinh tế",
    exampleEn: "Discerning readers appreciate quality writing.",
    exampleVi: "Những độc giả sáng suốt luôn trân trọng các bài viết chất lượng.",
    memoryTip: "Biết phân biệt đâu là vàng thật, đâu là thau lẫn lộn.",
    collocation: "Discerning eye"
  },
  {
    id: 62, day: 4, word: "Prudent", phonetic: "/ˈpruː.dənt/", type: "Tính từ",
    meaning: "Thận trọng, khôn ngoan",
    exampleEn: "It is prudent to save resources for rainy days.",
    exampleVi: "Tiết kiệm nguồn lực cho những ngày khó khăn là rất thận trọng.",
    memoryTip: "Nhìn trước ngó sau, cẩn tắc vô ưu.",
    collocation: "Prudent decision"
  },
  {
    id: 63, day: 4, word: "Decisive", phonetic: "/dɪˈsaɪ.sɪv/", type: "Tính từ",
    meaning: "Quyết đoán, dứt khoát",
    exampleEn: "A good captain makes decisive moves in a storm.",
    exampleVi: "Thuyền trưởng giỏi đưa ra những quyết định dứt khoát giữa bão tố.",
    memoryTip: "Hành động đúng lúc, không chần chừ do dự.",
    collocation: "Decisive action"
  },
  {
    id: 64, day: 4, word: "Rational", phonetic: "/ˈræʃ.ən.əl/", type: "Tính từ",
    meaning: "Hợp lý, dựa trên lý trí",
    exampleEn: "Stay rational even when emotions run high.",
    exampleVi: "Hãy giữ lý trí ngay cả khi cảm xúc dâng cao.",
    memoryTip: "Dùng cái đầu lạnh để suy xét vấn đề rõ ràng.",
    collocation: "Rational thinking"
  },
  {
    id: 65, day: 4, word: "Cognitive", phonetic: "/ˈkɒɡ.nə.tɪv/", type: "Tính từ",
    meaning: "Thuộc về nhận thức, trí tuệ",
    exampleEn: "Puzzles help maintain strong cognitive abilities.",
    exampleVi: "Các câu đố giúp duy trì khả năng nhận thức sắc bén.",
    memoryTip: "Khả năng tư duy, ghi nhớ và xử lý thông tin của não bộ.",
    collocation: "Cognitive skills"
  },
  {
    id: 66, day: 4, word: "Intuitive", phonetic: "/ɪnˈtjuː.ɪ.tɪv/", type: "Tính từ",
    meaning: "Thuộc về trực giác, dễ hiểu trực quan",
    exampleEn: "The software has a simple and intuitive interface.",
    exampleVi: "Phần mềm có giao diện đơn giản và rất trực quan.",
    memoryTip: "Hiểu ngay trong nháy mắt không cần suy nghĩ phức tạp.",
    collocation: "Intuitive understanding"
  },
  {
    id: 67, day: 4, word: "Scrutinize", phonetic: "/ˈskruː.tɪ.naɪz/", type: "Động từ",
    meaning: "Xem xét kỹ lưỡng, soi xét cẩn thận",
    exampleEn: "Lawyers scrutinize every sentence in the document.",
    exampleVi: "Các luật sư soi xét từng câu chữ trong văn bản.",
    memoryTip: "Dùng kính lúp để kiểm tra không bỏ sót điểm nào.",
    collocation: "Scrutinize details"
  },
  {
    id: 68, day: 4, word: "Deduce", phonetic: "/dɪˈdjuːs/", type: "Động từ",
    meaning: "Suy luận, suy diễn từ dữ kiện có sẵn",
    exampleEn: "From the clues, he was able to deduce the answer.",
    exampleVi: "Từ các manh mối, anh ấy đã có thể suy luận ra câu trả lời.",
    memoryTip: "Nối các mảnh ghép manh mối lại để tìm ra sự thật.",
    collocation: "Deduce conclusions"
  },
  {
    id: 69, day: 4, word: "Hypothesis", phonetic: "/haɪˈpɒθ.ə.sɪs/", type: "Danh từ",
    meaning: "Giả thuyết khoa học cần kiểm chứng",
    exampleEn: "We tested the hypothesis with several experiments.",
    exampleVi: "Chúng tôi đã thử nghiệm giả thuyết qua nhiều thí nghiệm.",
    memoryTip: "Một phỏng đoán có cơ sở cần được kiểm chứng thực tế.",
    collocation: "Working hypothesis"
  },
  {
    id: 70, day: 4, word: "Paradox", phonetic: "/ˈpær.ə.dɒks/", type: "Danh từ",
    meaning: "Nghịch lý, điều có vẻ mâu thuẫn nhưng lại đúng",
    exampleEn: "It is a paradox that resting can make you more energetic.",
    exampleVi: "Thật là một nghịch lý khi nghỉ ngơi lại giúp bạn tràn đầy năng lượng hơn.",
    memoryTip: "Tưởng như trái ngược nhưng lại ẩn chứa chân lý.",
    collocation: "Apparent paradox"
  },
  {
    id: 71, day: 4, word: "Pragmatic", phonetic: "/præɡˈmæt.ɪk/", type: "Tính từ",
    meaning: "Thực tế, thực dụng, trọng hiệu quả thực tiễn",
    exampleEn: "We need a pragmatic solution that works right now.",
    exampleVi: "Chúng ta cần một giải pháp thực tế có thể vận hành ngay bây giờ.",
    memoryTip: "Không viển vông, tập trung vào những gì làm được.",
    collocation: "Pragmatic approach"
  },
  {
    id: 72, day: 4, word: "Equivocal", phonetic: "/ɪˈkwɪv.ə.kəl/", type: "Tính từ",
    meaning: "Nước đôi, khó phân định đúng sai",
    exampleEn: "His equivocal statement confused the reporters.",
    exampleVi: "Tuyên bố nước đôi của ông đã khiến các phóng viên bối rối.",
    memoryTip: "Nói lấp lửng để tránh khẳng định rõ ràng.",
    collocation: "Equivocal response"
  },
  {
    id: 73, day: 4, word: "Fallacy", phonetic: "/ˈfæl.ə.si/", type: "Danh từ",
    meaning: "Ngụy biện, lập luận sai lầm",
    exampleEn: "It is a common fallacy that success comes overnight.",
    exampleVi: "Quan niệm cho rằng thành công đến sau một đêm là một ngụy biện phổ biến.",
    memoryTip: "Cái sai được ngụy trang khéo léo nhưng thiếu nền tảng.",
    collocation: "Logical fallacy"
  },
  {
    id: 74, day: 4, word: "Criterion", phonetic: "/kraɪˈtɪə.ri.ən/", type: "Danh từ",
    meaning: "Tiêu chí, chuẩn mực để phán xét",
    exampleEn: "Safety is the primary criterion for this equipment.",
    exampleVi: "An toàn là tiêu chí hàng đầu đối với thiết bị này.",
    memoryTip: "Thước đo chuẩn để đưa ra đánh giá chính xác.",
    collocation: "Selection criterion"
  },
  {
    id: 75, day: 4, word: "Synthesize", phonetic: "/ˈsɪn.θə.saɪz/", type: "Động từ",
    meaning: "Tổng hợp, kết hợp các ý tưởng khác nhau",
    exampleEn: "She can synthesize complex information into simple takeaways.",
    exampleVi: "Cô ấy có thể tổng hợp thông tin phức tạp thành những điều cốt lõi dễ hiểu.",
    memoryTip: "Gộp các nguyên liệu rời rạc thành một món ăn hoàn chỉnh.",
    collocation: "Synthesize data"
  },
  {
    id: 76, day: 4, word: "Comprehension", phonetic: "/ˌkɒm.prɪˈhen.ʃən/", type: "Danh từ",
    meaning: "Khả năng thấu hiểu sâu sắc",
    exampleEn: "Reading regularly improves language comprehension.",
    exampleVi: "Đọc sách thường xuyên nâng cao khả năng lĩnh hội ngôn ngữ.",
    memoryTip: "Thu nạp và chuyển hóa tri thức vào đầu.",
    collocation: "Reading comprehension"
  },
  {
    id: 77, day: 4, word: "Deliberate", phonetic: "/dɪˈlɪb.ər.ət/", type: "Tính từ",
    meaning: "Thận trọng, có chủ đích, tính toán kỹ",
    exampleEn: "Every move was deliberate and carefully planned.",
    exampleVi: "Từng nước đi đều có chủ đích và được lên kế hoạch kỹ càng.",
    memoryTip: "Suy nghĩ chín chắn trước khi ra tay.",
    collocation: "Deliberate choice"
  },
  {
    id: 78, day: 4, word: "Premise", phonetic: "/ˈprem.ɪs/", type: "Danh từ",
    meaning: "Tiền đề, nền tảng của một lập luận",
    exampleEn: "The argument collapses if the basic premise is false.",
    exampleVi: "Lập luận sẽ sụp đổ nếu tiền đề cơ bản là sai.",
    memoryTip: "Nền móng của một ngôi nhà suy luận.",
    collocation: "Basic premise"
  },
  {
    id: 79, day: 4, word: "Unbiased", phonetic: "/ʌnˈbaɪ.əst/", type: "Tính từ",
    meaning: "Không thiên vị, khách quan",
    exampleEn: "A judge must offer an unbiased perspective.",
    exampleVi: "Một thẩm phán phải đưa ra một góc nhìn hoàn toàn khách quan.",
    memoryTip: "Cán cân công lý luôn thăng bằng, không nghiêng về bên nào.",
    collocation: "Unbiased opinion"
  },
  {
    id: 80, day: 4, word: "Perception", phonetic: "/pəˈsep.ʃən/", type: "Danh từ",
    meaning: "Sự nhận thức, góc nhìn thế giới quan",
    exampleEn: "Travel broadens your perception of the world.",
    exampleVi: "Đi du lịch mở rộng nhận thức của bạn về thế giới.",
    memoryTip: "Lăng kính bạn dùng để quan sát cuộc sống xung quanh.",
    collocation: "Public perception"
  },

  // ==================== NGÀY 5: CẢM XÚC VÀ TÂM LÝ (20 TỪ) ====================
  {
    id: 81, day: 5, word: "Serene", phonetic: "/səˈriːn/", type: "Tính từ",
    meaning: "Thanh thản, tĩnh lặng, an yên",
    exampleEn: "A serene morning in nature heals the soul.",
    exampleVi: "Một buổi sáng thanh bình giữa thiên nhiên xoa dịu tâm hồn.",
    memoryTip: "Mặt hồ phẳng lặng không chút gợn sóng.",
    collocation: "Serene atmosphere"
  },
  {
    id: 82, day: 5, word: "Grateful", phonetic: "/ˈɡreɪt.fəl/", type: "Tính từ",
    meaning: "Biết ơn, trân trọng những điều nhận được",
    exampleEn: "I am grateful for the lessons learned along the way.",
    exampleVi: "Tôi biết ơn những bài học đã nhận được trên hành trình này.",
    memoryTip: "Trái tim trân quý những điều tốt đẹp xung quanh.",
    collocation: "Deeply grateful"
  },
  {
    id: 83, day: 5, word: "Sincere", phonetic: "/sɪnˈsɪər/", type: "Tính từ",
    meaning: "Chân thành, xuất phát từ đáy lòng",
    exampleEn: "Please accept my sincere apologies.",
    exampleVi: "Xin hãy nhận lời xin lỗi chân thành từ tôi.",
    memoryTip: "Không pha tạp, tinh khiết như tấm lòng thật.",
    collocation: "Sincere thanks"
  },
  {
    id: 84, day: 5, word: "Equanimity", phonetic: "/ˌek.wəˈnɪm.ə.ti/", type: "Danh từ",
    meaning: "Sự điềm tĩnh, an nhiên trước biến cố",
    exampleEn: "He accepted both praise and criticism with equanimity.",
    exampleVi: "Anh ấy đón nhận cả lời khen lẫn sự chỉ trích bằng thái độ điềm tĩnh.",
    memoryTip: "Giữ tâm thế bình thản trước mọi thăng trầm.",
    collocation: "Maintain equanimity"
  },
  {
    id: 85, day: 5, word: "Apprehensive", phonetic: "/ˌæp.rɪˈhen.sɪv/", type: "Tính từ",
    meaning: "E ngại, lo âu về điều sắp xảy ra",
    exampleEn: "Many students feel apprehensive before big exams.",
    exampleVi: "Nhiều học sinh cảm thấy e ngại và lo lắng trước kỳ thi lớn.",
    memoryTip: "Cảm giác hồi hộp bất an khi chuẩn bị bước vào thử thách.",
    collocation: "Apprehensive about the future"
  },
  {
    id: 86, day: 5, word: "Vulnerable", phonetic: "/ˈvʌl.nər.ə.bəl/", type: "Tính từ",
    meaning: "Dễ tổn thương, nhạy cảm",
    exampleEn: "Admitting mistakes makes us feel vulnerable yet stronger.",
    exampleVi: "Thừa nhận sai lầm khiến ta cảm thấy dễ tổn thương nhưng lại mạnh mẽ hơn.",
    memoryTip: "Để hở tấm khiên bảo vệ để học cách đối diện thật lòng.",
    collocation: "Vulnerable position"
  },
  {
    id: 87, day: 5, word: "Exhilarated", phonetic: "/ɪɡˈzɪl.ə.reɪ.tɪd/", type: "Tính từ",
    meaning: "Phấn khích, tràn ngập hân hoan",
    exampleEn: "We were exhilarated after reaching the mountain peak.",
    exampleVi: "Chúng tôi ngập tràn phấn khích sau khi chạm tới đỉnh núi.",
    memoryTip: "Cảm xúc thăng hoa ngập tràn niềm vui chiến thắng.",
    collocation: "Feel exhilarated"
  },
  {
    id: 88, day: 5, word: "Complacent", phonetic: "/kəmˈpleɪ.sənt/", type: "Tính từ",
    meaning: "Tự mãn, bằng lòng quá sớm",
    exampleEn: "Do not become complacent after your first victory.",
    exampleVi: "Đừng trở nên tự mãn sau chiến thắng đầu tiên của bạn.",
    memoryTip: "Ngủ quên trên chiến thắng khiến bản thân dừng tiến bộ.",
    collocation: "Grow complacent"
  },
  {
    id: 89, day: 5, word: "Reassure", phonetic: "/ˌriː.əˈʃɔːr/", type: "Động từ",
    meaning: "Trấn an, làm yên lòng",
    exampleEn: "The doctor smiled to reassure the worried patient.",
    exampleVi: "Bác sĩ mỉm cười để trấn an người bệnh đang lo lắng.",
    memoryTip: "Trao cho người khác sự an tâm để vượt qua sợ hãi.",
    collocation: "Reassure someone"
  },
  {
    id: 90, day: 5, word: "Enthusiasm", phonetic: "/ɪnˈθjuː.zi.æz.əm/", type: "Danh từ",
    meaning: "Sự nhiệt huyết, lòng hăng say",
    exampleEn: "Her enthusiasm for learning is truly contagious.",
    exampleVi: "Lòng say mê học hỏi của cô ấy thực sự có sức lan tỏa.",
    memoryTip: "Ngọn lửa nhiệt huyết luôn bùng cháy trong tim.",
    collocation: "Great enthusiasm"
  },
  {
    id: 91, day: 5, word: "Melancholy", phonetic: "/ˈmel.əŋ.kɒl.i/", type: "Danh từ",
    meaning: "Nỗi u buồn man mác, trầm tư",
    exampleEn: "A gentle melancholy settled in the autumn air.",
    exampleVi: "Một nỗi u buồn man mác lắng đọng trong không khí mùa thu.",
    memoryTip: "Nốt trầm tư lự dịu dàng trong bản nhạc cuộc đời.",
    collocation: "Sense of melancholy"
  },
  {
    id: 92, day: 5, word: "Nostalgia", phonetic: "/nɒsˈtæl.dʒə/", type: "Danh từ",
    meaning: "Nỗi hoài niệm về quá khứ",
    exampleEn: "Old photographs bring back warm nostalgia.",
    exampleVi: "Những bức ảnh cũ khơi gợi lại nỗi hoài niệm ấm áp.",
    memoryTip: "Nhớ về những ngày tháng xưa cũ thân thương.",
    collocation: "Feel nostalgia"
  },
  {
    id: 93, day: 5, word: "Courageous", phonetic: "/kəˈreɪ.dʒəs/", type: "Tính từ",
    meaning: "Dũng cảm, can trường",
    exampleEn: "It was a courageous decision to speak up for justice.",
    exampleVi: "Đó là một quyết định dũng cảm khi dám lên tiếng vì công lý.",
    memoryTip: "Trái tim không lùi bước trước sợ hãi.",
    collocation: "Courageous act"
  },
  {
    id: 94, day: 5, word: "Resentment", phonetic: "/rɪˈzent.mənt/", type: "Danh từ",
    meaning: "Sự oán giận, hậm hực",
    exampleEn: "Holding on to resentment only harms yourself.",
    exampleVi: "Giữ mãi sự oán hờn trong lòng chỉ làm tổn hại chính bản thân bạn.",
    memoryTip: "Cục than hồng cầm trên tay định ném người khác nhưng làm bỏng chính mình.",
    collocation: "Harbor resentment"
  },
  {
    id: 95, day: 5, word: "Compassionate", phonetic: "/kəmˈpæʃ.ən.ət/", type: "Tính từ",
    meaning: "Giàu lòng nhân ái, từ bi",
    exampleEn: "A compassionate society cares for its weakest members.",
    exampleVi: "Một xã hội giàu lòng nhân ái luôn che chở những mảnh đời yếu thế.",
    memoryTip: "Trái tim biết rung động trước nỗi đau của muôn loài.",
    collocation: "Compassionate care"
  },
  {
    id: 96, day: 5, word: "Catharsis", phonetic: "/kəˈθɑː.sɪs/", type: "Danh từ",
    meaning: "Sự giải tỏa cảm xúc dồn nén",
    exampleEn: "Writing can provide a healthy emotional catharsis.",
    exampleVi: "Viết lách có thể mang lại sự giải tỏa cảm xúc rất lành mạnh.",
    memoryTip: "Mở van xả hết những áp lực chất chứa bấy lâu.",
    collocation: "Emotional catharsis"
  },
  {
    id: 97, day: 5, word: "Euphoria", phonetic: "/juːˈfɔː.ri.ə/", type: "Danh từ",
    meaning: "Cảm giác hưng phấn ngập tràn",
    exampleEn: "The crowd erupted in pure euphoria as the whistle blew.",
    exampleVi: "Đám đông vỡ òa trong niềm hưng phấn tột cùng khi tiếng còi kết thúc vang lên.",
    memoryTip: "Niềm vui bay bổng tột đỉnh khó gì sánh bằng.",
    collocation: "State of euphoria"
  },
  {
    id: 98, day: 5, word: "Solitude", phonetic: "/ˈsɒl.ɪ.tʃuːd/", type: "Danh từ",
    meaning: "Sự thanh tĩnh khi ở một mình (tích cực)",
    exampleEn: "He found inspiration during quiet moments of solitude.",
    exampleVi: "Anh tìm thấy nguồn cảm hứng trong những khoảnh khắc tĩnh tại một mình.",
    memoryTip: "Khoảng lặng để nạp lại năng lượng cho tâm hồn.",
    collocation: "Peaceful solitude"
  },
  {
    id: 99, day: 5, word: "Fortitude", phonetic: "/ˈfɔː.tɪ.tʃuːd/", type: "Danh từ",
    meaning: "Nghị lực kiên cường chịu đựng khó khăn",
    exampleEn: "She showed great fortitude throughout her recovery.",
    exampleVi: "Cô ấy đã thể hiện nghị lực phi thường trong suốt quá trình hồi phục.",
    memoryTip: "Bức tường thành vững chắc chống lại sóng gió.",
    collocation: "Mental fortitude"
  },
  {
    id: 100, day: 5, word: "Contentment", phonetic: "/kənˈtent.mənt/", type: "Danh từ",
    meaning: "Sự mãn nguyện, an phận lành mạnh",
    exampleEn: "True happiness comes from inner contentment.",
    exampleVi: "Hạnh phúc đích thực đến từ sự mãn nguyện trong tâm hồn.",
    memoryTip: "Biết đủ là đủ, an vui với hiện tại.",
    collocation: "Deep contentment"
  },

  // ==================== NGÀY 6: ĐỔI MỚI VÀ PHÁT TRIỂN (20 TỪ) ====================
  {
    id: 101, day: 6, word: "Breakthrough", phonetic: "/ˈbreɪk.θruː/", type: "Danh từ",
    meaning: "Bước đột phá mang tính cách mạng",
    exampleEn: "Scientists made a major breakthrough in green energy.",
    exampleVi: "Các nhà khoa học đã tạo ra một bước đột phá lớn trong năng lượng xanh.",
    memoryTip: "Phá vỡ bức tường cũ để bước sang kỷ nguyên mới.",
    collocation: "Major breakthrough"
  },
  {
    id: 102, day: 6, word: "Pioneer", phonetic: "/ˌpaɪəˈnɪər/", type: "Danh từ",
    meaning: "Người tiên phong, mở đường",
    exampleEn: "She was a pioneer in the field of computer science.",
    exampleVi: "Bà là người tiên phong trong lĩnh vực khoa học máy tính.",
    memoryTip: "Người đầu tiên bước vào vùng đất mới để dẫn lối cho mọi người.",
    collocation: "Pioneer in technology"
  },
  {
    id: 103, day: 6, word: "Paradigm", phonetic: "/ˈpær.ə.daɪm/", type: "Danh từ",
    meaning: "Mô hình kiểu mẫu, hệ tư duy",
    exampleEn: "Remote work created a new paradigm in employment.",
    exampleVi: "Làm việc từ xa đã tạo ra một hệ tư duy mới trong thị trường việc làm.",
    memoryTip: "Chiếc khuôn mẫu định hình cách mọi người nhìn nhận vấn đề.",
    collocation: "Paradigm shift"
  },
  {
    id: 104, day: 6, word: "Revolutionize", phonetic: "/ˌrev.əˈluː.ʃən.aɪz/", type: "Động từ",
    meaning: "Cách mạng hóa, thay đổi hoàn toàn",
    exampleEn: "Artificial intelligence will revolutionize many industries.",
    exampleVi: "Trí tuệ nhân tạo sẽ cách mạng hóa nhiều ngành công nghiệp.",
    memoryTip: "Lật sang một trang sử hoàn toàn mới cho lĩnh vực.",
    collocation: "Revolutionize an industry"
  },
  {
    id: 105, day: 6, word: "Obsolete", phonetic: "/ˈɒb.səl.iːt/", type: "Tính từ",
    meaning: "Lỗi thời, không còn sử dụng",
    exampleEn: "Floppy disks became obsolete years ago.",
    exampleVi: "Đĩa mềm đã trở nên lỗi thời từ nhiều năm trước.",
    memoryTip: "Đồ cũ bị thời gian bỏ lại phía sau.",
    collocation: "Render obsolete"
  },
  {
    id: 106, day: 6, word: "Ingenuity", phonetic: "/ˌɪn.dʒəˈnjuː.ə.ti/", type: "Danh từ",
    meaning: "Sự khéo léo, tài tình, óc sáng tạo",
    exampleEn: "With some ingenuity, they solved the tricky puzzle.",
    exampleVi: "Với một chút khéo léo và sáng tạo, họ đã giải được câu đố hóc búa.",
    memoryTip: "Bàn tay tài hoa và khối óc tinh tế tìm ra cách hay.",
    collocation: "Human ingenuity"
  },
  {
    id: 107, day: 6, word: "Propel", phonetic: "/prəˈpel/", type: "Động từ",
    meaning: "Đẩy mạnh, tạo đà tiến lên phía trước",
    exampleEn: "New investments will propel our project to success.",
    exampleVi: "Các khoản đầu tư mới sẽ tạo đà thúc đẩy dự án của chúng ta đến thành công.",
    memoryTip: "Cánh quạt đẩy con tàu lao nhanh về phía trước.",
    collocation: "Propel forward"
  },
  {
    id: 108, day: 6, word: "Catalyst", phonetic: "/ˈkæt.əl.ɪst/", type: "Danh từ",
    meaning: "Chất xúc tác, nhân tố thúc đẩy thay đổi",
    exampleEn: "The new mentor was a catalyst for her rapid career growth.",
    exampleVi: "Người cố vấn mới là chất xúc tác cho sự thăng tiến nhanh chóng của cô.",
    memoryTip: "Gia vị xúc tác đẩy nhanh phản ứng chuyển biến tích cực.",
    collocation: "Catalyst for change"
  },
  {
    id: 109, day: 6, word: "Cultivate", phonetic: "/ˈkʌl.tɪ.veɪt/", type: "Động từ",
    meaning: "Vun đắp, trau dồi, nuôi dưỡng",
    exampleEn: "Cultivate good habits early in your life.",
    exampleVi: "Hãy vun đắp những thói quen tốt từ sớm trong cuộc đời.",
    memoryTip: "Chăm sóc tưới tắm hạt giống mỗi ngày để đơm hoa kết trái.",
    collocation: "Cultivate habits"
  },
  {
    id: 110, day: 6, word: "Scalable", phonetic: "/ˈskeɪ.lə.bəl/", type: "Tính từ",
    meaning: "Có khả năng mở rộng quy mô dễ dàng",
    exampleEn: "We need a scalable architecture that handles more users.",
    exampleVi: "Chúng ta cần một kiến trúc có khả năng mở rộng tốt khi người dùng tăng lên.",
    memoryTip: "Khả năng nhân rộng từ nhỏ lên lớn mà không bị nghẽn.",
    collocation: "Scalable model"
  },
  {
    id: 111, day: 6, word: "Evolve", phonetic: "/ɪˈvɒlv/", type: "Động từ",
    meaning: "Tiến hóa, phát triển qua từng giai đoạn",
    exampleEn: "Languages continuously evolve over time.",
    exampleVi: "Ngôn ngữ không ngừng tiến hóa theo thời gian.",
    memoryTip: "Từng bước thích nghi để ngày một hoàn thiện hơn.",
    collocation: "Evolve into"
  },
  {
    id: 112, day: 6, word: "Proliferate", phonetic: "/prəˈlɪf.ər.eɪt/", type: "Động từ",
    meaning: "Sinh sôi nảy nở nhanh chóng, phổ biến rộng",
    exampleEn: "Online learning resources have proliferated in recent years.",
    exampleVi: "Các nguồn học trực tuyến đã nở rộ nhanh chóng trong những năm gần đây.",
    memoryTip: "Lan tỏa mạnh mẽ như nụ hoa đón nắng xuân.",
    collocation: "Proliferate rapidly"
  },
  {
    id: 113, day: 6, word: "Reinvent", phonetic: "/ˌriː.ɪnˈvent/", type: "Động từ",
    meaning: "Tái tạo lại bản thân, làm mới hoàn toàn",
    exampleEn: "She had the courage to reinvent herself at forty.",
    exampleVi: "Cô ấy có lòng can đảm để tái tạo lại bản thân ở tuổi bốn mươi.",
    memoryTip: "Lột xác để bắt đầu một phiên bản tốt đẹp hơn.",
    collocation: "Reinvent oneself"
  },
  {
    id: 114, day: 6, word: "Disruptive", phonetic: "/dɪsˈrʌp.tɪv/", type: "Tính từ",
    meaning: "Mang tính đột phá thay đổi toàn bộ thị trường",
    exampleEn: "Disruptive technology challenges traditional ways of working.",
    exampleVi: "Công nghệ đột phá thách thức những phương thức làm việc truyền thống.",
    memoryTip: "Phá bỏ cái cũ để mở ra chuẩn mực hoàn toàn mới.",
    collocation: "Disruptive innovation"
  },
  {
    id: 115, day: 6, word: "State-of-the-art", phonetic: "/ˌsteɪt.əv.ðiːˈɑːt/", type: "Tính từ",
    meaning: "Hiện đại nhất, tối tân nhất",
    exampleEn: "The hospital is equipped with state-of-the-art facilities.",
    exampleVi: "Bệnh viện được trang bị những trang thiết bị tối tân nhất.",
    memoryTip: "Đạt đỉnh cao công nghệ hiện tại.",
    collocation: "State-of-the-art technology"
  },
  {
    id: 116, day: 6, word: "Empower", phonetic: "/ɪmˈpaʊ.ər/", type: "Động từ",
    meaning: "Trao quyền, tiếp thêm sức mạnh",
    exampleEn: "Education empowers young people to change the future.",
    exampleVi: "Giáo dục tiếp thêm sức mạnh cho giới trẻ thay đổi tương lai.",
    memoryTip: "Trao đôi cánh và niềm tin để người khác tự bay xa.",
    collocation: "Empower individuals"
  },
  {
    id: 117, day: 6, word: "Synergy", phonetic: "/ˈsɪn.ə.dʒi/", type: "Danh từ",
    meaning: "Sự cộng hưởng, hợp lực tạo sức mạnh tổng hợp",
    exampleEn: "The merger created strong synergy between both teams.",
    exampleVi: "Thương vụ sáp nhập đã tạo ra sự cộng hưởng mạnh mẽ giữa hai đội ngũ.",
    memoryTip: "Một cộng một lớn hơn hai khi kết hợp hài hòa.",
    collocation: "Create synergy"
  },
  {
    id: 118, day: 6, word: "Unprecedented", phonetic: "/ʌnˈpres.ɪ.den.tɪd/", type: "Tính từ",
    meaning: "Chưa từng có tiền lệ, vô tiền khoáng hậu",
    exampleEn: "The event achieved unprecedented global reach.",
    exampleVi: "Sự kiện này đã đạt được tầm ảnh hưởng toàn cầu chưa từng có tiền lệ.",
    memoryTip: "Chưa ai từng thấy hay làm được trước đây.",
    collocation: "Unprecedented success"
  },
  {
    id: 119, day: 6, word: "Flourish", phonetic: "/ˈflʌr.ɪʃ/", type: "Động từ",
    meaning: "Hưng thịnh, phát triển rực rỡ",
    exampleEn: "Creative ideas flourish in a supportive environment.",
    exampleVi: "Những ý tưởng sáng tạo nở rộ rực rỡ trong một môi trường cởi mở.",
    memoryTip: "Hoa nở rộ khoe sắc trong mùa xuân tươi đẹp.",
    collocation: "Flourish and prosper"
  },
  {
    id: 120, day: 6, word: "Thrive", phonetic: "/θraɪv/", type: "Động từ",
    meaning: "Phát triển mạnh mẽ, vươn lên thịnh vượng",
    exampleEn: "Children thrive when given love and encouragement.",
    exampleVi: "Trẻ em phát triển mạnh mẽ khi được trao yêu thương và khích lệ.",
    memoryTip: "Cây non vươn cành đón nắng ấm bừng sáng.",
    collocation: "Thrive under pressure"
  },

  // ==================== NGÀY 7: XÃ HỘI VÀ MỐI QUAN HỆ (20 TỪ) ====================
  {
    id: 121, day: 7, word: "Altruistic", phonetic: "/ˌæl.truˈɪs.tɪk/", type: "Tính từ",
    meaning: "Vị tha, hy sinh vì người khác",
    exampleEn: "Volunteers show truly altruistic dedication.",
    exampleVi: "Các tình nguyện viên thể hiện sự cống hiến hết sức vị tha.",
    memoryTip: "Vì người khác trước khi nghĩ đến bản thân mình.",
    collocation: "Altruistic behavior"
  },
  {
    id: 122, day: 7, word: "Solidarity", phonetic: "/ˌsɒl.ɪˈdær.ə.ti/", type: "Danh từ",
    meaning: "Tinh thần đoàn kết, gắn bó keo sơn",
    exampleEn: "Community solidarity helped everyone through the crisis.",
    exampleVi: "Tinh thần đoàn kết cộng đồng đã giúp mọi người vượt qua khủng hoảng.",
    memoryTip: "Các ngón tay nắm chặt lại thành một nắm đấm sức mạnh.",
    collocation: "Show solidarity"
  },
  {
    id: 123, day: 7, word: "Reciprocal", phonetic: "/rɪˈsɪp.rə.kəl/", type: "Tính từ",
    meaning: "Có qua có lại, tương hỗ lẫn nhau",
    exampleEn: "Friendship is built on reciprocal trust and respect.",
    exampleVi: "Tình bạn được xây dựng trên sự tin tưởng và tôn trọng lẫn nhau.",
    memoryTip: "Bánh ít đi thì bánh quy lại, chân tình đáp lại chân tình.",
    collocation: "Reciprocal relationship"
  },
  {
    id: 124, day: 7, word: "Cohesion", phonetic: "/kəʊˈhiː.ʒən/", type: "Danh từ",
    meaning: "Sự gắn kết, cố kết nội bộ",
    exampleEn: "Team cohesion improves overall workplace morale.",
    exampleVi: "Sự gắn kết giữa các thành viên nâng cao tinh thần làm việc chung.",
    memoryTip: "Chất keo dính kết nối mọi người thành một khối vững chắc.",
    collocation: "Social cohesion"
  },
  {
    id: 125, day: 7, word: "Harmonious", phonetic: "/hɑːˈməʊ.ni.əs/", type: "Tính từ",
    meaning: "Hài hòa, êm ấm, thuận hòa",
    exampleEn: "They lived in a peaceful and harmonious neighborhood.",
    exampleVi: "Họ sống trong một khu phố thanh bình và hòa thuận.",
    memoryTip: "Bản giao hưởng phối khí nhịp nhàng không một nốt lệch.",
    collocation: "Harmonious relationship"
  },
  {
    id: 126, day: 7, word: "Philanthropy", phonetic: "/fɪˈlæn.θrə.pi/", type: "Danh từ",
    meaning: "Hoạt động từ thiện, lòng bác ái",
    exampleEn: "His philanthropy funded several community libraries.",
    exampleVi: "Hoạt động từ thiện của ông đã tài trợ cho nhiều thư viện cộng đồng.",
    memoryTip: "Tình yêu thương con người chuyển hóa thành việc làm thiện nguyện.",
    collocation: "Engage in philanthropy"
  },
  {
    id: 127, day: 7, word: "Hospitable", phonetic: "/hɒsˈpɪt.ə.bəl/", type: "Tính từ",
    meaning: "Hiếu khách, nồng hậu chào đón",
    exampleEn: "The villagers were warm and hospitable to strangers.",
    exampleVi: "Người dân làng rất ấm áp và hiếu khách với người lạ.",
    memoryTip: "Rộng cửa đón khách quý bằng cả tấm chân tình.",
    collocation: "Hospitable host"
  },
  {
    id: 128, day: 7, word: "Inclusivity", phonetic: "/ˌɪn.kluːˈsɪv.ə.ti/", type: "Danh từ",
    meaning: "Tính hòa nhập, không bỏ rơi ai phía sau",
    exampleEn: "Modern education promotes diversity and inclusivity.",
    exampleVi: "Giáo dục hiện đại khuyến khích sự đa dạng và hòa nhập.",
    memoryTip: "Vòng tay mở rộng đón nhận mọi người với sự tôn trọng.",
    collocation: "Promote inclusivity"
  },
  {
    id: 129, day: 7, word: "Amicable", phonetic: "/ˈæm.ɪ.kə.bəl/", type: "Tính từ",
    meaning: "Thân thiện, hòa giải êm đẹp",
    exampleEn: "Both sides reached an amicable settlement.",
    exampleVi: "Cả hai bên đã đạt được một thỏa thuận hòa giải êm đẹp.",
    memoryTip: "Giải quyết bất đồng trên tinh thần hữu hảo.",
    collocation: "Amicable agreement"
  },
  {
    id: 130, day: 7, word: "Tolerance", phonetic: "/ˈtɒl.ər.əns/", type: "Danh từ",
    meaning: "Lòng khoan dung, chấp nhận sự khác biệt",
    exampleEn: "Tolerance is essential in multicultural societies.",
    exampleVi: "Khoan dung là điều cốt yếu trong các xã hội đa văn hóa.",
    memoryTip: "Tấm lòng độ lượng chấp nhận những gam màu khác biệt.",
    collocation: "Mutual tolerance"
  },
  {
    id: 131, day: 7, word: "Benevolent", phonetic: "/bəˈnev.əl.ənt/", type: "Tính từ",
    meaning: "Nhân từ, hiền hậu, hay làm phúc",
    exampleEn: "The benevolent elder guided many troubled youths.",
    exampleVi: "Người trưởng lão nhân từ đã dẫn dắt nhiều thanh thiếu niên lầm lỡ.",
    memoryTip: "Khuôn mặt phúc hậu toát ra tình yêu thương hiền từ.",
    collocation: "Benevolent smile"
  },
  {
    id: 132, day: 7, word: "Concord", phonetic: "/ˈkɒŋ.kɔːd/", type: "Danh từ",
    meaning: "Sự hòa thuận, đồng lòng nhất trí",
    exampleEn: "Living in concord brings lasting community joy.",
    exampleVi: "Sống trong sự hòa thuận mang lại niềm vui lâu dài cho cộng đồng.",
    memoryTip: "Trái tim cùng chung một nhịp đập hòa hợp.",
    collocation: "Living in concord"
  },
  {
    id: 133, day: 7, word: "Reconciliation", phonetic: "/ˌrek.ənˌsɪl.iˈeɪ.ʃən/", type: "Danh từ",
    meaning: "Sự hòa giải, hàn gắn mối quan hệ",
    exampleEn: "Dialogue is the first step toward genuine reconciliation.",
    exampleVi: "Đối thoại là bước đầu tiên hướng tới sự hòa giải chân thành.",
    memoryTip: "Nối lại nhịp cầu đã gãy để cùng bước tiếp.",
    collocation: "Path to reconciliation"
  },
  {
    id: 134, day: 7, word: "Kinship", phonetic: "/ˈkɪn.ʃɪp/", type: "Danh từ",
    meaning: "Tình máu mủ, cảm giác gần gũi thân thuộc",
    exampleEn: "She felt an instant kinship with her study partner.",
    exampleVi: "Cô cảm thấy một sự gắn bó gần gũi tức thì với bạn cùng học.",
    memoryTip: "Gặp gỡ mà ngỡ như người một nhà từ kiếp nào.",
    collocation: "Sense of kinship"
  },
  {
    id: 135, day: 7, word: "Commendable", phonetic: "/kəˈmen.də.bəl/", type: "Tính từ",
    meaning: "Đáng khen ngợi, biểu dương",
    exampleEn: "His honesty in returning the lost wallet was commendable.",
    exampleVi: "Sự thật thà của anh ấy khi trả lại ví tiền đánh rơi rất đáng khen ngợi.",
    memoryTip: "Hành động đẹp xứng đáng nhận lời tuyên dương.",
    collocation: "Commendable effort"
  },
  {
    id: 136, day: 7, word: "Reciprocate", phonetic: "/rɪˈsɪp.rə.keɪt/", type: "Động từ",
    meaning: "Đền đáp, đáp lại thiện chí",
    exampleEn: "I hope to reciprocate your kind hospitality one day.",
    exampleVi: "Tôi hy vọng một ngày nào đó sẽ đền đáp lòng hiếu khách của bạn.",
    memoryTip: "Nhận một giọt ân huệ đền đáp bằng dòng suối ân tình.",
    collocation: "Reciprocate kindness"
  },
  {
    id: 137, day: 7, word: "Affable", phonetic: "/ˈæf.ə.bəl/", type: "Tính từ",
    meaning: "Niềm nở, lịch thiệp, dễ gần",
    exampleEn: "The professor was charming and affable with students.",
    exampleVi: "Giáo sư rất duyên dáng và niềm nở gần gũi với sinh viên.",
    memoryTip: "Nụ cười cởi mở khiến ai gặp cũng thấy dễ chịu.",
    collocation: "Affable manner"
  },
  {
    id: 138, day: 7, word: "Magnanimous", phonetic: "/mæɡˈnæn.ɪ.məs/", type: "Tính từ",
    meaning: "Đại lượng, khoan dung, cao thượng",
    exampleEn: "He was magnanimous in victory and praised his rival.",
    exampleVi: "Anh ấy rất đại lượng khi chiến thắng và dành lời ngợi khen đối thủ.",
    memoryTip: "Tấm lòng bao la không chấp nhặt chuyện nhỏ mọn.",
    collocation: "Magnanimous gesture"
  },
  {
    id: 139, day: 7, word: "Communal", phonetic: "/ˈkɒm.jə.nəl/", type: "Tính từ",
    meaning: "Thuộc về cộng đồng, dùng chung",
    exampleEn: "They shared a communal garden in the neighborhood.",
    exampleVi: "Họ cùng chăm sóc một khu vườn chung trong khu phố.",
    memoryTip: "Của chung muôn người cùng giữ gìn vun đắp.",
    collocation: "Communal space"
  },
  {
    id: 140, day: 7, word: "Trustworthy", phonetic: "/ˈtrʌstˌwɜː.ði/", type: "Tính từ",
    meaning: "Đáng tin cậy, chuẩn mực",
    exampleEn: "She is a trustworthy friend who keeps secrets safely.",
    exampleVi: "Cô ấy là một người bạn đáng tin cậy luôn giữ kín bí mật.",
    memoryTip: "Điểm tựa tinh thần vững chắc không bao giờ phản bội.",
    collocation: "Trustworthy partner"
  },

  // ==================== NGÀY 8: NGHỊ LỰC VÀ VƯỢT KHÓ (20 TỪ) ====================
  {
    id: 141, day: 8, word: "Adversity", phonetic: "/ədˈvɜː.sə.ti/", type: "Danh từ",
    meaning: "Nghịch cảnh, hoàn cảnh khó khăn gian truân",
    exampleEn: "True character is revealed through adversity.",
    exampleVi: "Phẩm chất thực sự được bộc lộ qua nghịch cảnh.",
    memoryTip: "Lửa thử vàng, gian nan thử sức người.",
    collocation: "Overcome adversity"
  },
  {
    id: 142, day: 8, word: "Undaunted", phonetic: "/ʌnˈdɔːn.tɪd/", type: "Tính từ",
    meaning: "Không nao núng, không hề nản lòng",
    exampleEn: "Undaunted by failure, he started all over again.",
    exampleVi: "Không hề nản lòng trước thất bại, anh bắt đầu lại từ đầu.",
    memoryTip: "Dù trời nghiêng đất lệch vẫn giữ vững ý chí.",
    collocation: "Undaunted spirit"
  },
  {
    id: 143, day: 8, word: "Overcome", phonetic: "/ˌəʊ.vəˈkʌm/", type: "Động từ",
    meaning: "Vượt qua, chiến thắng thử thách",
    exampleEn: "She overcame severe illness through inner strength.",
    exampleVi: "Cô ấy đã chiến thắng căn bệnh hiểm nghèo bằng nội lực kiên cường.",
    memoryTip: "Bước qua chông gai để tiến về phía ánh sáng.",
    collocation: "Overcome obstacles"
  },
  {
    id: 144, day: 8, word: "Endurance", phonetic: "/ɪnˈdʒʊə.rəns/", type: "Danh từ",
    meaning: "Sức chịu đựng, sức bền bỉ dẻo dai",
    exampleEn: "Marathon runners require intense physical endurance.",
    exampleVi: "Vận động viên marathon đòi hỏi sức chịu đựng thể chất phi thường.",
    memoryTip: "Chạy đường dài từng bước vững chắc không kiệt sức.",
    collocation: "Physical endurance"
  },
  {
    id: 145, day: 8, word: "Unwavering", phonetic: "/ʌnˈweɪ.vər.ɪŋ/", type: "Tính từ",
    meaning: "Không dao động, kiên định vững vàng",
    exampleEn: "She had unwavering faith in her students' potential.",
    exampleVi: "Cô ấy có niềm tin kiên định vào tiềm năng của học trò mình.",
    memoryTip: "Ngọn hải đăng đứng sừng sững không chao đảo trước bão giông.",
    collocation: "Unwavering commitment"
  },
  {
    id: 146, day: 8, word: "Stalwart", phonetic: "/ˈstɔːl.wət/", type: "Tính từ",
    meaning: "Kiên cường, trung kiên, là chỗ dựa tin cậy",
    exampleEn: "He was a stalwart supporter of human rights.",
    exampleVi: "Ông là một người ủng hộ kiên trung của nhân quyền.",
    memoryTip: "Cây cổ thụ tỏa bóng che chở vững chãi.",
    collocation: "Stalwart defender"
  },
  {
    id: 147, day: 8, word: "Grit", phonetic: "/ɡrɪt/", type: "Danh từ",
    meaning: "Lòng bền chí, sự can trường theo đuổi mục tiêu dài hạn",
    exampleEn: "Success is less about talent and more about true grit.",
    exampleVi: "Thành công ít phụ thuộc vào tài năng mà phần lớn nhờ lòng bền chí.",
    memoryTip: "Viên sỏi thô mài giũa thành ngọc sáng qua năm tháng.",
    collocation: "Show grit"
  },
  {
    id: 148, day: 8, word: "Resolute", phonetic: "/ˈrez.ə.luːt/", type: "Tính từ",
    meaning: "Cương quyết, quả cảm không nao núng",
    exampleEn: "He remained resolute despite mounting criticism.",
    exampleVi: "Anh ấy vẫn kiên quyết dù gặp phải vô số lời chỉ trích.",
    memoryTip: "Một khi đã hạ quyết tâm thì tiến thẳng phía trước.",
    collocation: "Resolute decision"
  },
  {
    id: 149, day: 8, word: "Indomitable", phonetic: "/ɪnˈdɒm.ɪ.tə.bəl/", type: "Tính từ",
    meaning: "Bất khuất, không thể bị khuất phục",
    exampleEn: "An indomitable will helps people survive severe crises.",
    exampleVi: "Ý chí bất khuất giúp con người sống sót qua những cơn khủng hoảng khốc liệt.",
    memoryTip: "Dù bị dập vùi vẫn ngẩng cao đầu kiêu hãnh.",
    collocation: "Indomitable will"
  },
  {
    id: 150, day: 8, word: "Triumph", phonetic: "/ˈtraɪ.əmf/", type: "Danh từ",
    meaning: "Chiến thắng vẻ vang sau muôn vàn gian nan",
    exampleEn: "The championship was a triumph of team teamwork.",
    exampleVi: "Chức vô địch là khúc khải hoàn của tinh thần đồng đội.",
    memoryTip: "Khúc ca khải hoàn sau chuỗi ngày khổ luyện.",
    collocation: "Triumph over adversity"
  },
  {
    id: 151, day: 8, word: "Steadfast", phonetic: "/ˈsted.fɑːst/", type: "Tính từ",
    meaning: "Kiên định trước sau như một, vững như bàn thạch",
    exampleEn: "Her steadfast loyalty earned lifelong respect.",
    exampleVi: "Lòng trung thành kiên định của cô đã giành được sự kính trọng suốt đời.",
    memoryTip: "Chân cắm sâu vào đất đá, không gió nào lay chuyển.",
    collocation: "Steadfast loyalty"
  },
  {
    id: 152, day: 8, word: "Prevail", phonetic: "/prɪˈveɪl/", type: "Động từ",
    meaning: "Chiến thắng sau cùng, chiếm ưu thế",
    exampleEn: "Justice and truth will ultimately prevail.",
    exampleVi: "Công lý và sự thật cuối cùng sẽ chiến thắng.",
    memoryTip: "Bóng tối lùi dần nhường chỗ cho ánh bình minh chiếu sáng.",
    collocation: "Prevail in the end"
  },
  {
    id: 153, day: 8, word: "Rebound", phonetic: "/rɪˈbaʊnd/", type: "Động từ",
    meaning: "Vực dậy, hồi phục sau khi vấp ngã",
    exampleEn: "The local economy rebounded faster than expected.",
    exampleVi: "Nền kinh tế địa phương đã vực dậy nhanh hơn dự kiến.",
    memoryTip: "Quả bóng nảy bật lên cao hơn sau khi chạm đất.",
    collocation: "Rebound strongly"
  },
  {
    id: 154, day: 8, word: "Unyielding", phonetic: "/ʌnˈjiːl.dɪŋ/", type: "Tính từ",
    meaning: "Bất khuất, không nhân nhượng, sắt đá",
    exampleEn: "He met the challenge with unyielding determination.",
    exampleVi: "Anh đối diện với thử thách bằng sự quyết tâm sắt đá.",
    memoryTip: "Thép đã tôi không sợ lửa đỏ thử thách.",
    collocation: "Unyielding courage"
  },
  {
    id: 155, day: 8, word: "Withstand", phonetic: "/wɪðˈstænd/", type: "Động từ",
    meaning: "Chịu đựng được, chống chọi bền bỉ",
    exampleEn: "The bridge was designed to withstand earthquakes.",
    exampleVi: "Cây cầu được thiết kế để chống chọi được các trận động đất.",
    memoryTip: "Cột trụ vững vàng đỡ lấy sức nặng ngàn cân.",
    collocation: "Withstand pressure"
  },
  {
    id: 156, day: 8, word: "Tolerate", phonetic: "/ˈtɒl.ər.eɪt/", type: "Động từ",
    meaning: "Chịu đựng, bao dung trước khó khăn",
    exampleEn: "Athletes learn to tolerate intense physical pain.",
    exampleVi: "Vận động viên học cách chịu đựng cơn đau thể xác dữ dội.",
    memoryTip: "Giữ tinh thần điềm tĩnh vượt qua ngưỡng thử thách.",
    collocation: "Tolerate discomfort"
  },
  {
    id: 157, day: 8, word: "Perseverance", phonetic: "/ˌpɜː.sɪˈvɪə.rəns/", type: "Danh từ",
    meaning: "Sự bền lòng, tính kiên nhẫn vượt khó",
    exampleEn: "Through perseverance, she finished writing her first book.",
    exampleVi: "Nhờ lòng kiên trì bền bỉ, cô đã hoàn thành cuốn sách đầu tay.",
    memoryTip: "Nước chảy đá mòn từng ngày một.",
    collocation: "Great perseverance"
  },
  {
    id: 158, day: 8, word: "Strive", phonetic: "/straɪv/", type: "Động từ",
    meaning: "Cố gắng hết mình, nỗ lực vươn lên",
    exampleEn: "Always strive to become a better version of yourself.",
    exampleVi: "Hãy luôn nỗ lực hết mình để trở thành phiên bản tốt hơn của chính bạn.",
    memoryTip: "Vươn cao tay hái những vì sao ước mơ.",
    collocation: "Strive for excellence"
  },
  {
    id: 159, day: 8, word: "Defiance", phonetic: "/dɪˈfaɪ.əns/", type: "Danh từ",
    meaning: "Sự thách thức, bất chấp hiểm nguy",
    exampleEn: "In defiance of all odds, they reached the finish line.",
    exampleVi: "Bất chấp mọi nghịch cảnh, họ đã cán đích thành công.",
    memoryTip: "Dám thách thức số phận để tự định đoạt đường đời.",
    collocation: "In defiance of"
  },
  {
    id: 160, day: 8, word: "Resurgence", phonetic: "/rɪˈsɜː.dʒəns/", type: "Danh từ",
    meaning: "Sự trỗi dậy, hồi sinh mạnh mẽ",
    exampleEn: "There is a resurgence of interest in classical music.",
    exampleVi: "Đang có sự hồi sinh mạnh mẽ niềm quan tâm dành cho âm nhạc cổ điển.",
    memoryTip: "Mầm xanh bật dậy sau mùa đông giá rét.",
    collocation: "Dramatic resurgence"
  },

  // ==================== NGÀY 9: LỐI SỐNG VÀ THỰC TẠI (20 TỪ) ====================
  {
    id: 161, day: 9, word: "Mindful", phonetic: "/ˈmaɪnd.fəl/", type: "Tính từ",
    meaning: "Chánh niệm, tỉnh thức, chú tâm vào hiện tại",
    exampleEn: "Be mindful of your breath to calm a racing mind.",
    exampleVi: "Hãy chú tâm vào hơi thở để lắng dịu tâm trí đang xáo động.",
    memoryTip: "Sống trọn vẹn trong khoảnh khắc bây giờ và ở đây.",
    collocation: "Mindful living"
  },
  {
    id: 162, day: 9, word: "Wholesome", phonetic: "/ˈhəʊl.səm/", type: "Tính từ",
    meaning: "Lành mạnh, bổ ích cho cả thể chất lẫn tinh thần",
    exampleEn: "Enjoying wholesome food keeps your energy steady.",
    exampleVi: "Thưởng thức thực phẩm lành mạnh giúp năng lượng của bạn luôn ổn định.",
    memoryTip: "Món ăn thanh sạch nuôi dưỡng cơ thể khỏe khoắn.",
    collocation: "Wholesome lifestyle"
  },
  {
    id: 163, day: 9, word: "Tranquil", phonetic: "/ˈtræŋ.kwɪl/", type: "Tính từ",
    meaning: "Yên ả, thanh bình, không chút ồn ã",
    exampleEn: "The tranquil village rests beside clear mountain streams.",
    exampleVi: "Ngôi làng yên ả nằm nép mình bên dòng suối núi trong vắt.",
    memoryTip: "Mặt nước êm đềm không gợn sóng gió.",
    collocation: "Tranquil setting"
  },
  {
    id: 164, day: 9, word: "Moderate", phonetic: "/ˈmɒd.ər.ət/", type: "Tính từ",
    meaning: "Điều độ, vừa phải, chừng mực",
    exampleEn: "Moderate exercise every morning keeps you vibrant.",
    exampleVi: "Tập luyện điều độ mỗi sáng giúp bạn luôn tràn đầy sức sống.",
    memoryTip: "Giữ đạo trung dung, không thừa cũng không thiếu.",
    collocation: "Moderate amount"
  },
  {
    id: 165, day: 9, word: "Rejuvenate", phonetic: "/rɪˈdʒuː.vən.eɪt/", type: "Động từ",
    meaning: "Trẻ hóa, hồi phục sinh lực tươi mới",
    exampleEn: "A weekend in the woods will rejuvenate your mind.",
    exampleVi: "Một kỳ nghỉ cuối tuần trong rừng sẽ phục hồi sinh lực cho tâm trí bạn.",
    memoryTip: "Tưới nước mát lành cho cành lá xanh tươi trở lại.",
    collocation: "Rejuvenate energy"
  },
  {
    id: 166, day: 9, word: "Simplicity", phonetic: "/sɪmˈplɪs.ə.ti/", type: "Danh từ",
    meaning: "Sự giản dị, mộc mạc thanh cao",
    exampleEn: "There is immense beauty in everyday simplicity.",
    exampleVi: "Có một vẻ đẹp vô ngần trong sự giản dị đời thường.",
    memoryTip: "Bỏ bớt phù phiếm để thấy rõ nét đẹp cốt lõi.",
    collocation: "Embrace simplicity"
  },
  {
    id: 167, day: 9, word: "Nourish", phonetic: "/ˈnʌr.ɪʃ/", type: "Động từ",
    meaning: "Nuôi dưỡng, chăm sóc chu đáo",
    exampleEn: "Good books nourish the intellect and soul.",
    exampleVi: "Những cuốn sách hay nuôi dưỡng trí tuệ và tâm hồn.",
    memoryTip: "Vun xới dưỡng chất cho tâm hồn ngày một đơm hoa.",
    collocation: "Nourish the mind"
  },
  {
    id: 168, day: 9, word: "Harmonize", phonetic: "/ˈhɑː.mə.naɪz/", type: "Động từ",
    meaning: "Làm cho hài hòa, hòa nhịp ăn khớp",
    exampleEn: "Try to harmonize your work commitments with family time.",
    exampleVi: "Hãy cố gắng cân bằng nghĩa vụ công việc với thời gian dành cho gia đình.",
    memoryTip: "Chỉnh dây đàn để hòa tấu giai điệu cân đối.",
    collocation: "Harmonize life"
  },
  {
    id: 169, day: 9, word: "Vibrant", phonetic: "/ˈvaɪ.brənt/", type: "Tính từ",
    meaning: "Tràn đầy sức sống, tươi tắn rực rỡ",
    exampleEn: "She has a vibrant personality that brightens any room.",
    exampleVi: "Cô ấy có tính cách tràn đầy sức sống làm bừng sáng cả căn phòng.",
    memoryTip: "Sắc màu rực rỡ và nhịp sống căng tràn nhựa xuân.",
    collocation: "Vibrant life"
  },
  {
    id: 170, day: 9, word: "Restorative", phonetic: "/rɪˈstɔː.rə.tɪv/", type: "Tính từ",
    meaning: "Có tính chất phục hồi, bồi bổ sức lực",
    exampleEn: "Deep sleep provides essential restorative benefits.",
    exampleVi: "Giấc ngủ sâu mang lại những lợi ích phục hồi thiết yếu.",
    memoryTip: "Thuốc bổ tự nhiên giúp lành lặn những mệt mỏi.",
    collocation: "Restorative sleep"
  },
  {
    id: 171, day: 9, word: "Balance", phonetic: "/ˈbæl.əns/", type: "Danh từ",
    meaning: "Sự cân bằng, thăng bằng trong cuộc sống",
    exampleEn: "Work-life balance is crucial for long-term health.",
    exampleVi: "Cân bằng giữa công việc và cuộc sống là điều tối quan trọng cho sức khỏe lâu dài.",
    memoryTip: "Cán cân thăng bằng giữa lao động và nghỉ ngơi.",
    collocation: "Maintain balance"
  },
  {
    id: 172, day: 9, word: "Frugal", phonetic: "/ˈfruː.ɡəl/", type: "Tính từ",
    meaning: "Tiết kiệm, cần kiệm, không hoang phí",
    exampleEn: "A frugal lifestyle helped him build financial freedom.",
    exampleVi: "Lối sống tiết kiệm đã giúp anh xây dựng sự tự do tài chính.",
    memoryTip: "Chi tiêu thông minh, trân trọng từng đồng tiền làm ra.",
    collocation: "Frugal habits"
  },
  {
    id: 173, day: 9, word: "Serenity", phonetic: "/səˈren.ə.ti/", type: "Danh từ",
    meaning: "Sự bình yên, thanh thản tuyệt đối",
    exampleEn: "The mountain temple offered deep spiritual serenity.",
    exampleVi: "Ngôi đền trên núi mang lại sự thanh tịnh sâu lắng cho tâm hồn.",
    memoryTip: "Khoảng không gian tĩnh lặng xóa tan mọi ưu phiền.",
    collocation: "Inner serenity"
  },
  {
    id: 174, day: 9, word: "Vitality", phonetic: "/vaɪˈtæl.ə.ti/", type: "Danh từ",
    meaning: "Sức sống dồi dào, sinh khí dạt dào",
    exampleEn: "Healthy nutrition restores your natural vitality.",
    exampleVi: "Dinh dưỡng lành mạnh phục hồi sinh khí tự nhiên của bạn.",
    memoryTip: "Dòng suối nguồn sinh lực cuộn chảy trong cơ thể.",
    collocation: "Youthful vitality"
  },
  {
    id: 175, day: 9, word: "Mindset", phonetic: "/ˈmaɪnd.set/", type: "Danh từ",
    meaning: "Tư duy, cách nhìn nhận thế giới",
    exampleEn: "A growth mindset turns obstacles into learning lessons.",
    exampleVi: "Tư duy phát triển biến trở ngại thành những bài học bổ ích.",
    memoryTip: "Chiếc kính màu bạn chọn để nhìn vào đời.",
    collocation: "Growth mindset"
  },
  {
    id: 176, day: 9, word: "Unwind", phonetic: "/ʌnˈwaɪnd/", type: "Động từ",
    meaning: "Thư giãn, xả hơi sau giờ làm việc",
    exampleEn: "Listening to soft music helps me unwind in the evening.",
    exampleVi: "Nghe nhạc nhẹ giúp tôi thư giãn xả hơi vào buổi tối.",
    memoryTip: "Tháo bỏ cuộn dây căng thẳng để lòng nhẹ nhõm.",
    collocation: "Unwind after work"
  },
  {
    id: 177, day: 9, word: "Sustainable", phonetic: "/səˈsteɪ.nə.bəl/", type: "Tính từ",
    meaning: "Bền vững, hài hòa với tự nhiên",
    exampleEn: "Choose sustainable habits that you can maintain forever.",
    exampleVi: "Hãy chọn những thói quen bền vững mà bạn có thể duy trì suốt đời.",
    memoryTip: "Không quá đà, giữ nhịp sống ổn định qua năm tháng.",
    collocation: "Sustainable routine"
  },
  {
    id: 178, day: 9, word: "Habitual", phonetic: "/həˈbɪtʃ.u.əl/", type: "Tính từ",
    meaning: "Thành thói quen thường nhật",
    exampleEn: "Daily reading became an habitual pleasure for him.",
    exampleVi: "Đọc sách mỗi ngày đã trở thành một niềm vui quen thuộc của anh.",
    memoryTip: "Lặp lại đều đặn đến mức tự nhiên như hơi thở.",
    collocation: "Habitual practice"
  },
  {
    id: 179, day: 9, word: "Enrich", phonetic: "/ɪnˈrɪtʃ/", type: "Động từ",
    meaning: "Làm giàu thêm, bồi đắp giá trị sống",
    exampleEn: "Volunteering enriches your understanding of society.",
    exampleVi: "Làm việc thiện nguyện bồi đắp thêm hiểu biết của bạn về xã hội.",
    memoryTip: "Thêm những gam màu rực rỡ vào bức tranh cuộc sống.",
    collocation: "Enrich life"
  },
  {
    id: 180, day: 9, word: "Reflective", phonetic: "/rɪˈflek.tɪv/", type: "Tính từ",
    meaning: "Trầm ngâm, suy ngẫm sâu sắc về bản thân",
    exampleEn: "Journaling allows for quiet, reflective moments.",
    exampleVi: "Viết nhật ký mang lại những khoảnh khắc tĩnh lặng để soi rọi bản thân.",
    memoryTip: "Tấm gương soi chiếu lại nội tâm mình.",
    collocation: "Reflective mood"
  },

  // ==================== NGÀY 10: TẦM NHÌN VÀ LÃNH ĐẠO (20 TỪ) ====================
  {
    id: 181, day: 10, word: "Visionary", phonetic: "/ˈvɪʒ.ən.ər.i/", type: "Tính từ",
    meaning: "Có tầm nhìn xa trông rộng",
    exampleEn: "A visionary leader anticipates future global challenges.",
    exampleVi: "Một nhà lãnh đạo có tầm nhìn luôn lường trước các thách thức toàn cầu trong tương lai.",
    memoryTip: "Đứng trên đỉnh núi cao nhìn thấy tương lai mười năm tới.",
    collocation: "Visionary leadership"
  },
  {
    id: 182, day: 10, word: "Inspire", phonetic: "/ɪnˈspaɪər/", type: "Động từ",
    meaning: "Truyền cảm hứng, thắp sáng niềm tin",
    exampleEn: "Great teachers inspire students to pursue knowledge.",
    exampleVi: "Những người thầy vĩ đại truyền cảm hứng cho học trò theo đuổi tri thức.",
    memoryTip: "Thổi làn gió sinh khí đánh thức ước mơ ngủ say.",
    collocation: "Inspire confidence"
  },
  {
    id: 183, day: 10, word: "Charismatic", phonetic: "/ˌkær.ɪzˈmæt.ɪk/", type: "Tính từ",
    meaning: "Có sức lôi cuốn, cuốn hút đặc biệt",
    exampleEn: "His charismatic personality captured the audience's hearts.",
    exampleVi: "Nhân cách lôi cuốn của ông đã chiếm trọn trái tim của khán giả.",
    memoryTip: "Thỏi nam châm thu hút mọi ánh nhìn và sự tin yêu.",
    collocation: "Charismatic speaker"
  },
  {
    id: 184, day: 10, word: "Transformative", phonetic: "/trænsˈfɔː.mə.tɪv/", type: "Tính từ",
    meaning: "Có tính chuyển đổi sâu sắc, biến đổi mạnh mẽ",
    exampleEn: "The program had a transformative impact on her career.",
    exampleVi: "Chương trình đã tạo nên một tác động thay đổi mang tính bước ngoặt đối với sự nghiệp của cô.",
    memoryTip: "Chú sâu lột xác hóa thành cánh bướm rực rỡ.",
    collocation: "Transformative experience"
  },
  {
    id: 185, day: 10, word: "Exemplary", phonetic: "/ɪɡˈzem.plər.i/", type: "Tính từ",
    meaning: "Gương mẫu, kiểu mẫu đáng noi theo",
    exampleEn: "She showed exemplary conduct during difficult times.",
    exampleVi: "Cô ấy đã thể hiện tác phong gương mẫu trong suốt những thời điểm khó khăn.",
    memoryTip: "Tấm gương sáng ngời cho mọi người học tập.",
    collocation: "Exemplary behavior"
  },
  {
    id: 186, day: 10, word: "Authoritative", phonetic: "/ɔːˈθɒr.ɪ.tə.tɪv/", type: "Tính từ",
    meaning: "Có uy tín chuyên môn, đáng tin cậy",
    exampleEn: "This is the most authoritative guide on the subject.",
    exampleVi: "Đây là cẩm nang có uy tín và chuẩn xác nhất về đề tài này.",
    memoryTip: "Tiếng nói của chuyên gia đầu ngành đáng tin cậy.",
    collocation: "Authoritative source"
  },
  {
    id: 187, day: 10, word: "Decisiveness", phonetic: "/dɪˈsaɪ.sɪv.nəs/", type: "Danh từ",
    meaning: "Tính dứt khoát, sự quyết đoán",
    exampleEn: "Decisiveness in leadership inspires team trust.",
    exampleVi: "Sự quyết đoán của người lãnh đạo tạo dựng niềm tin cho cả đội ngũ.",
    memoryTip: "Hành động dứt khoát, cắt đứt dây do dự chần chừ.",
    collocation: "Show decisiveness"
  },
  {
    id: 188, day: 10, word: "Accountability", phonetic: "/əˌkaʊn.təˈbɪl.ə.ti/", type: "Danh từ",
    meaning: "Trách nhiệm giải trình, tinh thần chịu trách nhiệm",
    exampleEn: "Personal accountability is essential for ethical leadership.",
    exampleVi: "Tinh thần trách nhiệm cá nhân là điều cốt yếu đối với một người lãnh đạo có đạo đức.",
    memoryTip: "Dám đứng mũi chịu sào, trước sau gánh vác.",
    collocation: "Ensure accountability"
  },
  {
    id: 189, day: 10, word: "Strategic", phonetic: "/strəˈtiː.dʒɪk/", type: "Tính từ",
    meaning: "Mang tính chiến lược, có tính toán lâu dài",
    exampleEn: "They formed a strategic alliance to enter foreign markets.",
    exampleVi: "Họ đã thành lập liên minh chiến lược để thâm nhập thị trường nước ngoài.",
    memoryTip: "Bàn cờ thế sự với những nước đi nhìn xa mười bước.",
    collocation: "Strategic planning"
  },
  {
    id: 190, day: 10, word: "Benchmark", phonetic: "/ˈbentʃ.mɑːk/", type: "Danh từ",
    meaning: "Cột mốc chuẩn mực để phấn đấu",
    exampleEn: "Their safety record is a benchmark for the entire industry.",
    exampleVi: "Hồ sơ an toàn của họ là cột mốc chuẩn mực cho toàn ngành.",
    memoryTip: "Thước đo cao quý để mọi người cùng hướng tới.",
    collocation: "Industry benchmark"
  },
  {
    id: 191, day: 10, word: "Motivate", phonetic: "/ˈməʊ.tɪ.veɪt/", type: "Động từ",
    meaning: "Thúc đẩy, tạo động lực phấn đấu",
    exampleEn: "Constructive praise motivates employees to do their best.",
    exampleVi: "Lời khen mang tính xây dựng thúc đẩy nhân viên cống hiến hết mình.",
    memoryTip: "Thêm dầu vào ngọn lửa khát vọng.",
    collocation: "Motivate the team"
  },
  {
    id: 192, day: 10, word: "Influential", phonetic: "/ˌɪn.fluˈen.ʃəl/", type: "Tính từ",
    meaning: "Có tầm ảnh hưởng sâu rộng",
    exampleEn: "He is one of the most influential thinkers of our era.",
    exampleVi: "Ông là một trong những nhà tư tưởng có tầm ảnh hưởng lớn nhất thời đại chúng ta.",
    memoryTip: "Lời nói và hành động tạo làn sóng lan tỏa muôn nơi.",
    collocation: "Influential figure"
  },
  {
    id: 193, day: 10, word: "Consensus", phonetic: "/kənˈsen.səs/", type: "Danh từ",
    meaning: "Sự đồng thuận, nhất trí cao trong tập thể",
    exampleEn: "The committee reached a general consensus after debate.",
    exampleVi: "Ủy ban đã đạt được sự đồng thuận chung sau cuộc tranh luận.",
    memoryTip: "Trăm người cùng chung một ý chí đồng lòng.",
    collocation: "Reach consensus"
  },
  {
    id: 194, day: 10, word: "Humility", phonetic: "/hjuːˈmɪl.ə.ti/", type: "Danh từ",
    meaning: "Đức khiêm nhường, lòng nhã nhặn",
    exampleEn: "Humility is the hallmark of truly exceptional leaders.",
    exampleVi: "Khiêm nhường là dấu ấn của những nhà lãnh đạo thực sự xuất chúng.",
    memoryTip: "Bông lúa chín luôn cúi đầu trang nhã.",
    collocation: "Lead with humility"
  },
  {
    id: 195, day: 10, word: "Delegation", phonetic: "/ˌdel.ɪˈɡeɪ.ʃən/", type: "Danh từ",
    meaning: "Nghệ thuật trao quyền, giao việc",
    exampleEn: "Skillful delegation allows managers to focus on vision.",
    exampleVi: "Kỹ năng trao quyền khéo léo giúp nhà quản lý tập trung vào tầm nhìn dài hạn.",
    memoryTip: "Chia sẻ việc đúng người đúng việc để cùng thành công.",
    collocation: "Effective delegation"
  },
  {
    id: 196, day: 10, word: "Foresee", phonetic: "/fɔːˈsiː/", type: "Động từ",
    meaning: "Thấy trước, đoán trước diễn biến",
    exampleEn: "It is hard to foresee every market fluctuation.",
    exampleVi: "Thật khó để lường trước mọi biến động của thị trường.",
    memoryTip: "Kính viễn vọng nhìn trước những biến chuyển chân trời.",
    collocation: "Foresee risks"
  },
  {
    id: 197, day: 10, word: "Stewardship", phonetic: "/ˈstjuː.əd.ʃɪp/", type: "Danh từ",
    meaning: "Tinh thần phụng sự, quản lý và gìn giữ cẩn trọng",
    exampleEn: "Responsible stewardship ensures forests thrive for generations.",
    exampleVi: "Sự gìn giữ có trách nhiệm đảm bảo những cánh rừng phát triển cho nhiều thế hệ mai sau.",
    memoryTip: "Người gác đền tận tâm coi sóc gia sản quý báu.",
    collocation: "Environmental stewardship"
  },
  {
    id: 198, day: 10, word: "Mobilize", phonetic: "/ˈməʊ.bɪ.laɪz/", type: "Động từ",
    meaning: "Huy động, tập hợp lực lượng",
    exampleEn: "The organization mobilized thousands of local volunteers.",
    exampleVi: "Tổ chức đã huy động hàng ngàn tình nguyện viên địa phương.",
    memoryTip: "Kêu gọi sức mạnh của tập thể vào cùng một hướng.",
    collocation: "Mobilize resources"
  },
  {
    id: 199, day: 10, word: "Unify", phonetic: "/ˈjuː.nɪ.faɪ/", type: "Động từ",
    meaning: "Hợp nhất, thống nhất muôn người",
    exampleEn: "Music has the rare power to unify different cultures.",
    exampleVi: "Âm nhạc sở hữu sức mạnh hiếm có để kết nối và hợp nhất các nền văn hóa khác nhau.",
    memoryTip: "Kết muôn dòng sông nhỏ đổ vào cùng một biển lớn.",
    collocation: "Unify people"
  },
  {
    id: 200, day: 10, word: "Legacy", phonetic: "/ˈleɡ.ə.si/", type: "Danh từ",
    meaning: "Di sản tốt đẹp để lại cho đời sau",
    exampleEn: "His legacy lives on through the schools he built.",
    exampleVi: "Di sản của ông vẫn trường tồn qua những ngôi trường mà ông đã xây dựng.",
    memoryTip: "Cây to bóng mát cho thế hệ mai sau tựa bóng.",
    collocation: "Leave a legacy"
  },

  // ==================== NGÀY 11: TRI THỨC VÀ HỌC TẬP SUỐT ĐỜI (20 TỪ) ====================
  {
    id: 201, day: 11, word: "Erudite", phonetic: "/ˈer.ʊ.daɪt/", type: "Tính từ",
    meaning: "Uyên bác, học rộng tài cao",
    exampleEn: "The erudite scholar shared profound cultural insights.",
    exampleVi: "Học giả uyên bác đã chia sẻ những góc nhìn văn hóa sâu sắc.",
    memoryTip: "Bồ tri thức thâm sâu tích lũy qua hàng vạn trang sách.",
    collocation: "Erudite scholar"
  },
  {
    id: 202, day: 11, word: "Inquisitive", phonetic: "/ɪnˈkwɪz.ə.tɪv/", type: "Tính từ",
    meaning: "Ham học hỏi, hay tò mò tìm hiểu",
    exampleEn: "Inquisitive minds naturally ask deeper questions.",
    exampleVi: "Những tâm trí ham học hỏi luôn tự nhiên đặt ra những câu hỏi sâu sắc hơn.",
    memoryTip: "Đôi mắt sáng luôn háo hức khám phá bí mật thế giới.",
    collocation: "Inquisitive mind"
  },
  {
    id: 203, day: 11, word: "Assimilate", phonetic: "/əˈsɪm.ɪ.leɪt/", type: "Động từ",
    meaning: "Đồng hóa, tiếp thu và chuyển hóa kiến thức",
    exampleEn: "Take time to assimilate new concepts thoroughly.",
    exampleVi: "Hãy dành thời gian để tiếp thu và tiêu hóa trọn vẹn những khái niệm mới.",
    memoryTip: "Tiêu hóa kiến thức biến nó thành nội lực của chính mình.",
    collocation: "Assimilate knowledge"
  },
  {
    id: 204, day: 11, word: "Discernment", phonetic: "/dɪˈsɜːn.mənt/", type: "Danh từ",
    meaning: "Khả năng phân định sáng suốt",
    exampleEn: "Reading with discernment protects you from misinformation.",
    exampleVi: "Đọc sách với sự sáng suốt giúp bảo vệ bạn khỏi những thông tin sai lệch.",
    memoryTip: "Màng lọc thông minh gạn đục khơi trong.",
    collocation: "Show discernment"
  },
  {
    id: 205, day: 11, word: "Enlightening", phonetic: "/ɪnˈlaɪ.tən.ɪŋ/", type: "Tính từ",
    meaning: "Mang tính khai sáng, mở mang tầm mắt",
    exampleEn: "Visiting the ancient library was an enlightening experience.",
    exampleVi: "Đến thăm thư viện cổ kính là một trải nghiệm mang tính khai sáng.",
    memoryTip: "Ngọn nến thắp sáng căn phòng tối tăm của sự thiếu hiểu biết.",
    collocation: "Enlightening discussion"
  },
  {
    id: 206, day: 11, word: "Retention", phonetic: "/rɪˈten.ʃən/", type: "Danh từ",
    meaning: "Khả năng ghi nhớ, lưu giữ kiến thức",
    exampleEn: "Spaced repetition drastically improves memory retention.",
    exampleVi: "Phương pháp lặp lại ngắt quãng cải thiện đáng kể khả năng ghi nhớ kiến thức.",
    memoryTip: "Cái túi chắc chắn giữ chặt những hạt ngọc tri thức.",
    collocation: "Memory retention"
  },
  {
    id: 207, day: 11, word: "Pedagogy", phonetic: "/ˈped.ə.ɡɒdʒ.i/", type: "Danh từ",
    meaning: "Phương pháp giảng dạy, sư phạm",
    exampleEn: "Innovative pedagogy engages students in active learning.",
    exampleVi: "Phương pháp sư phạm sáng tạo thu hút học sinh vào việc chủ động học tập.",
    memoryTip: "Nghệ thuật truyền lửa tri thức từ thầy đến trò.",
    collocation: "Modern pedagogy"
  },
  {
    id: 208, day: 11, word: "Cognition", phonetic: "/kɒɡˈnɪʃ.ən/", type: "Danh từ",
    meaning: "Quá trình nhận thức và hiểu biết",
    exampleEn: "Physical exercise benefits brain health and cognition.",
    exampleVi: "Tập luyện thể chất mang lại lợi ích cho não bộ và quá trình nhận thức.",
    memoryTip: "Bộ máy xử lý thông tin tinh vi trong trí não.",
    collocation: "Human cognition"
  },
  {
    id: 209, day: 11, word: "Internalize", phonetic: "/ɪnˈtɜː.nəl.aɪz/", type: "Động từ",
    meaning: "Khắc sâu, biến thành bản năng nội tâm",
    exampleEn: "He internalized the principles of martial arts.",
    exampleVi: "Anh ấy đã khắc sâu những đạo lý của võ thuật vào tâm can.",
    memoryTip: "Hòa quyện kiến thức vào máu thịt và hơi thở.",
    collocation: "Internalize values"
  },
  {
    id: 210, day: 11, word: "Illuminating", phonetic: "/ɪˈluː.mɪ.neɪ.tɪŋ/", type: "Tính từ",
    meaning: "Làm sáng tỏ, khai trí",
    exampleEn: "Her lecture provided an illuminating view on history.",
    exampleVi: "Bài giảng của cô đã mang đến một góc nhìn soi sáng lịch sử.",
    memoryTip: "Ánh bình minh xua tan màn sương mù mờ ảo.",
    collocation: "Illuminating example"
  },
  {
    id: 211, day: 11, word: "Competence", phonetic: "/ˈkɒm.pɪ.təns/", type: "Danh từ",
    meaning: "Năng lực, trình độ chuyên môn vững",
    exampleEn: "Language competence opens doors to global opportunities.",
    exampleVi: "Năng lực ngôn ngữ vững vàng mở ra cánh cửa dẫn đến các cơ hội toàn cầu.",
    memoryTip: "Chiếc chìa khóa vạn năng chế tạo bằng kỹ năng thật sự.",
    collocation: "Demonstrate competence"
  },
  {
    id: 212, day: 11, word: "Acuity", phonetic: "/əˈkjuː.ə.ti/", type: "Danh từ",
    meaning: "Sự nhạy bén, sắc sảo của trí tuệ",
    exampleEn: "Crossword puzzles maintain sharp mental acuity.",
    exampleVi: "Giải ô chữ giúp duy trì sự sắc sảo nhạy bén của trí óc.",
    memoryTip: "Lưỡi kiếm tư duy luôn được mài sắc ngọt ngào.",
    collocation: "Mental acuity"
  },
  {
    id: 213, day: 11, word: "Distill", phonetic: "/dɪˈstɪl/", type: "Động từ",
    meaning: "Chắt lọc, tinh chế những tinh hoa",
    exampleEn: "The author distilled decades of research into a short book.",
    exampleVi: "Tác giả đã chắt lọc nhiều thập kỷ nghiên cứu vào một cuốn sách ngắn.",
    memoryTip: "Chưng cất giọt tinh dầu thơm quý giá từ ngàn cánh hoa.",
    collocation: "Distill the essence"
  },
  {
    id: 214, day: 11, word: "Fluency", phonetic: "/ˈfluː.ən.si/", type: "Danh từ",
    meaning: "Sự lưu loát, trôi chảy tự nhiên",
    exampleEn: "Consistent speaking practice builds spoken fluency.",
    exampleVi: "Luyện nói đều đặn tạo nên sự lưu loát trôi chảy khi giao tiếp.",
    memoryTip: "Dòng nước suối chảy tự nhiên không vấp phải chướng ngại.",
    collocation: "Language fluency"
  },
  {
    id: 215, day: 11, word: "Inspiration", phonetic: "/ˌɪn.spɪˈreɪ.ʃən/", type: "Danh từ",
    meaning: "Nguồn cảm hứng sáng tạo",
    exampleEn: "Nature is an endless source of artistic inspiration.",
    exampleVi: "Thiên nhiên là nguồn cảm hứng nghệ thuật bất tận.",
    memoryTip: "Tia chớp lóe sáng thắp bùng ý tưởng tuyệt vời.",
    collocation: "Find inspiration"
  },
  {
    id: 216, day: 11, word: "Unravel", phonetic: "/ʌnˈræv.əl/", type: "Động từ",
    meaning: "Tháo gỡ, làm sáng tỏ bí ẩn phức tạp",
    exampleEn: "Scientists strive to unravel the mysteries of the brain.",
    exampleVi: "Các nhà khoa học nỗ lực làm sáng tỏ những bí ẩn của bộ não.",
    memoryTip: "Gỡ từng mối chỉ rối để sợi dây thẳng tắp.",
    collocation: "Unravel a mystery"
  },
  {
    id: 217, day: 11, word: "Wisdom", phonetic: "/ˈwɪz.dəm/", type: "Danh từ",
    meaning: "Trí tuệ, sự thông thái tích lũy qua trải nghiệm",
    exampleEn: "Wisdom is knowing what to do with the knowledge you have.",
    exampleVi: "Trí tuệ là biết phải làm gì với lượng kiến thức mà bạn đang nắm giữ.",
    memoryTip: "Ngọn đèn cổ thụ soi đường đi qua giông bão cuộc đời.",
    collocation: "Words of wisdom"
  },
  {
    id: 218, day: 11, word: "Curate", phonetic: "/kjʊəˈreɪt/", type: "Động từ",
    meaning: "Chọn lọc tinh tế, giám tuyển nội dung",
    exampleEn: "She curates the best articles on productivity each week.",
    exampleVi: "Cô ấy chọn lọc những bài viết hay nhất về hiệu suất làm việc mỗi tuần.",
    memoryTip: "Chọn lọc những bông hoa đẹp nhất cắm vào chiếc bình xinh.",
    collocation: "Curate content"
  },
  {
    id: 219, day: 11, word: "Comprehend", phonetic: "/ˌkɒm.prɪˈhend/", type: "Động từ",
    meaning: "Hiểu sâu sắc bản chất vấn đề",
    exampleEn: "It takes time to fully comprehend profound ideas.",
    exampleVi: "Cần có thời gian để thấu hiểu trọn vẹn những ý niệm sâu sắc.",
    memoryTip: "Nắm trọn bản chất không chỉ nhìn lớp vỏ bên ngoài.",
    collocation: "Comprehend the scope"
  },
  {
    id: 220, day: 11, word: "Mastery", phonetic: "/ˈmɑː.stər.i/", type: "Danh từ",
    meaning: "Sự tinh thông, làm chủ trình độ bậc thầy",
    exampleEn: "Mastery of any craft demands thousands of hours of focus.",
    exampleVi: "Sự tinh thông bất kỳ nghề nào cũng đòi hỏi hàng ngàn giờ tập trung cao độ.",
    memoryTip: "Vươn tới đỉnh cao nơi kỹ năng trở thành nghệ thuật.",
    collocation: "Achieve mastery"
  },

  // ==================== NGÀY 12: THÀNH TỰU VÀ ĐỈNH CAO (20 TỪ) ====================
  {
    id: 221, day: 12, word: "Accomplish", phonetic: "/əˈkʌm.plɪʃ/", type: "Động từ",
    meaning: "Hoàn thành xuất sắc, đạt được mục tiêu",
    exampleEn: "You can accomplish great things with disciplined effort.",
    exampleVi: "Bạn có thể hoàn thành những điều vĩ đại bằng nỗ lực có kỷ luật.",
    memoryTip: "Cán đích vinh quang sau quãng đường dài nỗ lực.",
    collocation: "Accomplish a goal"
  },
  {
    id: 222, day: 12, word: "Pinnacle", phonetic: "/ˈpɪn.ə.kəl/", type: "Danh từ",
    meaning: "Đỉnh cao danh vọng, tột đỉnh thành công",
    exampleEn: "Winning the award was the pinnacle of his career.",
    exampleVi: "Giành được giải thưởng là đỉnh cao trong sự nghiệp của ông.",
    memoryTip: "Chóp nhọn cao nhất của ngọn núi hùng vĩ chạm mây xanh.",
    collocation: "Reach the pinnacle"
  },
  {
    id: 223, day: 12, word: "Distinguished", phonetic: "/dɪˈstɪŋ.ɡwɪʃt/", type: "Tính từ",
    meaning: "Xuất chúng, lỗi lạc, được kính trọng",
    exampleEn: "A distinguished guest spoke at the ceremony.",
    exampleVi: "Một vị khách quý xuất chúng đã phát biểu tại buổi lễ.",
    memoryTip: "Tỏa sáng nổi bật giữa đám đông nhờ tài năng và đức độ.",
    collocation: "Distinguished career"
  },
  {
    id: 224, day: 12, word: "Fulfill", phonetic: "/fʊlˈfɪl/", type: "Động từ",
    meaning: "Làm tròn ước nguyện, hoàn thành trọn vẹn",
    exampleEn: "He worked hard to fulfill his lifelong dream.",
    exampleVi: "Anh đã làm việc chăm chỉ để biến ước mơ cả đời thành hiện thực.",
    memoryTip: "Rót đầy chiếc bình ước vọng bằng hành động cụ thể.",
    collocation: "Fulfill a promise"
  },
  {
    id: 225, day: 12, word: "Prestigious", phonetic: "/presˈtɪdʒ.əs/", type: "Tính từ",
    meaning: "Danh giá, có thanh thế lẫy lừng",
    exampleEn: "She was accepted into a prestigious university.",
    exampleVi: "Cô ấy đã được nhận vào một trường đại học danh giá.",
    memoryTip: "Tên tuổi gắn liền với chất lượng đỉnh cao và sự ngưỡng mộ.",
    collocation: "Prestigious award"
  },
  {
    id: 226, day: 12, word: "Surpass", phonetic: "/səˈpɑːs/", type: "Động từ",
    meaning: "Vượt qua, vượt trội hơn cả kỳ vọng",
    exampleEn: "The results surpassed all our expectations.",
    exampleVi: "Kết quả đã vượt xa mọi kỳ vọng của chúng tôi.",
    memoryTip: "Vượt qua ranh giới cũ để vươn tới tầm cao mới.",
    collocation: "Surpass expectations"
  },
  {
    id: 227, day: 12, word: "Acclaim", phonetic: "/əˈkleɪm/", type: "Danh từ",
    meaning: "Sự hoan nghênh nhiệt liệt, ca ngợi nồng nhiệt",
    exampleEn: "Her debut novel received widespread critical acclaim.",
    exampleVi: "Cuốn tiểu thuyết đầu tay của cô đã nhận được sự hoan nghênh nồng nhiệt từ giới phê bình.",
    memoryTip: "Tràng pháo tay giòn giã tán thưởng tài năng đích thực.",
    collocation: "Critical acclaim"
  },
  {
    id: 228, day: 12, word: "Excellence", phonetic: "/ˈek.səl.əns/", type: "Danh từ",
    meaning: "Sự xuất sắc, phẩm chất thượng thặng",
    exampleEn: "Commit yourself to excellence in everything you do.",
    exampleVi: "Hãy cam kết hướng tới sự xuất sắc trong mọi việc bạn làm.",
    memoryTip: "Không bằng lòng với mức trung bình, luôn theo đuổi sự hoàn hảo.",
    collocation: "Pursue excellence"
  },
  {
    id: 229, day: 12, word: "Illustrious", phonetic: "/ɪˈlʌs.tri.əs/", type: "Tính từ",
    meaning: "Lừng lẫy, rạng rỡ, hiển hách",
    exampleEn: "He had an illustrious record of public service.",
    exampleVi: "Ông có một trang vàng hiển hách trong sự nghiệp phục vụ cộng đồng.",
    memoryTip: "Ánh hào quang rạng rỡ soi tỏ những chiến công.",
    collocation: "Illustrious history"
  },
  {
    id: 230, day: 12, word: "Apex", phonetic: "/ˈeɪ.peks/", type: "Danh từ",
    meaning: "Đỉnh chóp, điểm tột cùng của sự nghiệp",
    exampleEn: "At the apex of power, he remembered to serve the people.",
    exampleVi: "Ở đỉnh cao quyền lực, ông vẫn ghi nhớ sứ mệnh phụng sự nhân dân.",
    memoryTip: "Điểm cao nhất trên đỉnh kim tự tháp danh vọng.",
    collocation: "Apex of success"
  },
  {
    id: 231, day: 12, word: "Monumental", phonetic: "/ˌmɒn.jəˈmen.təl/", type: "Tính từ",
    meaning: "Vĩ đại, hoành tráng, để đời",
    exampleEn: "Completing the cross-country railway was a monumental task.",
    exampleVi: "Hoàn thành tuyến đường sắt xuyên quốc gia là một kỳ tích vĩ đại.",
    memoryTip: "Công trình sừng sững như tượng đài lưu truyền muôn đời.",
    collocation: "Monumental achievement"
  },
  {
    id: 232, day: 12, word: "Consummate", phonetic: "/ˈkɒn.sə.mət/", type: "Tính từ",
    meaning: "Điêu luyện, toàn mỹ bậc thầy",
    exampleEn: "He played the violin with consummate skill.",
    exampleVi: "Anh ấy đã chơi vĩ cầm với kỹ năng điêu luyện tuyệt trần.",
    memoryTip: "Nghệ thuật thuần thục đến mức không còn tì vết.",
    collocation: "Consummate professional"
  },
  {
    id: 233, day: 12, word: "Ascend", phonetic: "/əˈsend/", type: "Động từ",
    meaning: "Bước lên, vươn lên nấc thang cao hơn",
    exampleEn: "Step by step, she ascended the ladder of success.",
    exampleVi: "Từng bước một, cô đã vươn lên những nấc thang thành công.",
    memoryTip: "Từng bước leo lên đài vinh quang bằng chính đôi chân mình.",
    collocation: "Ascend the throne"
  },
  {
    id: 234, day: 12, word: "Renowned", phonetic: "/rɪˈnaʊnd/", type: "Tính từ",
    meaning: "Nổi tiếng trứ danh, ai cũng biết đến",
    exampleEn: "The town is renowned for its hospitable people.",
    exampleVi: "Thị trấn nổi tiếng gần xa nhờ những người dân hiếu khách.",
    memoryTip: "Tiếng thơm vang xa bốn bể mười phương.",
    collocation: "World-renowned"
  },
  {
    id: 235, day: 12, word: "Culmination", phonetic: "/ˌkʌl.mɪˈneɪ.ʃən/", type: "Danh từ",
    meaning: "Điểm kết tinh tột đỉnh của cả quá trình",
    exampleEn: "The exhibition was the culmination of years of painting.",
    exampleVi: "Triển lãm là điểm kết tinh của bao năm tháng miệt mài hội họa.",
    memoryTip: "Hạt ngọc kết tinh từ nghìn ngày thai nghén trong vỏ sò.",
    collocation: "Culmination of efforts"
  },
  {
    id: 236, day: 12, word: "Sterling", phonetic: "/ˈstɜː.lɪŋ/", type: "Tính từ",
    meaning: "Tuyệt hảo, đáng tin cậy như vàng mười",
    exampleEn: "She has a sterling reputation among her peers.",
    exampleVi: "Cô ấy có danh tiếng tuyệt hảo trong lòng đồng nghiệp.",
    memoryTip: "Bạc ròng tinh khiết không pha tạp chất.",
    collocation: "Sterling reputation"
  },
  {
    id: 237, day: 12, word: "Eminence", phonetic: "/ˈem.ɪ.nəns/", type: "Danh từ",
    meaning: "Vị thế lỗi lạc, thanh thế lẫy lừng",
    exampleEn: "He rose to eminence in the medical community.",
    exampleVi: "Ông đã vươn lên vị thế lỗi lạc trong giới y khoa.",
    memoryTip: "Đứng sừng sững trên đỉnh cao được mọi người ngưỡng vọng.",
    collocation: "Rise to eminence"
  },
  {
    id: 238, day: 12, word: "Unrivaled", phonetic: "/ʌnˈraɪ.vəld/", type: "Tính từ",
    meaning: "Không đối thủ, vô song, độc nhất vô nhị",
    exampleEn: "Their commitment to customer care is unrivaled.",
    exampleVi: "Sự tận tâm của họ dành cho khách hàng là không có đối thủ.",
    memoryTip: "Đứng một mình trên đỉnh cao không ai bì kịp.",
    collocation: "Unrivaled quality"
  },
  {
    id: 239, day: 12, word: "Enduring", phonetic: "/ɪnˈdʒʊə.rɪŋ/", type: "Tính từ",
    meaning: "Trường tồn, bền bỉ với thời gian",
    exampleEn: "Classic literature leaves an enduring mark on humanity.",
    exampleVi: "Văn học kinh điển để lại dấu ấn trường tồn cho nhân loại.",
    memoryTip: "Tượng đài đá đứng vững trước bão cát thời gian.",
    collocation: "Enduring legacy"
  },
  {
    id: 240, day: 12, word: "Zenith", phonetic: "/ˈzen.ɪθ/", type: "Danh từ",
    meaning: "Điểm cực thịnh, thời kỳ hoàng kim",
    exampleEn: "At the zenith of the empire, arts and trade flourished.",
    exampleVi: "Vào thời kỳ cực thịnh của đế chế, nghệ thuật và thương mại nở rộ rực rỡ.",
    memoryTip: "Mặt trời đứng bóng giữa đỉnh vòm trời tỏa sáng muôn nơi.",
    collocation: "At the zenith"
  }
];

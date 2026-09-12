console.log("CHÚ Ý: TÔI ĐANG CHẠY ĐÚNG FILE NÀY!");
/**
 * Danh sách 30 từ vựng tiếng Anh chọn lọc
 * Bao gồm phiên âm, từ loại, định nghĩa, ví dụ thực tế và mẹo ghi nhớ
 */
const VOCABULARY_DATA = [
  {
    id: 1,
    word: "Resilient",
    phonetic: "/rɪˈzɪl.jənt/",
    type: "Tính từ",
    meaning: "Kiên cường, có khả năng phục hồi nhanh chóng sau thử thách",
    exampleEn: "She is resilient and remains focused despite many challenges.",
    exampleVi: "Cô ấy rất kiên cường và luôn tập trung bất chấp nhiều thử thách.",
    memoryTip: "Liên tưởng chiếc lò xo bị nén chặt nhưng luôn bật dậy mạnh mẽ hơn trước.",
    collocation: "Resilient mindset (tinh thần kiên cường)"
  },
  {
    id: 2,
    word: "Persevere",
    phonetic: "/ˌpɜː.sɪˈvɪər/",
    type: "Động từ",
    meaning: "Kiên trì, bền chí theo đuổi mục tiêu dù gặp trở ngại",
    exampleEn: "If you persevere through difficulties, success will follow.",
    exampleVi: "Nếu bạn kiên trì vượt qua khó khăn, thành công sẽ mỉm cười.",
    memoryTip: "Âm tựa 'phá vỡ vất vả' - quyết tâm nỗ lực không ngừng để phá vỡ mọi rào cản.",
    collocation: "Persevere with studies (kiên trì với việc học tập)"
  },
  {
    id: 3,
    word: "Diligent",
    phonetic: "/ˈdɪl.ɪ.dʒənt/",
    type: "Tính từ",
    meaning: "Cần cù, chăm chỉ, chu đáo trong công việc",
    exampleEn: "The diligent student completed every assignment on time.",
    exampleVi: "Người học sinh chăm chỉ đã hoàn thành mọi bài tập đúng hạn.",
    memoryTip: "Liên tưởng 'đi liền việc' - phong thái làm việc nhanh chóng, tỉ mỉ và tận tâm.",
    collocation: "Diligent effort (sự nỗ lực bền bỉ)"
  },
  {
    id: 4,
    word: "Empathy",
    phonetic: "/ˈem.pə.θi/",
    type: "Danh từ",
    meaning: "Sự đồng cảm, khả năng thấu hiểu cảm xúc của người khác",
    exampleEn: "Great leaders show genuine empathy towards their team members.",
    exampleVi: "Những nhà lãnh đạo xuất sắc luôn thể hiện sự đồng cảm chân thành với cấp dưới.",
    memoryTip: "Liên tưởng 'em thấu ý' - đặt mình vào vị trí người khác để sẻ chia và cảm nhận.",
    collocation: "Feel empathy for (đồng cảm sâu sắc với ai)"
  },
  {
    id: 5,
    word: "Integrity",
    phonetic: "/ɪnˈteɡ.rə.ti/",
    type: "Danh từ",
    meaning: "Tính chính trực, thanh liêm, trước sau như một",
    exampleEn: "Trust is built on honesty and professional integrity.",
    exampleVi: "Niềm tin được xây dựng trên sự trung thực và tính chính trực nghề nghiệp.",
    memoryTip: "Gốc từ nguyên vẹn (như integer) - con người giữ gìn phẩm chất vẹn toàn, không lay chuyển.",
    collocation: "High integrity (phẩm chất chính trực cao)"
  },
  {
    id: 6,
    word: "Optimistic",
    phonetic: "/ˌɒp.tɪˈmɪs.tɪk/",
    type: "Tính từ",
    meaning: "Lạc quan, luôn hướng tới những điều tốt đẹp",
    exampleEn: "Maintaining an optimistic attitude helps you find solutions faster.",
    exampleVi: "Duy trì thái độ lạc quan giúp bạn tìm ra giải pháp nhanh hơn.",
    memoryTip: "Gốc từ 'optimum' (tốt nhất) - người luôn nhìn thấy mặt tích cực trong mọi hoàn cảnh.",
    collocation: "Optimistic outlook (góc nhìn lạc quan)"
  },
  {
    id: 7,
    word: "Meticulous",
    phonetic: "/məˈtɪk.jə.ləs/",
    type: "Tính từ",
    meaning: "Tỉ mỉ, cẩn thận, chú ý đến từng chi tiết nhỏ",
    exampleEn: "The research requires meticulous attention to detail.",
    exampleVi: "Nghiên cứu đòi hỏi sự chú ý tỉ mỉ đến từng chi tiết nhỏ.",
    memoryTip: "Liên tưởng cụm 'mê tiểu tiết' - người cẩn trọng không bỏ qua bất kỳ sơ suất nào.",
    collocation: "Meticulous preparation (sự chuẩn bị chu đáo)"
  },
  {
    id: 8,
    word: "Adaptable",
    phonetic: "/əˈdæp.tə.bəl/",
    type: "Tính từ",
    meaning: "Thích ứng linh hoạt với hoàn cảnh và môi trường mới",
    exampleEn: "Successful professionals are highly adaptable to changing environments.",
    exampleVi: "Những người thành công luôn có khả năng thích nghi cao với môi trường biến đổi.",
    memoryTip: "Liên tưởng đặc tính uốn mình của dòng nước - gặp hình thế nào cũng hòa nhập tự nhiên.",
    collocation: "Adaptable approach (cách tiếp cận linh hoạt)"
  },
  {
    id: 9,
    word: "Proactive",
    phonetic: "/prəʊˈæk.tɪv/",
    type: "Tính từ",
    meaning: "Chủ động đón đầu, tự giác hành động không đợi nhắc nhở",
    exampleEn: "Take a proactive approach to solve problems before they arise.",
    exampleVi: "Hãy chủ động tiếp cận để giải quyết vấn đề trước khi chúng phát sinh.",
    memoryTip: "Pro (đi trước) + active (hành động) - luôn sẵn sàng đi trước một bước.",
    collocation: "Proactive attitude (thái độ chủ động)"
  },
  {
    id: 10,
    word: "Authentic",
    phonetic: "/ɔːˈθen.tɪk/",
    type: "Tính từ",
    meaning: "Chân thực, đích thực, không giả tạo hay sao chép",
    exampleEn: "An authentic leader always remains true to their core values.",
    exampleVi: "Một nhà lãnh đạo chân chính luôn kiên định với các giá trị cốt lõi của mình.",
    memoryTip: "Gốc từ tác giả (author) - bản gốc nguyên vẹn do chính bản thân tạo nên, không tô vẽ.",
    collocation: "Authentic voice (tiếng nói chân thật)"
  },
  {
    id: 11,
    word: "Curiosity",
    phonetic: "/ˌkjʊə.riˈɒs.ə.ti/",
    type: "Danh từ",
    meaning: "Tính tò mò, lòng hiếu tri, khát khao khám phá tri thức",
    exampleEn: "Intellectual curiosity is the driving force behind every discovery.",
    exampleVi: "Lòng hiếu tri là động lực thúc đẩy mọi phát kiến trong cuộc sống.",
    memoryTip: "Liên tưởng ngọn đèn luôn tìm tòi soi rọi những miền tri thức mới lạ.",
    collocation: "Spark curiosity (khơi gợi niềm say mê khám phá)"
  },
  {
    id: 12,
    word: "Humble",
    phonetic: "/ˈhʌm.bəl/",
    type: "Tính từ",
    meaning: "Khiêm tốn, nhã nhặn, không tự cao tự đại",
    exampleEn: "Despite his achievements, he remained remarkably humble.",
    exampleVi: "Dù đạt nhiều thành tựu lớn, ông ấy vẫn hết sức khiêm nhường.",
    memoryTip: "Gốc từ mang nghĩa 'mặt đất' - người tài giỏi nhưng luôn giữ đôi chân vững trên mặt đất.",
    collocation: "Humble attitude (thái độ khiêm nhường)"
  },
  {
    id: 13,
    word: "Generosity",
    phonetic: "/ˌdʒen.əˈrɒs.ə.ti/",
    type: "Danh từ",
    meaning: "Sự hào phóng, rộng lượng, sẵn lòng chia sẻ",
    exampleEn: "Her generosity helped many underprivileged students continue their studies.",
    exampleVi: "Tấm lòng rộng lượng của bà đã giúp nhiều học sinh có hoàn cảnh khó khăn tiếp tục đến trường.",
    memoryTip: "Trái tim rộng mở sẵn sàng san sẻ những giá trị tốt đẹp với mọi người xung quanh.",
    collocation: "Act of generosity (nghĩa cử cao đẹp)"
  },
  {
    id: 14,
    word: "Compassion",
    phonetic: "/kəmˈpæʃ.ən/",
    type: "Danh từ",
    meaning: "Lòng trắc ẩn, tình yêu thương và sự thấu cảm",
    exampleEn: "Nurses treat every patient with warmth and deep compassion.",
    exampleVi: "Các điều dưỡng viên chăm sóc từng người bệnh bằng sự ấm áp và lòng trắc ẩn sâu sắc.",
    memoryTip: "Com (cùng) + passion (cảm xúc) - cùng cảm nhận nỗi niềm và mong muốn nâng đỡ người khác.",
    collocation: "Show compassion (thể hiện lòng trắc ẩn)"
  },
  {
    id: 15,
    word: "Patience",
    phonetic: "/ˈpeɪ.ʃəns/",
    type: "Danh từ",
    meaning: "Tính kiên nhẫn, sự nhẫn nại vượt qua thử thách",
    exampleEn: "Mastering a new language requires time and immense patience.",
    exampleVi: "Làm chủ một ngôn ngữ mới đòi hỏi thời gian và lòng kiên nhẫn to lớn.",
    memoryTip: "Tâm thế điềm tĩnh vun trồng hạt mầm mỗi ngày và kiên nhẫn chờ quả ngọt.",
    collocation: "Exercise patience (thực hành tính kiên nhẫn)"
  },
  {
    id: 16,
    word: "Discipline",
    phonetic: "/ˈdɪs.ə.plɪn/",
    type: "Danh từ",
    meaning: "Tính kỷ luật, sự tự giác rèn luyện theo quy củ",
    exampleEn: "Daily discipline turns long-term dreams into reality.",
    exampleVi: "Kỷ luật hằng ngày biến ước mơ dài hạn thành hiện thực.",
    memoryTip: "Thói quen duy trì hành động đúng đắn ngay cả khi cảm xúc nhất thời muốn dừng lại.",
    collocation: "Self discipline (kỷ luật tự giác)"
  },
  {
    id: 17,
    word: "Innovative",
    phonetic: "/ˈɪn.ə.və.tɪv/",
    type: "Tính từ",
    meaning: "Đổi mới, mang tính sáng tạo và đột phá",
    exampleEn: "The company developed an innovative solution to reduce waste.",
    exampleVi: "Công ty đã phát triển một giải pháp sáng tạo để giảm thiểu rác thải.",
    memoryTip: "In + nova (ngôi sao mới) - đưa những ý tưởng tươi mới chiếu rọi vào thực tế.",
    collocation: "Innovative thinking (tư duy đột phá)"
  },
  {
    id: 18,
    word: "Articulate",
    phonetic: "/ɑːˈtɪk.jə.lət/",
    type: "Tính từ",
    meaning: "Diễn đạt lưu loát, mạch lạc, khúc chiết",
    exampleEn: "She is an articulate speaker who expresses complex ideas with ease.",
    exampleVi: "Cô ấy là một người diễn thuyết lưu loát, trình bày những ý niệm phức tạp rất rõ ràng.",
    memoryTip: "Lời nói được liên kết chặt chẽ từng khớp ý, giúp người nghe dễ dàng lĩnh hội.",
    collocation: "Articulate speaker (người diễn đạt lưu loát)"
  },
  {
    id: 19,
    word: "Insightful",
    phonetic: "/ˈɪn.saɪt.fəl/",
    type: "Tính từ",
    meaning: "Sâu sắc, có tầm nhìn thấu suốt bản chất sự việc",
    exampleEn: "The professor gave an insightful analysis of current economic trends.",
    exampleVi: "Giáo sư đã đưa ra một phân tích sâu sắc về xu hướng kinh tế hiện nay.",
    memoryTip: "In (bên trong) + sight (tầm nhìn) - khả năng nhìn thấu vào chiều sâu cốt lõi.",
    collocation: "Insightful observation (nhận định sâu sắc)"
  },
  {
    id: 20,
    word: "Coherent",
    phonetic: "/kəʊˈhɪə.rənt/",
    type: "Tính từ",
    meaning: "Mạch lạc, có tính liên kết chặt chẽ",
    exampleEn: "Present your arguments in a clear and coherent manner.",
    exampleVi: "Hãy trình bày các luận điểm của bạn một cách rõ ràng và mạch lạc.",
    memoryTip: "Các mắt xích lập luận gắn kết tự nhiên tạo thành một thể thống nhất vững vàng.",
    collocation: "Coherent argument (lập luận chặt chẽ)"
  },
  {
    id: 21,
    word: "Eloquent",
    phonetic: "/ˈel.ə.kwənt/",
    type: "Tính từ",
    meaning: "Hùng biện, truyền cảm, có sức thuyết phục cao",
    exampleEn: "His eloquent speech moved the entire audience to tears.",
    exampleVi: "Bài phát biểu truyền cảm của ông đã làm lay động toàn thể người nghe.",
    memoryTip: "Âm điệu mượt mà, ngôn từ trau chuốt chạm thẳng đến trái tim người nghe.",
    collocation: "Eloquent expression (cách diễn đạt truyền cảm)"
  },
  {
    id: 22,
    word: "Versatile",
    phonetic: "/ˈvɜː.sə.taɪl/",
    type: "Tính từ",
    meaning: "Đa năng, linh hoạt trong nhiều vai trò khác nhau",
    exampleEn: "He is a versatile engineer skilled in both software and hardware.",
    exampleVi: "Anh ấy là một kỹ sư đa năng, thành thạo cả phần mềm lẫn phần cứng.",
    memoryTip: "Khả năng ứng biến nhanh nhạy, đảm nhiệm hiệu quả nhiều vị trí khác nhau.",
    collocation: "Versatile talent (tài năng toàn diện)"
  },
  {
    id: 23,
    word: "Courageous",
    phonetic: "/kəˈreɪ.dʒəs/",
    type: "Tính từ",
    meaning: "Dũng cảm, kiên định đối diện hiểm nguy hoặc khó khăn",
    exampleEn: "Standing up for justice requires a courageous heart.",
    exampleVi: "Dám đứng lên bảo vệ công lý đòi hỏi một trái tim dũng cảm.",
    memoryTip: "Gốc từ bắt nguồn từ trái tim - sức mạnh tinh thần xuất phát từ niềm tin chân chính.",
    collocation: "Courageous decision (quyết định can trường)"
  },
  {
    id: 24,
    word: "Grateful",
    phonetic: "/ˈɡreɪt.fəl/",
    type: "Tính từ",
    meaning: "Biết ơn, trân trọng những điều tốt lành nhận được",
    exampleEn: "I am deeply grateful for the guidance you gave me.",
    exampleVi: "Tôi vô cùng biết ơn sự chỉ dẫn quý báu mà bạn đã dành cho tôi.",
    memoryTip: "Ghi nhớ và trân quý những tấm lòng tốt, biến lòng biết ơn thành hành động tử tế.",
    collocation: "Grateful attitude (thái độ biết ơn)"
  },
  {
    id: 25,
    word: "Sincere",
    phonetic: "/sɪnˈsɪər/",
    type: "Tính từ",
    meaning: "Chân thành, xuất phát từ đáy lòng, không vụ lợi",
    exampleEn: "Please accept my sincere appreciation for your hard work.",
    exampleVi: "Xin hãy đón nhận sự trân trọng chân thành của tôi dành cho công sức của bạn.",
    memoryTip: "Sự trong trẻo, mộc mạc như viên ngọc thuần khiết không chút gợn giả dối.",
    collocation: "Sincere gratitude (lòng biết ơn chân thành)"
  },
  {
    id: 26,
    word: "Decisive",
    phonetic: "/dɪˈsaɪ.sɪv/",
    type: "Tính từ",
    meaning: "Quyết đoán, dứt khoát, mang tính định đoạt",
    exampleEn: "A successful manager must take decisive action in critical moments.",
    exampleVi: "Người quản lý giỏi phải hành động quyết đoán trong những thời điểm then chốt.",
    memoryTip: "Nắm bắt thời cơ, quyết định rõ ràng không do dự hay chần chừ.",
    collocation: "Decisive factor (yếu tố mang tính quyết định)"
  },
  {
    id: 27,
    word: "Prudent",
    phonetic: "/ˈpruː.dənt/",
    type: "Tính từ",
    meaning: "Thận trọng, khôn ngoan, biết dự liệu tương lai",
    exampleEn: "It is prudent to save some resources for unexpected situations.",
    exampleVi: "Việc chuẩn bị sẵn nguồn lực cho các tình huống bất ngờ là rất khôn ngoan.",
    memoryTip: "Biết nhìn xa trông rộng để lường trước và phòng tránh những rủi ro có thể xảy ra.",
    collocation: "Prudent approach (cách tiếp cận thận trọng)"
  },
  {
    id: 28,
    word: "Serene",
    phonetic: "/səˈriːn/",
    type: "Tính từ",
    meaning: "Thanh thản, tĩnh lặng, an yên trong tâm hồn",
    exampleEn: "The mountain morning felt completely peaceful and serene.",
    exampleVi: "Buổi sớm mai trên núi mang lại cảm giác vô cùng thanh bình và tĩnh tại.",
    memoryTip: "Mặt hồ tĩnh lặng không một gợn sóng, mang lại sự điềm đạm, an nhiên.",
    collocation: "Serene state of mind (tâm thái an yên)"
  },
  {
    id: 29,
    word: "Dynamic",
    phonetic: "/daɪˈnæm.ɪk/",
    type: "Tính từ",
    meaning: "Năng động, dồi dào năng lượng và luôn biến chuyển tích cực",
    exampleEn: "She brought a dynamic energy to the whole collaborative project.",
    exampleVi: "Cô ấy mang lại nguồn năng lượng tràn đầy sức sống cho toàn bộ dự án hợp tác.",
    memoryTip: "Nguồn động lực không ngừng chuyển động, truyền cảm hứng tích cực cho xung quanh.",
    collocation: "Dynamic environment (môi trường năng động)"
  },
  {
    id: 30,
    word: "Tenacious",
    phonetic: "/təˈneɪ.ʃəs/",
    type: "Tính từ",
    meaning: "Bền bỉ, kiên định bám đuổi mục tiêu đến cùng",
    exampleEn: "His tenacious pursuit of excellence earned him wide respect.",
    exampleVi: "Sự kiên định theo đuổi sự hoàn hảo đã mang lại cho anh ấy sự kính trọng rộng rãi.",
    memoryTip: "Gốc từ nắm giữ - một khi đã xác định mục tiêu đúng đắn thì quyết không buông bỏ.",
    collocation: "Tenacious spirit (tinh thần kiên định phi thường)"
  }
];

// Danh mục chủ đề 12 ngày học (mỗi ngày 20 từ)
const DAY_THEMES = {
  "1": "Tính cách và Tư duy (Từ 1 - 20)",
  "2": "Giao tiếp và Diễn đạt (Từ 21 - 40)",
  "3": "Hiệu suất và Công việc (Từ 41 - 60)",
  "4": "Trí tuệ và Ra quyết định (Từ 61 - 80)",
  "5": "Cảm xúc và Tâm lý (Từ 81 - 100)",
  "6": "Đổi mới và Phát triển (Từ 101 - 120)",
  "7": "Xã hội và Mối quan hệ (Từ 121 - 140)",
  "8": "Nghị lực và Vượt khó (Từ 141 - 160)",
  "9": "Lối sống và Thực tại (Từ 161 - 180)",
  "10": "Tầm nhìn và Lãnh đạo (Từ 181 - 200)",
  "11": "Tri thức và Học tập suốt đời (Từ 201 - 220)",
  "12": "Thành tựu và Đỉnh cao (Từ 221 - 240)",
  "today": "20 từ chưa thuộc tiếp theo",
  "all": "Toàn bộ kho từ vựng"
};

// Khởi tạo trạng thái học tập
class VocabularyApp {
  constructor(defaultWords) {
    this.defaultWords = [...defaultWords];
    this.words = this.loadStoredWords();
    this.learningStatus = this.loadStoredStatus();
    this.currentDay = this.loadStoredDay();

    // Load AI settings
    this.geminiApiKey = localStorage.getItem("vocab_gemini_api_key") || "";
    this.aiTopic = localStorage.getItem("vocab_ai_topic") || "";
    this.isGeneratingAI = false;

    this.currentFilter = "all";
    this.currentIndex = 0;
    this.isFlipped = false;
    this.isTestMode = false;

    this.currentBatchWords = [];
    this.activeWords = [];

    this.initElements();
    this.updateCurrentBatch();
    this.initEventListeners();
    this.render();
  }

  loadStoredDay() {
    try {
      return localStorage.getItem("vocab_current_day") || "1";
    } catch {
      return "1";
    }
  }

  saveDay(day) {
    try {
      localStorage.setItem("vocab_current_day", day);
    } catch {
      // Bỏ qua nếu môi trường không hỗ trợ lưu trữ
    }
  }

  loadStoredWords() {
    try {
      const stored = localStorage.getItem("vocab_custom_words");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Tự động nâng cấp lên kho 240 từ mới nếu trước đó chỉ lưu 30 từ cũ
          if (parsed.length <= 30 && this.defaultWords.length >= 200) {
            return [...this.defaultWords];
          }
          return parsed;
        }
      }
      return [...this.defaultWords];
    } catch {
      return [...this.defaultWords];
    }
  }

  saveWords() {
    try {
      localStorage.setItem("vocab_custom_words", JSON.stringify(this.words));
    } catch {
      // Bỏ qua nếu môi trường không hỗ trợ lưu trữ
    }
  }

  loadStoredStatus() {
    try {
      const stored = localStorage.getItem("vocab_learning_status");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  saveStatus() {
    try {
      localStorage.setItem("vocab_learning_status", JSON.stringify(this.learningStatus));
    } catch {
      // Bỏ qua nếu môi trường không hỗ trợ lưu trữ
    }
  }

  updateCurrentBatch() {
    if (this.currentDay === "today") {
      // Lấy 20 từ chưa thuộc đầu tiên để học hôm nay (đảm bảo không lặp lại từ đã thuộc)
      const unmastered = this.words.filter((w) => this.learningStatus[w.id] !== "mastered");
      this.currentBatchWords = unmastered.length > 0 ? unmastered.slice(0, 20) : this.words.slice(0, 20);
    } else if (this.currentDay === "all") {
      this.currentBatchWords = [...this.words];
    } else {
      const dayNum = parseInt(this.currentDay, 10) || 1;
      const startIndex = (dayNum - 1) * 20;
      this.currentBatchWords = this.words.slice(startIndex, startIndex + 20);
      if (this.currentBatchWords.length === 0) {
        this.currentBatchWords = this.words.slice(0, 20);
      }
    }

    this.applyFilter(this.currentFilter);
  }

  initElements() {
    this.cardElement = document.getElementById("flashcard");
    this.totalCountEl = document.getElementById("total-count");
    this.masteredCountEl = document.getElementById("mastered-count");
    this.reviewCountEl = document.getElementById("review-count");
    this.currentIndexLabel = document.getElementById("current-index-label");
    this.progressPercentEl = document.getElementById("progress-percent");
    this.progressBar = document.getElementById("progress-bar");

    // Theo dõi ngày học
    this.dayBadgeEl = document.getElementById("day-badge");
    this.dayDisplayTitleEl = document.getElementById("day-display-title");
    this.dayProgressDescEl = document.getElementById("day-progress-desc");
    this.daySelectEl = document.getElementById("day-select");
    this.nextDayBtn = document.getElementById("next-day-btn");

    if (this.daySelectEl) {
      this.daySelectEl.value = this.currentDay;
    }

    // Mặt trước
    this.cardTypeEl = document.getElementById("card-type");
    this.cardBadgeEl = document.getElementById("card-badge");
    this.cardWordEl = document.getElementById("card-word");
    this.cardPhoneticEl = document.getElementById("card-phonetic");
    this.audioBtn = document.getElementById("audio-btn");

    // Mặt sau
    this.cardBackWordEl = document.getElementById("card-back-word");
    this.cardStatusTextEl = document.getElementById("card-status-text");
    this.cardMeaningEl = document.getElementById("card-meaning");
    this.cardExampleEnEl = document.getElementById("card-example-en");
    this.cardExampleViEl = document.getElementById("card-example-vi");
    this.cardTipEl = document.getElementById("card-tip");
    this.cardCollocationEl = document.getElementById("card-collocation");

    // Các nút thao tác học
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.flipBtn = document.getElementById("flip-btn");
    this.markMasterBtn = document.getElementById("mark-master-btn");
    this.markReviewBtn = document.getElementById("mark-review-btn");
    this.shuffleBtn = document.getElementById("shuffle-btn");

    // Các nút quản lý từ vựng
    this.editCurrentBtn = document.getElementById("edit-current-btn");
    this.deleteCurrentBtn = document.getElementById("delete-current-btn");
    this.openAddBtn = document.getElementById("open-add-btn");
    this.openBulkBtn = document.getElementById("open-bulk-btn");
    this.restartCycleBtn = document.getElementById("restart-cycle-btn");
    this.resetWordsBtn = document.getElementById("reset-words-btn");
    this.wordListTitleEl = document.getElementById("word-list-title");

    // AI Elements
    this.aiSettingsBtn = document.getElementById("ai-settings-btn");
    this.aiGenerateBtn = document.getElementById("ai-generate-btn");
    this.aiSettingsModal = document.getElementById("ai-settings-modal");
    this.aiCloseBtn = document.getElementById("ai-close-btn");
    this.aiCancelBtn = document.getElementById("ai-cancel-btn");
    this.aiSettingsForm = document.getElementById("ai-settings-form");
    this.aiApiKeyInput = document.getElementById("ai-api-key");
    this.aiTopicInput = document.getElementById("ai-topic");
    this.aiLoadingModal = document.getElementById("ai-loading-modal");

    // Các phần tử hộp thoại thêm / sửa từ
    this.modalEl = document.getElementById("word-modal");
    this.modalTitleEl = document.getElementById("modal-title");
    this.modalCloseBtn = document.getElementById("modal-close-btn");
    this.modalCancelBtn = document.getElementById("modal-cancel-btn");
    this.modalSubmitBtn = document.getElementById("modal-submit-btn");
    this.wordFormEl = document.getElementById("word-form");

    this.formWordId = document.getElementById("form-word-id");
    this.formWord = document.getElementById("form-word");
    this.formType = document.getElementById("form-type");
    this.formPhonetic = document.getElementById("form-phonetic");
    this.formMeaning = document.getElementById("form-meaning");
    this.formExampleEn = document.getElementById("form-example-en");
    this.formExampleVi = document.getElementById("form-example-vi");
    this.formTip = document.getElementById("form-tip");
    this.formCollocation = document.getElementById("form-collocation");

    // Các phần tử hộp thoại nhập nhanh kho từ
    this.bulkModalEl = document.getElementById("bulk-import-modal");
    this.bulkCloseBtn = document.getElementById("bulk-close-btn");
    this.bulkCancelBtn = document.getElementById("bulk-cancel-btn");
    this.bulkFormEl = document.getElementById("bulk-import-form");
    this.bulkTextEl = document.getElementById("bulk-text");

    // Lưới từ vựng
    this.wordGridEl = document.getElementById("word-grid");

    // Nút lọc
    this.filterButtons = document.querySelectorAll(".filter-btn");

    // Chế độ kiểm tra
    this.testModeCheckbox = document.getElementById("test-mode-checkbox");
    this.cardFrontNormal = document.getElementById("card-front-normal");
    this.cardFrontTest = document.getElementById("card-front-test");
    this.cardMeaningTest = document.getElementById("card-meaning-test");
    this.testWordInput = document.getElementById("test-word-input");
    this.checkWordBtn = document.getElementById("check-word-btn");
    this.testFeedback = document.getElementById("test-feedback");
    this.frontHintText = document.getElementById("front-hint-text");

    this.rebuildDayDropdown();
  }

  rebuildDayDropdown() {
    if (!this.daySelectEl) return;
    const currentVal = this.currentDay;
    const totalWords = this.words.length;
    const totalDays = Math.max(1, Math.ceil(totalWords / 20));

    this.daySelectEl.innerHTML = `
      <option value="today">Hôm nay (20 từ chưa thuộc tiếp theo)</option>
    `;

    for (let d = 1; d <= totalDays; d++) {
      const start = (d - 1) * 20 + 1;
      const end = Math.min(d * 20, totalWords);
      const themeDesc = DAY_THEMES[d] ? ` - ${DAY_THEMES[d]}` : "";
      const opt = document.createElement("option");
      opt.value = String(d);
      opt.textContent = `Ngày ${d} (Từ ${start} - ${end})${themeDesc}`;
      this.daySelectEl.appendChild(opt);
    }

    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = `Toàn bộ kho từ (${totalWords} từ)`;
    this.daySelectEl.appendChild(allOpt);

    if (currentVal === "today" || currentVal === "all" || parseInt(currentVal, 10) <= totalDays) {
      this.daySelectEl.value = currentVal;
    } else {
      this.currentDay = "1";
      this.saveDay("1");
      this.daySelectEl.value = "1";
    }
  }

  initEventListeners() {
    // Nhấp vào thẻ để lật
    this.cardElement.addEventListener("click", (e) => {
      // Tránh lật thẻ nếu nhấp trúng nút phát âm
      if (e.target.closest("#audio-btn")) return;
      this.toggleFlip();
    });

    // Lật bằng nút bấm
    this.flipBtn.addEventListener("click", () => this.toggleFlip());

    // Nút điều hướng
    this.prevBtn.addEventListener("click", () => this.navigateCard(-1));
    this.nextBtn.addEventListener("click", () => this.navigateCard(1));

    // Nút phát âm
    this.audioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.playPronunciation();
    });

    // Nút đánh dấu đã thuộc / cần ôn tập
    this.markMasterBtn.addEventListener("click", () => this.updateCurrentCardStatus("mastered"));
    this.markReviewBtn.addEventListener("click", () => this.updateCurrentCardStatus("learning"));

    // Nút xáo trộn
    this.shuffleBtn.addEventListener("click", () => this.shuffleCards());

    // Thao tác quản lý từ vựng
    this.openAddBtn.addEventListener("click", () => this.openAddModal());
    if (this.openBulkBtn) {
      this.openBulkBtn.addEventListener("click", () => this.openBulkModal());
    }
    if (this.restartCycleBtn) {
      this.restartCycleBtn.addEventListener("click", () => this.restartCycle());
    }
    if (this.aiSettingsBtn) {
      this.aiSettingsBtn.addEventListener("click", () => this.openAiSettingsModal());
    }
    if (this.aiGenerateBtn) {
      this.aiGenerateBtn.addEventListener("click", () => this.generateWordsWithAI(5));
    }
    if (this.aiCloseBtn) this.aiCloseBtn.addEventListener("click", () => this.closeAiSettingsModal());
    if (this.aiCancelBtn) this.aiCancelBtn.addEventListener("click", () => this.closeAiSettingsModal());
    if (this.aiSettingsModal) {
      this.aiSettingsModal.addEventListener("click", (e) => {
        if (e.target === this.aiSettingsModal) this.closeAiSettingsModal();
      });
    }
    if (this.aiSettingsForm) {
      this.aiSettingsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.saveAiSettings();
      });
    }
    this.editCurrentBtn.addEventListener("click", () => {
      const current = this.getCurrentWord();
      if (current) this.openEditModal(current.id);
    });
    this.deleteCurrentBtn.addEventListener("click", () => this.deleteCurrentWord());
    this.resetWordsBtn.addEventListener("click", () => this.resetToDefaultWords());

    // Thao tác chuyển đổi ngày học
    if (this.daySelectEl) {
      this.daySelectEl.addEventListener("change", (e) => {
        this.switchDay(e.target.value);
      });
    }

    if (this.nextDayBtn) {
      this.nextDayBtn.addEventListener("click", () => {
        this.advanceToNextDay();
      });
    }

    // Đóng mở hộp thoại thêm / sửa từ
    this.modalCloseBtn.addEventListener("click", () => this.closeModal());
    this.modalCancelBtn.addEventListener("click", () => this.closeModal());
    this.modalEl.addEventListener("click", (e) => {
      if (e.target === this.modalEl) this.closeModal();
    });

    // Đóng mở hộp thoại nhập nhanh kho từ
    if (this.bulkCloseBtn) {
      this.bulkCloseBtn.addEventListener("click", () => this.closeBulkModal());
    }
    if (this.bulkCancelBtn) {
      this.bulkCancelBtn.addEventListener("click", () => this.closeBulkModal());
    }
    if (this.bulkModalEl) {
      this.bulkModalEl.addEventListener("click", (e) => {
        if (e.target === this.bulkModalEl) this.closeBulkModal();
      });
    }

    // Xử lý gửi biểu mẫu
    this.wordFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    if (this.bulkFormEl) {
      this.bulkFormEl.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleBulkSubmit();
      });
    }

    // Bộ lọc danh sách
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.filterButtons.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        this.applyFilter(e.target.dataset.filter);
      });
    });

    // Phím tắt bàn phím
    window.addEventListener("keydown", (e) => {
      // Bỏ qua phím tắt khi đang nhập liệu trong hộp thoại
      const isWordModalOpen = this.modalEl && this.modalEl.classList.contains("is-active");
      const isBulkModalOpen = this.bulkModalEl && this.bulkModalEl.classList.contains("is-active");

      if (isWordModalOpen || isBulkModalOpen) {
        if (e.key === "Escape") {
          this.closeModal();
          this.closeBulkModal();
        }
        return;
      }

      if (e.code === "Space") {
        if (document.activeElement === this.testWordInput) return;
        e.preventDefault();
        this.toggleFlip();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        this.navigateCard(1);
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        this.navigateCard(-1);
      }
    });

    // Sự kiện chế độ kiểm tra
    if (this.testModeCheckbox) {
      this.testModeCheckbox.addEventListener("change", (e) => {
        this.isTestMode = e.target.checked;
        this.renderCurrentCard();
      });
    }

    if (this.checkWordBtn) {
      this.checkWordBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn lật thẻ
        this.checkTestWord();
      });
    }

    if (this.testWordInput) {
      this.testWordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.checkTestWord();
        } else {
          this.testWordInput.className = "test-input";
          this.testFeedback.textContent = "";
        }
      });
      this.testWordInput.addEventListener("click", (e) => e.stopPropagation());
    }
  }

  checkTestWord() {
    const current = this.getCurrentWord();
    if (!current) return;

    const userInput = this.testWordInput.value.trim().toLowerCase();
    const actualWord = current.word.toLowerCase();

    if (userInput === actualWord) {
      this.testWordInput.className = "test-input is-correct";
      this.testFeedback.className = "test-feedback success";
      this.testFeedback.textContent = "Chính xác! Tuyệt vời.";
      setTimeout(() => {
        this.isFlipped = true;
        this.cardElement.classList.add("is-flipped");
      }, 500);
    } else {
      this.testWordInput.className = "test-input is-incorrect";
      this.testFeedback.className = "test-feedback error";
      this.testFeedback.textContent = "Chưa đúng, hãy thử lại!";
    }
  }

  openBulkModal() {
    if (this.bulkFormEl) this.bulkFormEl.reset();
    if (this.bulkModalEl) {
      this.bulkModalEl.classList.add("is-active");
      this.bulkModalEl.setAttribute("aria-hidden", "false");
    }
    if (this.bulkTextEl) setTimeout(() => this.bulkTextEl.focus(), 100);
  }

  closeBulkModal() {
    if (this.bulkModalEl) {
      this.bulkModalEl.classList.remove("is-active");
      this.bulkModalEl.setAttribute("aria-hidden", "true");
    }
  }

  parseBulkText(text) {
    if (!text || typeof text !== "string") return [];
    const lines = text.split(/\r?\n/);
    const parsedList = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      let word = "";
      let phonetic = "/.../";
      let type = "Từ vựng";
      let meaning = "";
      let exampleEn = "";
      let exampleVi = "";
      let memoryTip = "Ghi nhớ qua ví dụ và thực hành áp dụng trong giao tiếp.";
      let collocation = "";

      // Phân tách qua các ký tự thông dụng: gạch đứng (|), gạch ngang (- hoặc –), hai chấm (:), tab
      if (trimmed.includes("|")) {
        const parts = trimmed.split("|").map((p) => p.trim());
        word = parts[0] || "";
        if (parts.length >= 3) {
          phonetic = parts[1] || "/.../";
          meaning = parts[2] || "";
          if (parts[3]) exampleEn = parts[3];
          if (parts[4]) exampleVi = parts[4];
        } else if (parts.length === 2) {
          meaning = parts[1] || "";
        }
      } else if (trimmed.includes(" - ") || trimmed.includes(" – ")) {
        const parts = trimmed.split(/\s*[-–]\s*/);
        word = parts[0] || "";
        meaning = parts.slice(1).join(" - ") || "";
      } else if (trimmed.includes(":")) {
        const parts = trimmed.split(":");
        word = parts[0] || "";
        meaning = parts.slice(1).join(":").trim() || "";
      } else if (trimmed.includes("\t")) {
        const parts = trimmed.split("\t").map((p) => p.trim());
        word = parts[0] || "";
        meaning = parts[1] || "";
      } else {
        word = trimmed;
        meaning = "Từ vựng cần ghi nhớ";
      }

      if (word) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        collocation = word;
        if (!exampleEn) {
          exampleEn = `Always practice using ${word} in daily conversation.`;
          exampleVi = `Hãy luyện tập sử dụng từ ${word} trong các câu giao tiếp hằng ngày.`;
        }

        parsedList.push({
          id: Date.now() + Math.floor(Math.random() * 100000) + parsedList.length,
          word,
          phonetic,
          type,
          meaning: meaning || "Nghĩa đang cập nhật",
          exampleEn,
          exampleVi,
          memoryTip,
          collocation
        });
      }
    });

    return parsedList;
  }

  handleBulkSubmit() {
    const rawText = this.bulkTextEl ? this.bulkTextEl.value : "";
    const parsedWords = this.parseBulkText(rawText);

    if (parsedWords.length === 0) {
      alert("Vui lòng nhập ít nhất 1 từ vựng hợp lệ theo định dạng: Từ - Nghĩa.");
      return;
    }

    const modeInput = this.bulkFormEl.querySelector('input[name="import-mode"]:checked');
    const mode = modeInput ? modeInput.value : "replace";

    if (mode === "replace") {
      this.words = parsedWords;
      this.learningStatus = {};
      this.currentDay = "1";
      this.saveDay("1");
    } else {
      this.words = [...this.words, ...parsedWords];
    }

    this.saveWords();
    this.saveStatus();
    this.closeBulkModal();
    this.rebuildDayDropdown();
    this.updateCurrentBatch();
    this.render();

    const totalDays = Math.max(1, Math.ceil(this.words.length / 20));
    alert(`Đã nạp thành công ${parsedWords.length} từ vựng! Hệ thống đã tự động phân bổ thành ${totalDays} ngày học (mỗi ngày 20 từ không lặp lại).`);
  }

  restartCycle() {
    const confirmed = confirm("Bạn có muốn đặt lại trạng thái đã thuộc để bắt đầu lại chu kỳ học từ Ngày 1 không?");
    if (!confirmed) return;

    this.learningStatus = {};
    this.saveStatus();
    this.currentDay = "1";
    this.saveDay("1");
    if (this.daySelectEl) this.daySelectEl.value = "1";
    this.updateCurrentBatch();
    this.render();
    alert("Đã bắt đầu chu kỳ học mới từ Ngày 1. Toàn bộ từ vựng đã sẵn sàng cho lượt ôn tập tiếp theo!");
  }

  switchDay(day) {
    this.currentDay = day;
    this.saveDay(day);
    if (this.daySelectEl) {
      this.daySelectEl.value = day;
    }
    this.updateCurrentBatch();
    this.currentIndex = 0;
    this.isFlipped = false;
    if (this.cardElement) this.cardElement.classList.remove("is-flipped");
    this.render();
  }

  advanceToNextDay() {
    const totalDays = Math.max(1, Math.ceil(this.words.length / 20));

    if (this.currentDay === "today") {
      this.updateCurrentBatch();
      this.currentIndex = 0;
      this.render();
      alert("Đã chuyển sang đợt 20 từ tiếp theo chưa thuộc.");
      return;
    }

    const currentNum = parseInt(this.currentDay, 10);
    if (!isNaN(currentNum)) {
      if (currentNum < totalDays) {
        this.switchDay(String(currentNum + 1));
      } else {
        const restart = confirm(`Chúc mừng bạn đã hoàn thành hết ${totalDays} ngày học! Bạn có muốn bắt đầu lại chu kỳ học từ Ngày 1 không?`);
        if (restart) {
          this.restartCycle();
        }
      }
    } else {
      this.switchDay("1");
    }
  }

  openAddModal() {
    this.wordFormEl.reset();
    this.formWordId.value = "";
    this.modalTitleEl.textContent = "Thêm từ vựng mới";
    this.modalSubmitBtn.textContent = "Lưu thẻ từ";
    this.modalEl.classList.add("is-active");
    this.modalEl.setAttribute("aria-hidden", "false");
    setTimeout(() => this.formWord.focus(), 100);
  }

  openEditModal(wordId) {
    const item = this.words.find((w) => w.id === wordId);
    if (!item) return;

    this.formWordId.value = item.id;
    this.formWord.value = item.word || "";
    this.formType.value = item.type || "Tính từ";
    this.formPhonetic.value = item.phonetic || "";
    this.formMeaning.value = item.meaning || "";
    this.formExampleEn.value = item.exampleEn || "";
    this.formExampleVi.value = item.exampleVi || "";
    this.formTip.value = item.memoryTip || "";
    this.formCollocation.value = item.collocation || "";

    this.modalTitleEl.textContent = "Chỉnh sửa từ vựng";
    this.modalSubmitBtn.textContent = "Cập nhật thẻ";
    this.modalEl.classList.add("is-active");
    this.modalEl.setAttribute("aria-hidden", "false");
    setTimeout(() => this.formWord.focus(), 100);
  }

  closeModal() {
    this.modalEl.classList.remove("is-active");
    this.modalEl.setAttribute("aria-hidden", "true");
  }

  handleFormSubmit() {
    const wordId = this.formWordId.value;
    const wordData = {
      word: this.formWord.value.trim(),
      type: this.formType.value,
      phonetic: this.formPhonetic.value.trim() || "/.../",
      meaning: this.formMeaning.value.trim(),
      exampleEn: this.formExampleEn.value.trim(),
      exampleVi: this.formExampleVi.value.trim(),
      memoryTip: this.formTip.value.trim() || "Ghi nhớ qua ngữ cảnh và ví dụ thực tế.",
      collocation: this.formCollocation.value.trim() || this.formWord.value.trim()
    };

    if (!wordData.word || !wordData.meaning) {
      alert("Vui lòng điền từ tiếng Anh và nghĩa tiếng Việt.");
      return;
    }

    if (wordId) {
      // Chỉnh sửa từ hiện có
      const numericId = Number(wordId);
      const index = this.words.findIndex((w) => w.id === numericId || w.id === wordId);
      if (index !== -1) {
        this.words[index] = { ...this.words[index], ...wordData };
      }
    } else {
      // Thêm từ mới
      const newId = Date.now();
      const currentDayNum = parseInt(this.currentDay, 10) || 1;
      const newItem = { id: newId, day: currentDayNum, ...wordData };
      this.words.push(newItem);
    }

    this.saveWords();
    this.closeModal();
    this.rebuildDayDropdown();
    this.updateCurrentBatch();
    this.render();
  }

  deleteCurrentWord() {
    const current = this.getCurrentWord();
    if (!current) return;

    const confirmed = confirm(`Bạn có chắc chắn muốn xóa từ "${current.word}" khỏi danh sách học tập không?`);
    if (!confirmed) return;

    this.words = this.words.filter((w) => w.id !== current.id);
    delete this.learningStatus[current.id];

    this.saveWords();
    this.saveStatus();

    this.rebuildDayDropdown();
    this.updateCurrentBatch();
    if (this.currentIndex >= this.activeWords.length) {
      this.currentIndex = Math.max(0, this.activeWords.length - 1);
    }
    this.render();
  }

  resetToDefaultWords() {
    const confirmed = confirm("Bạn có muốn khôi phục lại toàn bộ kho 240 từ vựng chuẩn ban đầu không?");
    if (!confirmed) return;

    this.words = [...this.defaultWords];
    this.learningStatus = {};
    this.saveWords();
    this.saveStatus();

    this.currentDay = "1";
    this.saveDay("1");
    if (this.daySelectEl) {
      this.daySelectEl.value = "1";
    }

    this.rebuildDayDropdown();
    this.currentFilter = "all";
    this.filterButtons.forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === "all");
    });
    this.updateCurrentBatch();
    this.currentIndex = 0;
    this.render();
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      this.cardElement.classList.add("is-flipped");
    } else {
      this.cardElement.classList.remove("is-flipped");
    }
  }

  navigateCard(direction) {
    if (this.activeWords.length === 0) return;

    // Luôn đưa thẻ về mặt trước khi chuyển từ
    this.isFlipped = false;
    this.cardElement.classList.remove("is-flipped");

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + direction + this.activeWords.length) % this.activeWords.length;
      this.render();
    }, 150);
  }

  playPronunciation() {
    const current = this.getCurrentWord();
    if (!current) return;

    if (this.audioBtn) this.audioBtn.style.opacity = "0.5";

    const word = current.word.trim();

    const resetOpacity = () => {
      if (this.audioBtn) this.audioBtn.style.opacity = "1";
    };

    // Thử sử dụng API từ điển (Youdao) vì nó hỗ trợ CORS và ổn định hơn với môi trường file://
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
    const audio = new Audio(audioUrl);

    audio.onended = resetOpacity;
    audio.onerror = () => {
      // Nếu API lỗi, fallback sang Web Speech API
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        utterance.rate = 0.9;

        // Chọn giọng đọc tiếng Anh nếu có
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en-US') || v.lang.startsWith('en'));
        if (enVoice) utterance.voice = enVoice;

        utterance.onend = resetOpacity;
        utterance.onerror = resetOpacity;

        window.speechSynthesis.speak(utterance);
        setTimeout(resetOpacity, 2000);
      } else {
        resetOpacity();
      }
    };

    audio.play().catch(e => {
      console.warn("Lỗi phát âm audio:", e);
      audio.onerror();
    });
  }

  updateCurrentCardStatus(status) {
    const current = this.getCurrentWord();
    if (!current) return;

    this.learningStatus[current.id] = status;
    this.saveStatus();

    if (status === "mastered" && !this.isGeneratingAI) {
      let totalMastered = 0;
      this.words.forEach(w => {
        if (this.learningStatus[w.id] === "mastered") totalMastered++;
      });
      if (totalMastered === this.words.length && totalMastered > 0) {
        if (this.geminiApiKey) {
          this.generateWordsWithAI(5);
        } else {
          setTimeout(() => {
            alert("Chúc mừng bạn đã học thuộc toàn bộ kho từ! Hãy cài đặt Gemini API Key để AI tự động tìm thêm từ mới cho bạn nhé.");
          }, 500);
        }
      }
    }

    // Tự động chuyển từ tiếp theo tạo trải nghiệm liền mạch
    this.navigateCard(1);
  }

  shuffleCards() {
    this.isFlipped = false;
    this.cardElement.classList.remove("is-flipped");

    // Thuật toán xáo trộn Fisher-Yates
    for (let i = this.activeWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.activeWords[i], this.activeWords[j]] = [this.activeWords[j], this.activeWords[i]];
    }

    this.currentIndex = 0;
    this.render();
  }

  applyFilter(filterType) {
    this.currentFilter = filterType;
    this.isFlipped = false;
    if (this.cardElement) this.cardElement.classList.remove("is-flipped");

    if (filterType === "all") {
      this.activeWords = [...this.currentBatchWords];
    } else if (filterType === "mastered") {
      this.activeWords = this.currentBatchWords.filter((w) => this.learningStatus[w.id] === "mastered");
    } else if (filterType === "learning") {
      this.activeWords = this.currentBatchWords.filter((w) => this.learningStatus[w.id] !== "mastered");
    }

    this.currentIndex = 0;
    this.render();
  }

  getCurrentWord() {
    if (this.activeWords.length === 0) return null;
    return this.activeWords[this.currentIndex];
  }

  render() {
    this.renderStats();
    this.renderCurrentCard();
    this.renderGrid();
  }

  renderStats() {
    const batchTotal = this.currentBatchWords.length;
    let masteredBatch = 0;
    let reviewBatch = 0;

    this.currentBatchWords.forEach((w) => {
      if (this.learningStatus[w.id] === "mastered") {
        masteredBatch++;
      } else if (this.learningStatus[w.id] === "learning") {
        reviewBatch++;
      }
    });

    // Thống kê toàn bộ kho từ
    let totalMasteredOverall = 0;
    this.words.forEach((w) => {
      if (this.learningStatus[w.id] === "mastered") {
        totalMasteredOverall++;
      }
    });

    this.totalCountEl.textContent = batchTotal;
    this.masteredCountEl.textContent = masteredBatch;
    this.reviewCountEl.textContent = reviewBatch;

    // Cập nhật thông tin ngày học
    if (this.dayBadgeEl) {
      if (this.currentDay === "today") {
        this.dayBadgeEl.textContent = "Hôm nay";
      } else if (this.currentDay === "all") {
        this.dayBadgeEl.textContent = "Kho từ";
      } else {
        this.dayBadgeEl.textContent = `Ngày ${this.currentDay} / 12`;
      }
    }

    if (this.dayDisplayTitleEl) {
      this.dayDisplayTitleEl.textContent = DAY_THEMES[this.currentDay] || `Đợt học ${this.currentDay}`;
    }

    if (this.dayProgressDescEl) {
      this.dayProgressDescEl.textContent = `Đã thuộc: ${masteredBatch} / ${batchTotal} từ đợt này (Toàn kho: ${totalMasteredOverall} / ${this.words.length})`;
    }

    if (this.wordListTitleEl) {
      this.wordListTitleEl.textContent = `Danh sách từ đợt này (${batchTotal} từ)`;
    }

    // Tiến trình hiển thị
    if (this.activeWords.length > 0) {
      const position = this.currentIndex + 1;
      const totalActive = this.activeWords.length;
      const percent = Math.round((position / totalActive) * 100);

      this.currentIndexLabel.textContent = `Thẻ ${position} / ${totalActive}`;
      this.progressPercentEl.textContent = `${percent}%`;
      this.progressBar.style.width = `${percent}%`;
    } else {
      this.currentIndexLabel.textContent = "Không có từ phù hợp";
      this.progressPercentEl.textContent = "0%";
      this.progressBar.style.width = "0%";
    }
  }

  renderCurrentCard() {
    const current = this.getCurrentWord();
    if (!current) {
      this.cardWordEl.textContent = "Trống";
      this.cardPhoneticEl.textContent = "";
      this.cardMeaningEl.textContent = "Không có thẻ nào trong mục lọc này.";
      this.cardExampleEnEl.textContent = "";
      this.cardExampleViEl.textContent = "";
      this.cardTipEl.textContent = "";
      this.cardCollocationEl.textContent = "";
      return;
    }

    // Mặt trước
    this.cardTypeEl.textContent = current.type;
    const batchIndex = this.currentBatchWords.findIndex((w) => w.id === current.id) + 1;
    const formattedBatchIndex = batchIndex < 10 ? `0${batchIndex}` : batchIndex;
    const totalBatch = this.currentBatchWords.length;
    this.cardBadgeEl.textContent = `${formattedBatchIndex} / ${totalBatch}`;
    this.cardWordEl.textContent = current.word;
    this.cardPhoneticEl.textContent = current.phonetic;

    // Chế độ kiểm tra
    if (this.isTestMode) {
      if (this.cardFrontNormal) this.cardFrontNormal.style.display = "none";
      if (this.cardFrontTest) {
        this.cardFrontTest.style.display = "block";
        this.cardMeaningTest.textContent = current.meaning;
        this.testWordInput.value = "";
        this.testWordInput.className = "test-input";
        this.testFeedback.textContent = "";
        this.testFeedback.className = "test-feedback";
        if (!this.isFlipped) {
          setTimeout(() => {
            if (this.testWordInput) this.testWordInput.focus();
          }, 50);
        }
      }
      if (this.frontHintText) this.frontHintText.textContent = "Gõ từ đúng để qua bài, hoặc lật thẻ xem đáp án";
    } else {
      if (this.cardFrontNormal) this.cardFrontNormal.style.display = "block";
      if (this.cardFrontTest) this.cardFrontTest.style.display = "none";
      if (this.frontHintText) this.frontHintText.textContent = "Nhấp hoặc nhấn phím Cách để lật xem giải nghĩa";
    }

    // Mặt sau
    this.cardBackWordEl.textContent = current.word;
    this.cardMeaningEl.textContent = current.meaning;
    this.cardExampleEnEl.textContent = `"${current.exampleEn}"`;
    this.cardExampleViEl.textContent = current.exampleVi;
    this.cardTipEl.textContent = current.memoryTip;
    this.cardCollocationEl.textContent = current.collocation;

    // Trạng thái thẻ
    const status = this.learningStatus[current.id];
    this.cardStatusTextEl.className = "card-status-pill";
    if (status === "mastered") {
      this.cardStatusTextEl.textContent = "Đã thuộc";
      this.cardStatusTextEl.classList.add("status-mastered");
    } else if (status === "learning") {
      this.cardStatusTextEl.textContent = "Cần ôn lại";
      this.cardStatusTextEl.classList.add("status-review");
    } else {
      this.cardStatusTextEl.textContent = "Mới học";
    }
  }

  renderGrid() {
    this.wordGridEl.innerHTML = "";
    const currentWord = this.getCurrentWord();

    this.currentBatchWords.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";

      if (currentWord && currentWord.id === item.id) {
        gridItem.classList.add("active");
      }

      const status = this.learningStatus[item.id];
      if (status === "mastered") {
        gridItem.classList.add("status-mastered");
      } else if (status === "learning") {
        gridItem.classList.add("status-review");
      }

      gridItem.innerHTML = `
        <span class="grid-word">${item.word}</span>
        <span class="grid-meaning">${item.meaning}</span>
      `;

      gridItem.addEventListener("click", () => {
        // Chuyển tới thẻ này
        const activeIdx = this.activeWords.findIndex((w) => w.id === item.id);
        if (activeIdx !== -1) {
          this.currentIndex = activeIdx;
        } else {
          // Nếu đang lọc mà từ không có trong nhóm lọc, chuyển về tất cả
          this.currentFilter = "all";
          this.activeWords = [...this.currentBatchWords];
          this.filterButtons.forEach((b) => {
            b.classList.toggle("active", b.dataset.filter === "all");
          });
          this.currentIndex = this.currentBatchWords.findIndex((w) => w.id === item.id);
        }

        this.isFlipped = false;
        this.cardElement.classList.remove("is-flipped");
        this.render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      this.wordGridEl.appendChild(gridItem);
    });
  }

  openAiSettingsModal() {
    if (this.aiSettingsForm) this.aiSettingsForm.reset();
    if (this.aiApiKeyInput) this.aiApiKeyInput.value = this.geminiApiKey;
    if (this.aiTopicInput) this.aiTopicInput.value = this.aiTopic;
    if (this.aiSettingsModal) {
      this.aiSettingsModal.classList.add("is-active");
      this.aiSettingsModal.setAttribute("aria-hidden", "false");
    }
  }

  closeAiSettingsModal() {
    if (this.aiSettingsModal) {
      this.aiSettingsModal.classList.remove("is-active");
      this.aiSettingsModal.setAttribute("aria-hidden", "true");
    }
  }

  saveAiSettings() {
    if (this.aiApiKeyInput && this.aiTopicInput) {
      this.geminiApiKey = this.aiApiKeyInput.value.trim();
      this.aiTopic = this.aiTopicInput.value.trim();
      localStorage.setItem("vocab_gemini_api_key", this.geminiApiKey);
      localStorage.setItem("vocab_ai_topic", this.aiTopic);
      this.closeAiSettingsModal();
      alert("Đã lưu cài đặt AI!");
    }
  }

  async generateWordsWithAI(count = 5) {
    if (!this.geminiApiKey) {
      alert("Vui lòng cài đặt Gemini API Key trước khi sử dụng tính năng AI!");
      this.openAiSettingsModal();
      return;
    }
    if (this.isGeneratingAI) return;
    this.isGeneratingAI = true;

    if (this.aiLoadingModal) {
      this.aiLoadingModal.classList.add("is-active");
      this.aiLoadingModal.setAttribute("aria-hidden", "false");
    }

    const existingWords = this.words.map(w => w.word).join(", ");
    const topicPrompt = this.aiTopic ? ` Chủ đề ưu tiên: ${this.aiTopic}.` : "";

    const prompt = `Tạo ${count} từ vựng tiếng Anh mới, trình độ trung cấp đến cao cấp.${topicPrompt} 
TUYỆT ĐỐI KHÔNG lặp lại các từ sau: ${existingWords}.
Trả về CHỈ một mảng JSON (không bọc trong markdown, không kèm text nào khác ngoài JSON), mỗi object có các trường: 
- word (string)
- type (string, ví dụ: Tính từ, Danh từ, Động từ)
- phonetic (string, phiên âm quốc tế)
- meaning (string, nghĩa tiếng Việt ngắn gọn)
- exampleEn (string, 1 câu ví dụ tiếng Anh ngắn)
- exampleVi (string, dịch câu ví dụ sang tiếng Việt)
- memoryTip (string, 1 câu mẹo liên tưởng để nhớ)
- collocation (string, cụm từ đi kèm, ví dụ: Resilient mindset)`;

    try {
      const cleanApiKey = this.geminiApiKey.trim();
      // Không gắn ?key= vào URL
      const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";

      let response;
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts) {
        attempts++;
        response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": cleanApiKey
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
          })
        });

        // Nếu máy chủ quá tải (503), chờ 2 giây rồi thử lại
        if (response.status === 503 && attempts < maxAttempts) {
          console.warn(`Máy chủ quá tải (503). Đang thử lại lần ${attempts}...`);
          await new Promise(resolve => setTimeout(resolve, 2000));
          continue;
        }
        break;
      }

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Lỗi chi tiết từ máy chủ Google:", errorDetails);
        throw new Error("Lỗi kết nối API. Vui lòng kiểm tra lại API Key.");
      }

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      const parsedWords = JSON.parse(aiText);

      // Validate & append
      let maxId = 0;
      this.words.forEach(w => { if (w.id > maxId) maxId = w.id; });

      const newValidWords = parsedWords.map((item, idx) => ({
        id: maxId + idx + 1,
        word: item.word || "Unknown",
        type: item.type || "Từ vựng",
        phonetic: item.phonetic || "/.../",
        meaning: item.meaning || "Chưa có nghĩa",
        exampleEn: item.exampleEn || "",
        exampleVi: item.exampleVi || "",
        memoryTip: item.memoryTip || "",
        collocation: item.collocation || ""
      }));

      // Append words
      this.words = [...this.words, ...newValidWords];
      this.saveWords();

      const totalDays = Math.max(1, Math.ceil(this.words.length / 20));
      this.rebuildDayDropdown();

      // Auto move to the new day if they were on 'today' or previous last day
      if (this.currentDay !== "all") {
        this.currentDay = String(totalDays);
        this.saveDay(this.currentDay);
        if (this.daySelectEl) this.daySelectEl.value = this.currentDay;
      }

      this.updateCurrentBatch();
      this.render();

      setTimeout(() => {
        alert(`Đã thêm thành công ${newValidWords.length} từ vựng mới bằng AI!`);
      }, 300);

    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi khi lấy từ vựng từ AI. Vui lòng thử lại sau. Chi tiết: " + error.message);
    } finally {
      this.isGeneratingAI = false;
      if (this.aiLoadingModal) {
        this.aiLoadingModal.classList.remove("is-active");
        this.aiLoadingModal.setAttribute("aria-hidden", "true");
      }
    }
  }
}

// Khởi chạy ứng dụng khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  const initialSource = (typeof VOCABULARY_REPOSITORY !== "undefined" && Array.isArray(VOCABULARY_REPOSITORY))
    ? VOCABULARY_REPOSITORY
    : VOCABULARY_DATA;
  window.app = new VocabularyApp(initialSource);
});


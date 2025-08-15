/**
 * data.js — Nội dung flipbook, timeline, gallery, quiz, quotes
 * Ảnh sử dụng upload.wikimedia.org trực tiếp (ổn định)
 */

window.BOOK_PAGES = [
  {
    title: "Khái niệm về văn hóa",
    content: "Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng, vừa phản ánh vừa định hướng sự phát triển xã hội.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    evidence: "Hồ Chí Minh: 'Văn hóa soi đường cho quốc dân đi.'",
    extra: "Bạn có biết? Văn hóa Việt Nam có lịch sử hơn 4000 năm."
  },
  {
    title: "Vị trí của văn hóa trong cách mạng",
    content: "Văn hóa là nền tảng tinh thần, vừa là mục tiêu vừa là động lực của cách mạng.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    evidence: "Văn kiện Đảng, các bài nói của Hồ Chí Minh về vai trò văn hóa.",
    extra: "Ứng dụng thực tế: Phong trào xây dựng gia đình văn hóa."
  },
  {
    title: "Quan hệ văn hóa – chính trị",
    content: `Văn hóa phải ở trong chính trị, chính trị phải thấm đẫm văn hóa. Chính sách phát triển cần nhân văn, bền vững.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Vietnam_Museum_of_Ethnology_-_Hanoi_Sept2014.jpg",
    evidence: `Chính sách giáo dục, văn hóa trong kháng chiến là minh chứng.`
  },
  {
    title: "Quan hệ văn hóa – kinh tế",
    content: `Kinh tế phát triển phải gắn với văn hóa để đảm bảo lợi ích lâu dài, tránh chạy theo lợi ích vật chất nhất thời.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Temple_of_Confucius_in_Hanoi_%28Van%29.jpg",
    evidence: `Các chương trình phát triển nông thôn mới đều chú trọng yếu tố văn hóa.`
  },
  {
    title: "Ba tính chất của nền văn hóa mới",
    content: `<ul>
      <li><strong>Tính dân tộc</strong>: Kế thừa truyền thống, giữ gìn bản sắc.</li>
      <li><strong>Tính khoa học</strong>: Dựa trên lý luận, tiếp thu tinh hoa nhân loại.</li>
      <li><strong>Tính đại chúng</strong>: Phục vụ đông đảo quần chúng nhân dân.</li>
    </ul>`,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Temple_of_Literature_Hanoi_Vietnam_19.jpg",
    evidence: `Luận điểm xuất hiện trong nhiều bài viết của Hồ Chí Minh.`
  },
  {
    title: "Tính dân tộc trong văn hóa",
    content: `Văn hóa phải gắn với truyền thống, lịch sử, phong tục tập quán của dân tộc. Không được lai căng, mất gốc.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Vietnamese_family.jpg",
    evidence: `Phong trào xây dựng gia đình văn hóa, bảo tồn di sản.`
  },
  {
    title: "Tính khoa học trong văn hóa",
    content: `Văn hóa phải dựa trên lý luận khoa học, tiếp thu có chọn lọc tinh hoa nhân loại, loại bỏ mê tín dị đoan.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Vietnamese_students_%28Unsplash%29.jpg",
    evidence: `Chương trình giáo dục mới, đổi mới phương pháp giảng dạy.`
  },
  {
    title: "Tính đại chúng trong văn hóa",
    content: `Văn hóa phải phục vụ đông đảo quần chúng, không chỉ dành cho tầng lớp trí thức. Mọi người đều được hưởng thụ văn hóa.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Water_puppetry_in_Hanoi.jpg",
    evidence: `Phong trào văn nghệ quần chúng, hội diễn toàn quốc.`
  },
  {
    title: "Ba chức năng lớn của văn hóa",
    content: `<ol>
      <li>Bồi dưỡng tư tưởng, tình cảm cao đẹp.</li>
      <li>Nâng cao dân trí.</li>
      <li>Bồi dưỡng phẩm chất, phong cách, lối sống lành mạnh.</li>
    </ol>`,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Ho-Chi-Minh-1970.jpg",
    evidence: `Phong trào học tập, xây dựng lối sống mới.`
  },
  {
    title: "Bồi dưỡng tư tưởng, tình cảm",
    content: `Văn hóa giúp hình thành lý tưởng, tình cảm cao đẹp, yêu nước, thương dân, đoàn kết cộng đồng.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/93/B%C3%A1c_H%E1%BB%93_ch%C3%A2n_dung_crop.jpg",
    evidence: `Các bài hát, tác phẩm văn học cổ vũ tinh thần yêu nước.`
  },
  {
    title: "Nâng cao dân trí",
    content: `Văn hóa giáo dục giúp nâng cao dân trí, xóa mù chữ, phát triển tri thức, kỹ năng sống.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Vietnamese_students_%28Unsplash%29.jpg",
    evidence: `Phong trào xóa mù chữ, phổ cập giáo dục toàn dân.`
  },
  {
    title: "Bồi dưỡng phẩm chất, lối sống",
    content: `Văn hóa giúp hình thành phẩm chất tốt, lối sống lành mạnh, trung thực, cần kiệm, liêm chính.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Vietnamese_family.jpg",
    evidence: `Phong trào xây dựng gia đình văn hóa, nếp sống văn minh.`
  },
  {
    title: "Văn hóa giáo dục — then chốt",
    content: `Giáo dục là then chốt để "trồng người". Hồ Chí Minh nhấn mạnh giáo dục kết hợp lao động, rèn luyện phẩm chất.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Ho-Chi-Minh-1970.jpg",
    evidence: `“Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người.”`
  },
  {
    title: "Văn hóa văn nghệ — một mặt trận",
    content: `Văn nghệ là một mặt trận: văn nghệ sĩ là chiến sĩ; tác phẩm là vũ khí tinh thần, sát cánh cùng nhân dân.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Water_puppetry_in_Hanoi.jpg",
    evidence: `Các hoạt động văn nghệ quần chúng trong kháng chiến là minh họa.`
  },
  {
    title: "Văn hóa đời sống & đạo đức",
    content: `Văn hóa đời sống là nếp sống, gia đình, ứng xử xã hội. Người kêu gọi thực hành: <strong>cần, kiệm, liêm, chính</strong> và coi "đạo đức là gốc" của người cách mạng.`,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Vietnamese_family.jpg",
    evidence: `Phong trào xây dựng gia đình văn hóa, nếp sống văn minh.`
  },
  {
    title: "Ứng dụng & Kết luận",
    content: `Văn hóa phải thấm vào mọi mặt của đời sống; giữ gìn và phát huy văn hóa đồng nghĩa với giữ gìn bản sắc và sức mạnh tinh thần của dân tộc — “Văn hóa còn thì dân tộc còn.”`,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Temple_of_Confucius_in_Hanoi_%28Van%29.jpg",
    evidence: `Kết luận dựa trên các luận điểm của Hồ Chí Minh về văn hóa và thực tiễn lịch sử.`
  }
];

/* timeline */
const TIMELINE = [
  { year: "1945", text: "Cách mạng Tháng Tám — khởi đầu xây dựng văn hóa mới." },
  { year: "1946", text: "Tuyên truyền, chú trọng giáo dục, khuyến khích dân trí." },
  { year: "1950s", text: "Phong trào văn nghệ quần chúng phát triển mạnh trong kháng chiến." },
  { year: "1960s", text: "Xây dựng nếp sống mới, mở rộng hoạt động văn hóa." },
  { year: "1975", text: "Thống nhất đất nước — tiếp tục phát huy văn hóa toàn dân." }
];

/* gallery */
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", alt:"Chân dung Hồ Chí Minh" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", alt:"Sách và văn hóa" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", alt:"Múa rối nước" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", alt:"Văn Miếu" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80", alt:"Học sinh Việt Nam" },
  { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80", alt:"Gia đình Việt Nam" }
];

/* quiz */
const QUIZ = [
  {
    q: "Hồ Chí Minh xác định văn hóa là gì?",
    choices: ["Một bộ phận nhỏ của xã hội", "Đời sống tinh thần của xã hội", "Chỉ là nghệ thuật", "Chỉ liên quan tới tôn giáo"],
    ans: 1
  },
  {
    q: "Ba tính chất của nền văn hóa mới theo Hồ Chí Minh gồm:",
    choices: ["Dân tộc, Khoa học, Độc quyền", "Dân tộc, Khoa học, Đại chúng", "Truyền thống, Tôn giáo, Quốc tế", "Kinh tế, Chính trị, Tôn giáo"],
    ans: 1
  },
  {
    q: "Câu 'Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người' liên quan đến:",
    choices: ["Văn hóa văn nghệ", "Văn hóa giáo dục", "Văn hóa đời sống", "Chính trị"],
    ans: 1
  },
  {
    q: "Hồ Chí Minh cho rằng văn nghệ sĩ là:",
    choices: ["Nhà kinh doanh", "Chiến sĩ trên mặt trận văn hóa", "Người vô trách nhiệm", "Chỉ phục vụ thị hiếu cá nhân"],
    ans: 1
  },
  {
    q: "Đạo đức cách mạng theo Hồ Chí Minh không gồm:",
    choices: ["Cần, Kiệm, Liêm, Chính", "Trung với nước, Hiếu với dân", "Chí công vô tư", "Tư lợi cá nhân là trên hết"],
    ans: 3
  },
  {
    q: "Tại sao 'Văn hóa còn thì dân tộc còn'?",
    choices: ["Vì văn hóa là nguồn sống tinh thần và bản sắc, quyết định sự bền vững của dân tộc", "Vì văn hóa tạo ra tài sản vật chất", "Vì văn hóa thay cho quân đội", "Không liên quan"],
    ans: 0
  }
];

/* quotes */
const QUOTES = [
  { text: "Văn hóa soi đường cho quốc dân đi.", src: "Văn kiện Hồ Chí Minh" },
  { text: "Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người.", src: "Hồ Chí Minh" },
  { text: "Đạo đức cách mạng là gốc.", src: "Hồ Chí Minh" }
];
